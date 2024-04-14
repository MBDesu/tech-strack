import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { EndOfLifeDetails } from '../../services/end-of-life/models/end-of-life-api';
import { productCycleColumnMapping } from '../../common/models/product-cycle-column-mapping';
import { ProductCyclesComponent } from '../product-cycles/product-cycles.component';

@Component({
  selector: 'app-selected-products',
  standalone: true,
  imports: [
    MatExpansionModule,
    ProductCyclesComponent,
  ],
  templateUrl: './selected-products.component.html',
  styleUrl: './selected-products.component.scss'
})
export class SelectedProductsComponent {

  @Input({ required: true })
  selectedProducts: string[] = [];

  @Input({ required: true })
  selectedProductData!: { [key: string]: EndOfLifeDetails[] };

  @Output()
  productRemoved = new EventEmitter<string>();

  protected readonly productCycleColumnMapping = productCycleColumnMapping;
}
