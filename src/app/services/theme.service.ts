import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'light';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(theme?: 'light' | 'dark') {
    if (theme) {
      this.theme = theme;
    } else {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
    this.applyTheme();
    localStorage.setItem('theme', this.theme);
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.theme;
  }

  private applyTheme() {
    const themeClass = this.theme === 'light' ? 'light-theme' : 'dark-theme';
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(themeClass);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    this.theme = savedTheme ? savedTheme : 'light';
    this.applyTheme();
  }
}
