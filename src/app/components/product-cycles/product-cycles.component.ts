import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EndOfLifeDetails } from '../../services/end-of-life/models/end-of-life-api';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-cycles',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
  ],
  templateUrl: './product-cycles.component.html',
  styleUrl: './product-cycles.component.scss'
})
export class ProductCyclesComponent implements OnInit {

  @Input({ required: true }) product!: string;
  @Input({ required: true }) eolDetails!: EndOfLifeDetails[];
  productDataSource!: MatTableDataSource<EndOfLifeDetails, MatPaginator>;
  @Output() productRemoved = new EventEmitter<string>();
  columnDefs = ['cycle-cycle', 'cycle-release-date', 'cycle-support', 'cycle-lts', 'cycle-eol', 'cycle-latest'];

  ngOnInit(): void {
    this.productDataSource = new MatTableDataSource<EndOfLifeDetails>(this.eolDetails);
    if (this.eolDetails && this.eolDetails[0].supportedJavaVersions) {
      this.columnDefs.push(...['cycle-supported-java-versions', ...this.columnDefs.splice(this.columnDefs.length - 1, 1)]);
    }
  }

  removeProduct(): void {
    this.productRemoved.emit(this.product);
  }

  formatDateOrBoolean = (date: string | boolean): string => {
    if (typeof date === 'boolean') return date ? 'Yes' : 'No';
    return date ? 
        formatDate(date, 'longDate', Intl.NumberFormat().resolvedOptions().locale)
        : '';
  };

}
