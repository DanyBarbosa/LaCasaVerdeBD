// home.component.ts
import { Component } from '@angular/core';

// Nuevo componente standalone para mostrar la página inicial de la aplicación
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home">
      <h2>Bienvenido al Sistema de Gestión del Restaurante</h2>
      <p>Selecciona una opción en el menú para comenzar.</p>
    </div>
  `,
  styles: [
    `
    .home {
      text-align: center;
      margin-top: 50px;
    }
    `
  ]
})
export class HomeComponent {}
