import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  theme: 'light' | 'dark' = 'light';

  constructor(private themeService: ThemeService) {
    this.theme = themeService.getCurrentTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.theme = this.themeService.getCurrentTheme();
  }
}
