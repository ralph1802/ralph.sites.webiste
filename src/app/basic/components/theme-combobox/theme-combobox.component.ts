import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'theme-combobox',
  templateUrl: './theme-combobox.component.html',
  styleUrls: ['./theme-combobox.component.css']
})
export class ThemeComboboxComponent implements OnInit {
  currentTheme: 'light' | 'dark' = 'light';
  showOptions = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  changeTheme(theme: 'light' | 'dark'): void {
    if (this.currentTheme !== theme) {
      this.themeService.toggleTheme();
      this.currentTheme = this.themeService.getCurrentTheme();
    }
  }
}
