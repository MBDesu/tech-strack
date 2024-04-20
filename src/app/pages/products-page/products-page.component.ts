import { HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductSearchComponent } from '../../components/product-search/product-search.component';
import { SelectedProductsComponent } from '../../components/selected-products/selected-products.component';
import { EndOfLifeService } from '../../services/end-of-life/end-of-life.service';
import { EndOfLifeDetails } from '../../services/end-of-life/models/end-of-life-api';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ProductSearchComponent,
    SelectedProductsComponent,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit {

  private endOfLifeService = inject(EndOfLifeService);
  protected loading = false;
  protected products: string[] = [];
  protected selectedProducts: string[] = [];
  protected selectedProductData: { [key: string]: EndOfLifeDetails[] } = {};

  ngOnInit(): void {
    this.selectedProducts = JSON.parse(localStorage.getItem('selectedProducts') || '[]');
    this.loading = true;
    this.endOfLifeService.onReady.subscribe((ready: boolean) => {
      if (ready) {
        this.products = this.endOfLifeService.products;
        this.selectedProducts.push(...this.getQueryParamProducts());
        if (this.selectedProducts.length) {
          this.selectedProducts.forEach((product: string) => {
            this.endOfLifeService.getAllDetails(product)
              .subscribe((endOfLifeDetails) => {
                this.selectedProductData[product as string] = endOfLifeDetails;
              }
            );
          });
          localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        }
      }
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  protected getQueryParamProducts(): string[] {
    const url = window.location.href;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      return httpParams.get('products')?.split(',')
        .filter((product: string) => this.products.indexOf(product) > -1 && this.selectedProducts.indexOf(product) < 0)
        ?? [];
    }
    return [];
  }

  protected addProduct(product: string | null): void {
    this.loading = true;
    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
    this.endOfLifeService.getAllDetails(product as string)
      .subscribe((endOfLifeDetails) => {
        this.selectedProductData[product as string] = endOfLifeDetails;
        this.loading = false;
      }
    );
  }

  protected removeProduct(product: string | null): void {
    if (product) {
      this.selectedProducts = this.selectedProducts
        .filter((selectedProduct) => product !== selectedProduct);
      localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
    }
  }

}
