import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Propiedad {
  id: number;
  titulo: string;
  precio: number;
  zona: string;
  imagen: string;
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {
  propiedades: Propiedad[] = [
    { id: 1, titulo: 'Casa en Equipetrol', precio: 250000, zona: 'Equipetrol', imagen: 'assets/urubovilla.jpeg' },
    { id: 2, titulo: 'Departamento en Urubó', precio: 180000, zona: 'Urubó', imagen: 'assets/doblevia.jpeg' },
    { id: 3, titulo: 'Terreno en Norte', precio: 75000, zona: 'Norte', imagen: 'assets/colinas.jpeg' },
    { id: 4, titulo: 'Local Comercial en Centro', precio: 350000, zona: 'Centro', imagen: 'assets/macoro15.jpeg' }
  ];

  filtroNombre: string = '';
  filtroPrecio: string = '';
  filtroZona: string = '';

  constructor(private router: Router) {}

  // Método para filtrar propiedades
  get propiedadesFiltradas(): Propiedad[] {
    return this.propiedades.filter(p => 
      (this.filtroNombre ? p.titulo.toLowerCase().includes(this.filtroNombre.toLowerCase()) : true) &&
      (this.filtroPrecio ? this.filtrarPorPrecio(p.precio) : true) &&
      (this.filtroZona ? p.zona === this.filtroZona : true)
    );
  }

  private filtrarPorPrecio(precio: number): boolean {
    switch (this.filtroPrecio) {
      case 'menos100k': return precio < 100000;
      case '100k-200k': return precio >= 100000 && precio <= 200000;
      case 'mas200k': return precio > 200000;
      default: return true;
    }
  }

  // Navegar al detalle de la propiedad
  verDetalle(id: number) {
    this.router.navigate(['/detalle-propiedad', id]);
  }
}
