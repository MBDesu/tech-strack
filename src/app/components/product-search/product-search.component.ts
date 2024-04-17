import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import { CustomValidators } from '../../utils/custom-validators';
import { MatChipsModule } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { productCycleColumnMapping } from '../../common/models/product-cycle-column-mapping';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent implements OnInit, AfterViewInit {

  @Input({ required: true }) products!: string[];
  @Input({ required: true }) selectedProducts!: string[];
  @Output() selectedProductsChange = new EventEmitter<string[]>();
  @Output() productSelected = new EventEmitter<string | null>();
  @Output() productRemoved = new EventEmitter<string | null>();
  @ViewChild('productSearchInput') protected productSearchInput!: ElementRef<HTMLInputElement>;

  protected filteredProducts!: Observable<string[]>;
  protected separatorKeyCodes = [ENTER, COMMA];
  protected productFormControl = new FormControl('', Validators.compose([
    Validators.required,
  ]));
  protected placeholder = '';

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

  protected readonly productCycleColumnMapping = productCycleColumnMapping;
}
