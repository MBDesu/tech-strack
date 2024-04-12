import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class ProductSearchComponent implements OnInit {

  @Input({ required: true }) products!: string[];
  @Input({ required: true }) selectedProducts!: string[];
  @Output() selectedProductsChange = new EventEmitter<string[]>();
  @Output() productSelected = new EventEmitter<string | null>();
  @Output() productRemoved = new EventEmitter<string | null>();

  filteredProducts!: Observable<string[]>;
  separatorKeyCodes = [ENTER, COMMA];
  productFormControl = new FormControl('', Validators.compose([
    Validators.required,
  ]));

  ngOnInit(): void {
    this.filteredProducts = this.productFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.productFormControl.addValidators(CustomValidators.isAutocompleteValue(this.products));
  }

  private _filter = (value: string | null): string[] => {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.products.filter(option => option.toLowerCase().includes(filterValue));
    }
    return this.products;
  };

  protected selectProduct = (product: string | null): void => {
    if (this.productFormControl.valid) {
      if (product && !this.selectedProducts.some((existingProduct) => {
         return product === existingProduct;
        })) {
        console.log(product);
        this.selectedProducts.push(product);
        this.selectedProductsChange.emit(this.selectedProducts);
        this.productSelected.emit(product);
      }
      this.productFormControl.reset('');
    }
  };

  protected removeProduct = (product: string) => {
    this.selectedProducts =
      this.selectedProducts.filter((selectedProduct) => selectedProduct !== product);
    this.selectedProductsChange.emit(this.selectedProducts);
    this.productRemoved.emit(product);
  };

}
