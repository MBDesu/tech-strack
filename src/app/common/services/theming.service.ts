import { Injectable, output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  isDarkTheme = true;
  themeChanged = output<boolean>();

  toggleTheme(): void {
    if (this.isDarkTheme) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    this.isDarkTheme = !this.isDarkTheme;
    this.themeChanged.emit(this.isDarkTheme);
  }

}
