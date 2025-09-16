import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { Navbar } from "./shared/components/navbar/navbar";
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Platzi Store');

  //* Constructor que inicializa el router y configura el scroll automático al inicio de cada navegación
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    //* Escucha los eventos de navegación y filtra solo los eventos de finalización de navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        //* Verifica si está ejecutándose en el navegador antes de hacer scroll
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
      });
  }
}
