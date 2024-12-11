import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div>
      <h2>Clientes</h2>
      <ul>
        <li *ngFor="let cliente of clientes">
          {{ cliente.nombre }} - {{ cliente.telefono }} - {{ cliente.email }}
        </li>
      </ul>
    </div>
  `,
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data) => {
      this.clientes = data;
    });
  }
}
