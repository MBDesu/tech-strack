import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { productCycleColumnMapping } from '../../common/models/product-cycle-column-mapping';
import { EndOfLifeDetails } from '../../services/end-of-life/models/end-of-life-api';
import { ProductCyclesComponent } from '../product-cycles/product-cycles.component';

@Component({
  selector: 'app-selected-products',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    MatButtonModule,
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

  @ViewChild(MatAccordion) protected accordion!: MatAccordion;

  protected drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.selectedProducts, event.previousIndex, event.currentIndex);
    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
  }

}
