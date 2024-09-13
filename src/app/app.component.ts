import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service'; // Ajusta la ruta si es necesario
import { LocalStorageService } from './services/localstorage.service'; // Asegúrate de ajustar la ruta correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private localStorageService: LocalStorageService // Inyecta el servicio LocalStorageService
  ) {}

  ngOnInit() {
    // Obtén el tema actual desde LocalStorageService
    const currentTheme = this.localStorageService.GetMode || 'light'; // Usa el getter
    document.body.classList.add(`${currentTheme}-theme`);

    // Si necesitas obtener el idioma actual también:
    const currentLang = this.localStorageService.GetLang || 'en'; // Usa el getter
    console.log('Idioma actual:', currentLang);
  }
}
