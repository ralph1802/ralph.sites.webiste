import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'basic-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isSidebarOpen = false;

  navLinks = [
    { path: '/basic/home', label: 'Home' },
    { path: '/basic/services', label: 'Services' },
    { path: '/basic/about', label: 'About us' },
    { path: '/basic/contact', label: 'Contact us' }
  ];

  constructor(private themeService: ThemeService) {}

  // Alterna el estado del sidebar
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Cierra el sidebar
  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  // Alterna el tema
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 40) {
      this.closeSidebar();
    }
  }
}
