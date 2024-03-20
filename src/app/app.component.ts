import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductCyclesComponent } from './components/product-cycles/product-cycles.component';
import { ProductSearchComponent } from "./components/product-search/product-search.component";
import { EndOfLifeService } from './services/end-of-life/end-of-life.service';
import { EndOfLifeDetails } from './services/end-of-life/models/end-of-life-api';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule,
        ProductCyclesComponent,
        ProductSearchComponent,
        RouterOutlet,
    ]
})
export class AppComponent implements OnInit {

  error = false;
  filteredProducts!: Observable<string[]>;
  loading = false;
  products: string[] = [];
  selectedProducts: string[] = [];
  selectedProductData: { [key: string]: EndOfLifeDetails[] } = {};
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
    this.selectedProducts = JSON.parse(localStorage.getItem('selectedProducts') || '[]');
    this.loading = true;
    this.endOfLifeService.onReady.subscribe((ready: boolean) => {
      if (ready) {
        this.products = this.endOfLifeService.products;
        if (this.selectedProducts.length) {
          this.selectedProducts.forEach((product: string) => {
            this.endOfLifeService.getAllDetails(product).subscribe((endOfLifeDetails) => {
              this.selectedProductData[product as string] = endOfLifeDetails;
            });
          });
        }
      }
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  addProduct(product: string | null): void {
    if (!this.selectedProducts.find((value) => value === product)) {
      this.loading = true;
      this.endOfLifeService.getAllDetails(product as string).subscribe((endOfLifeDetails) => {
        this.selectedProducts.push(product as string);
        localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        this.selectedProductData[product as string] = endOfLifeDetails;
        this.loading = false;
      });
    }
  }

  removeProduct(product: string): void {
    this.selectedProducts = this.selectedProducts.filter((selectedProduct) => selectedProduct !== product);
    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
  }

  isSupported = (support: string | boolean): boolean => {
    if (typeof support === 'boolean') return support;
    const endOfSupportDate = new Date(support);
    return endOfSupportDate > new Date();
  };

}
