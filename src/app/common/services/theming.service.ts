import { Injectable, output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  isDarkTheme = true;
  themeChanged = output<boolean>();

  constructor() {
    this.toggleTheme();
  }

  toggleTheme(): void {
    if (this.isDarkTheme) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    this.onChange(!this.isDarkTheme);
  }

  onChange(isDarkTheme: boolean): void {
    this.isDarkTheme = isDarkTheme;
    this.themeChanged.emit(this.isDarkTheme);
  }

}
