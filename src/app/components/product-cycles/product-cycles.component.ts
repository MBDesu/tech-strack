import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EndOfLifeDetails } from '../../services/end-of-life/models/end-of-life-api';
import moment from 'moment';
import { productCycleColumnMapping, ProductDefinition } from '../../common/models/product-cycle-column-mapping';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-product-cycles',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
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

  columnDefs: string[] = [];
  defaultColumns = [
    'cycle-cycle',
    'cycle-supported-android-versions',
    'cycle-release-date',
    'cycle-discontinued',
    'cycle-support',
    'cycle-lts',
    'cycle-eol',
    'cycle-extended-support',
    'cycle-supported-java-versions',
    'cycle-supported-jakarta-ee-versions',
    'cycle-latest',
  ];
  auxColumns: string[] = [];
  productDataSource!: MatTableDataSource<EndOfLifeDetails>;
  productMapping: ProductDefinition | undefined;
  today = new Date();

  ngOnInit(): void {
    this.productDataSource = new MatTableDataSource<EndOfLifeDetails>(this.eolDetails);
    if (this.eolDetails) {
      this.productMapping = productCycleColumnMapping[this.product];
      if (this.productMapping) {
        const properties = Object.keys(this.productMapping['columns']);
        this.defaultColumns.forEach((column: string) => {
          if (properties.find((property) => property === column)) {
            this.columnDefs.push(...[column]);
          }
        });
        if (this.productMapping.auxTable) {
          Object.keys(this.productMapping.auxTable).forEach((column) => {
            this.auxColumns.push(...[column]);
          });
        }
      } else {
        const properties = Object.getOwnPropertyNames(this.eolDetails[0]);
        this.defaultColumns.forEach((column: string) => {
          if (properties.find((property) => `cycle-${this.makeKebab(property)}` === column)) {
            this.columnDefs.push(...[column]);
          }
        });
      }
      console.log(this.auxColumns);
    }
  }

  private makeKebab = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());

  removeProduct(): void {
    this.productRemoved.emit(this.product);
  }

  formatTimeAgo = (date: string | boolean, prefix?: boolean, unavailable?: boolean, invert?: boolean, goodText = 'Yes', badText = 'No'): string => {
    if (typeof date === 'boolean') return this.formatDateOrBoolean(date, unavailable, invert, goodText, badText);

    const momentDate = moment(date);
    const diff = momentDate.diff(this.today, "d");
    const dateString = `${momentDate.fromNow()} (${this.formatDateOrBoolean(date, unavailable, invert)})`;

    if (diff < 0) {
      return prefix ? `Ended ${dateString}` : dateString;
    } else if (diff > 0) {
      return prefix ? `Ends ${dateString}` : dateString;
    }
    return prefix ? 'Ends today' : this.formatDateOrBoolean(date, unavailable, invert);

  };

  formatDateOrBoolean = (date: string | boolean, unavailable?: boolean, invert?: boolean, goodText = 'Yes', badText = 'No'): string => {
    if (typeof date === 'boolean') {
      if (!unavailable) {
        if (!invert) {
          return date ? badText: goodText;
        }
        return date ? goodText : badText;
      }
      return date ? goodText : 'Unavailable';
    }
    return date ?
        formatDate(date, 'd MMM y', Intl.NumberFormat().resolvedOptions().locale)
        : '';
  };

  resolveDateClass(date: string | boolean, unavailable?: boolean, invert?: boolean): string {
    if (typeof date === 'boolean') {
      if (!unavailable) {
        if (!invert) {
          return date ? 'is-past' : 'is-good';
        }
        return date ? 'is-good' : 'is-past'
      }
      return date ? 'is-good' : 'is-unavailable';
    }
    const momentDate = moment(date);
    if (momentDate.isBefore(this.today)) return 'is-past';
    if (momentDate.isAfter(this.today)) {
      const diffMonths = momentDate.diff(this.today, 'M');
      if (diffMonths > 3) return 'is-good';
    }
    return 'is-soon';
  }

}
