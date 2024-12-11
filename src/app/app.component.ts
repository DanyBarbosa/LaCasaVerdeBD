// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule para usar router-outlet

@Component({
  selector: 'app-root',
  standalone: true, // Define el componente como standalone
  imports: [RouterModule], // Agrega RouterModule a los imports para que router-outlet funcione
  template: `
    <div class="container">
      <h1>Gestión del Restaurante</h1>
      <nav>
        <ul>
          <li><a routerLink="/cliente">Cliente</a></li>
          <li><a routerLink="/platillo">Platillo</a></li>
          <li><a routerLink="/pedido">Pedido</a></li>
          <li><a routerLink="/empleado">Empleado</a></li>
          <li><a routerLink="/materia-prima">Materia Prima</a></li>
          <li><a routerLink="/proveedor">Proveedor</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet> <!-- Permite que se carguen las rutas dinámicamente -->
    </div>
  `,
  styles: [
    `
    .container {
      text-align: center;
      padding: 20px;
    }
    nav ul {
      list-style-type: none;
      padding: 0;
    }
    nav ul li {
      display: inline;
      margin: 0 10px;
    }
    nav ul li a {
      text-decoration: none;
      color: blue;
    }
    `
  ]
})
export class AppComponent {}
