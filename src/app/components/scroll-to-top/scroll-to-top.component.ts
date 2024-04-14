import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, DOCUMENT } from '@angular/common';
import { map, Observable } from 'rxjs';
import { fromSubscribable } from 'rxjs/internal/observable/fromSubscribable';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
  ],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent implements OnInit {

  private document = inject(DOCUMENT);

  @Output()
  scrollToTop = new EventEmitter<boolean>();

  @Input()
  el!: MatSidenavContent;

  @Input()
  onScroll!: Observable<Event>;

  canScroll!: Observable<boolean>;

  ngOnInit(): void {
    this.canScroll = this.onScroll.pipe(
      map(() => this.el.measureScrollOffset('top') > 0)
    );
  }

  onScrollToTop(): void {
    this.el.scrollTo({top: 0, left: 0});
    this.scrollToTop.emit();
  }

}
