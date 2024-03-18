import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { EndOfLifeService } from './services/end-of-life/end-of-life.service';
import { EndOfLifeDetails } from './services/end-of-life/models/end-of-life-api';
import { CustomValidators } from './utils/custom-validators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  columnDefs = ['cycle-cycle', 'cycle-release-date', 'cycle-support', 'cycle-lts', 'cycle-eol', 'cycle-latest'];
  error = false;
  filteredProducts!: Observable<string[]>;
  loading = false;
  product = new FormControl('', Validators.compose([
    Validators.required,
  ]));
  selectedProducts: string[] = [];
  selectedProductData: { [key: string]: EndOfLifeDetails[] } = {};
  selectedProductDataSources: { [key: string]: MatTableDataSource<EndOfLifeDetails> } = {};
  products: string[] = [];
  title = 'tech-strack';

  constructor(
    private endOfLifeService: EndOfLifeService,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
  }

  ngOnInit(): void {
    this.loading = true;
    this.endOfLifeService.onReady.subscribe((ready: boolean) => {
      if (ready) {
        this.products = this.endOfLifeService.products;
        this.product.addValidators(CustomValidators.isAutocompleteValue(this.products));
      } else {
        this.error = true;
      }
      this.loading = false;
      this.filteredProducts = this.product.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  addProduct(product: string | null): void {
    if (this.product.valid && !this.selectedProducts.includes(product as string)) {
      this.selectedProducts.push(product as string);
      this.loading = true;
      this.endOfLifeService.getAllDetails(product as string).subscribe((endOfLifeDetails) => {
        this.selectedProductDataSources[product as string] = new MatTableDataSource<EndOfLifeDetails>(endOfLifeDetails);
        if (endOfLifeDetails && endOfLifeDetails[0].supportedJavaVersions) {
          this.columnDefs.push(...['cycle-supported-java-versions', ...this.columnDefs.splice(this.columnDefs.length - 1, 1)]);
        }
        this.selectedProductData[product as string] = endOfLifeDetails;
        this.product.reset('');
        this.loading = false;
      });
    }
  }

  removeProduct(product: string): void {
    this.selectedProducts = this.selectedProducts.filter((selectedProduct) => selectedProduct !== product);
  }

  isSupported(support: string | boolean): boolean {
    if (typeof support === 'boolean') return support;
    const endOfSupportDate = new Date(support);
    return endOfSupportDate > new Date();
  }

  formatDateOrBoolean(date: string | boolean): string {
    if (typeof date === 'boolean') return date ? 'Yes' : 'No';
    return date ? 
        formatDate(date, 'longDate', Intl.NumberFormat().resolvedOptions().locale)
        : '';
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.products.filter(option => option.toLowerCase().includes(filterValue));
  }

}
