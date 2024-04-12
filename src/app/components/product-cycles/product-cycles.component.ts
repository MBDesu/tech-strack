import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EndOfLifeDetails } from '../../services/end-of-life/models/end-of-life-api';

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

  @Input({ required: true }) eolDetails!: EndOfLifeDetails[];
  @Input({ required: true }) product!: string;
  @Output() productRemoved = new EventEmitter<string>();

  productDataSource!: MatTableDataSource<EndOfLifeDetails, MatPaginator>;
  defaultColumns = ['cycle-cycle', 'cycle-release-date', 'cycle-support', 'cycle-lts',  'cycle-eol', 'cycle-extended-support', 'cycle-supported-java-versions', 'cycle-latest'];
  columnDefs: string[] = [];

  ngOnInit(): void {
    this.productDataSource = new MatTableDataSource<EndOfLifeDetails>(this.eolDetails);
    if (this.eolDetails) {
      const properties = Object.getOwnPropertyNames(this.eolDetails[0]);
      console.log(properties);
      this.defaultColumns.forEach((column: string) => {
        if (properties.find((property) => `cycle-${this.kebabize(property)}` === column)) {
          this.columnDefs.push(...[column]);
        }
      });
    }
  }

  private kebabize = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());

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
