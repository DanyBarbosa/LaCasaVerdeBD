// app.routes.ts
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'cliente', loadComponent: () => import('./cliente/cliente.component').then(c => c.ClienteComponent) },
  { path: 'platillo', loadComponent: () => import('./platillo/platillo.component').then(p => p.PlatilloComponent) },
  { path: 'pedido', loadComponent: () => import('./pedido/pedido.component').then(p => p.PedidoComponent) },
  { path: 'empleado', loadComponent: () => import('./empleado/empleado.component').then(e => e.EmpleadoComponent) },
  { path: 'materia-prima', loadComponent: () => import('./materia-prima/materia-prima.component').then(mp => mp.MateriaPrimaComponent) },
  { path: 'proveedor', loadComponent: () => import('./proveedor/proveedor.component').then(pv => pv.ProveedorComponent) },
  { path: '', loadComponent: () => import('./home/home.component').then(h => h.HomeComponent), pathMatch: 'full' }, // Ruta inicial que carga HomeComponent
  { path: '**', redirectTo: '' } // Ruta wildcard que redirige a la página inicial
];
