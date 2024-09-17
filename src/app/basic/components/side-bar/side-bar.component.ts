import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  isSidebarOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSidebarOpen = false;
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @HostListener('document:click', ['$event'])
  closeSidebarOnClickOutside(event: MouseEvent) {
    const sidebarElement = document.querySelector('.sidebar');
    const buttonElement = document.querySelector('.sidebar-button button');
    if (this.isSidebarOpen && sidebarElement && !sidebarElement.contains(event.target as Node) &&
        buttonElement && !buttonElement.contains(event.target as Node)) {
      this.isSidebarOpen = false;
    }
  }
}
