import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { EndOfLifeDetails } from '../../services/end-of-life/models/end-of-life-api';
import { productCycleColumnMapping } from '../../common/models/product-cycle-column-mapping';
import { ProductCyclesComponent } from '../product-cycles/product-cycles.component';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-selected-products',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    MatExpansionModule,
    ProductCyclesComponent,
  ],
  templateUrl: './selected-products.component.html',
  styleUrl: './selected-products.component.scss'
})
export class SelectedProductsComponent {

  protected readonly productCycleColumnMapping = productCycleColumnMapping;

  @Input({ required: true })
  public selectedProducts: string[] = [];

  @Input({ required: true })
  public selectedProductData!: { [key: string]: EndOfLifeDetails[] };

  @Output()
  public productRemoved = new EventEmitter<string>();

  protected drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.selectedProducts, event.previousIndex, event.currentIndex);
    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
  }

}
