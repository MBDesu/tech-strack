import { AsyncPipe, DOCUMENT } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavContent } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

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
export class ScrollToTopComponent {

  private document = inject(DOCUMENT);

  @Output()
  scrollToTop = new EventEmitter<boolean>();

  @Input()
  el!: MatSidenavContent;

  @Input()
  onScroll!: Observable<Event>;

  onScrollToTop(): void {
    this.el.scrollTo({top: 0, left: 0});
    this.scrollToTop.emit();
  }

}
