import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ThemingService } from './common/services/theming.service';
import { HelpModalComponent } from './components/help-modal/help-modal.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterOutlet,
    ScrollToTopComponent,
  ]
})
export class AppComponent implements AfterViewInit {

  private dialog = inject(MatDialog);
  private matIconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  @ViewChild('themeToggle', { read: ElementRef })
  private themeToggle!: ElementRef;

  protected themingService = inject(ThemingService);

  public title = 'tech-strack';

  constructor() {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
  }

  ngAfterViewInit(): void {
    if (this.themeToggle) {
      this.themeToggle?.nativeElement.querySelector('.mdc-switch__icon--on')?.firstChild?.setAttribute('d', 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5S14.76 7 12 7L12 7z M2 13l2 0c0.55 0 1-0.45 1-1s-0.45-1-1-1l-2 0 c-0.55 0-1 0.45-1 1S1.45 13 2 13z M20 13l2 0c0.55 0 1-0.45 1-1s-0.45-1-1-1l-2 0c-0.55 0-1 0.45-1 1S19.45 13 20 13z M11 2v2 c0 0.55 0.45 1 1 1s1-0.45 1-1V2c0-0.55-0.45-1-1-1S11 1.45 11 2z M11 20v2c0 0.55 0.45 1 1 1s1-0.45 1-1v-2c0-0.55-0.45-1-1-1 C11.45 19 11 19.45 11 20z M5.99 4.58c-0.39-0.39-1.03-0.39-1.41 0c-0.39 0.39-0.39 1.03 0 1.41l1.06 1.06 c0.39 0.39 1.03 0.39 1.41 0s0.39-1.03 0-1.41L5.99 4.58z M18.36 16.95c-0.39-0.39-1.03-0.39-1.41 0c-0.39 0.39-0.39 1.03 0 1.41 l1.06 1.06c0.39 0.39 1.03 0.39 1.41 0c0.39-0.39 0.39-1.03 0-1.41L18.36 16.95z M19.42 5.99c0.39-0.39 0.39-1.03 0-1.41 c-0.39-0.39-1.03-0.39-1.41 0l-1.06 1.06c-0.39 0.39-0.39 1.03 0 1.41s1.03 0.39 1.41 0L19.42 5.99z M7.05 18.36 c0.39-0.39 0.39-1.03 0-1.41c-0.39-0.39-1.03-0.39-1.41 0l-1.06 1.06c-0.39 0.39-0.39 1.03 0 1.41s1.03 0.39 1.41 0L7.05 18.36z')
      this.themeToggle?.nativeElement.querySelector('.mdc-switch__icon--off')?.firstChild?.setAttribute('d', 'M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.2 0 .425.013 .225.013 .575.038-.9.8-1.4 1.975-.5 1.175-.5 2.475 0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.3 0 2.475-.463T20.95 11.15q.025.3 .038.488Q21 11.825 21 12q0 3.75-2.625 6.375T12 21Zm0-1.5q2.725 0 4.75-1.687t2.525-3.963q-.625.275-1.337.412Q17.225 14.4 16.5 14.4q-2.875 0-4.887-2.013T9.6 7.5q0-.6.125-1.287.125-.687.45-1.562-2.45.675-4.062 2.738Q4.5 9.45 4.5 12q0 3.125 2.188 5.313T12 19.5Zm-.1-7.425Z');
    }
  }

  showHelp(): void {
    this.dialog.open(HelpModalComponent);
  }

}
