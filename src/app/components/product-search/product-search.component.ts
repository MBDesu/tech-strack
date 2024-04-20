import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { map, Observable, startWith } from 'rxjs';
import { productCycleColumnMapping } from '../../common/models/product-cycle-column-mapping';
import { CustomValidators } from '../../utils/custom-validators';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [
    CdkCopyToClipboard,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent implements OnInit, AfterViewInit {

  @Input({ required: true }) public products!: string[];
  @Input({ required: true }) public selectedProducts!: string[];
  @Output() public selectedProductsChange = new EventEmitter<string[]>();
  @Output() public productSelected = new EventEmitter<string | null>();
  @Output() public productRemoved = new EventEmitter<string | null>();

  @ViewChild('productSearchInput') protected productSearchInput!: ElementRef<HTMLInputElement>;
  protected filteredProducts!: Observable<string[]>;
  protected separatorKeyCodes = [ENTER, COMMA];
  protected productFormControl = new FormControl('', Validators.compose([
    Validators.required,
  ]));
  protected placeholder = '';
  protected snackbar = inject(MatSnackBar);

  ngOnInit(): void {
    this.placeholder = this.getRandomProduct();
    this.filteredProducts = this.productFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.productFormControl.addValidators(CustomValidators.isAutocompleteValue(this.products));
  }

  ngAfterViewInit(): void {
    this.productSearchInput?.nativeElement.focus();
  }

  private _filter = (value: string | null): string[] => {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.products.filter(option =>
        option.toLowerCase().includes(filterValue.toLowerCase()) ||
        productCycleColumnMapping[option]?.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
    return this.products;
  };

  protected selectProduct = (product: string | null): void => {
    if (this.productFormControl.valid) {
      if (product && !this.selectedProducts.some((existingProduct) => {
         return product === existingProduct;
        })) {
        this.selectedProducts.push(product);
        this.selectedProductsChange.emit(this.selectedProducts);
        this.productSelected.emit(product);
      }
      this.productFormControl.reset('');
    }
  };

  protected removeProduct = (product: string): void => {
    this.selectedProducts =
      this.selectedProducts.filter((selectedProduct) => selectedProduct !== product);
    this.selectedProductsChange.emit(this.selectedProducts);
    this.productRemoved.emit(product);
  };

  protected getRandomProduct = (): string => {
    return this.products[Math.floor(Math.random() * this.products.length)];
  };

  protected getLink = (): string => {
    return `${window.location.href.split('?')[0]}?products=${this.selectedProducts.join(',')}`;
  };

  protected readonly productCycleColumnMapping = productCycleColumnMapping;
}
