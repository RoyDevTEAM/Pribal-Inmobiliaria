import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../models/noticia.model';
import { NoticiasService } from '../services/noticia.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  noticias: Noticia[] = [];
  noticiasFiltradas: Noticia[] = [];
  
  categorias = ['ventas', 'actividades', 'clientes', 'promociones', 'propiedades'];
  filtroTitulo = '';
  filtroCategoria = '';
  filtroFecha = '';
  
  paginaActual = 1;
  noticiasPorPagina = 6;

  constructor(private noticiasService: NoticiasService, private router: Router) {}

  ngOnInit() {
    this.noticias = this.noticiasService.getNoticias();
    this.filtrarNoticias();
  }

  filtrarNoticias() {
    this.noticiasFiltradas = this.noticias
      .filter(noticia => 
        noticia.titulo.toLowerCase().includes(this.filtroTitulo.toLowerCase()) &&
        (this.filtroCategoria ? noticia.categoria === this.filtroCategoria : true) &&
        (this.filtroFecha ? noticia.fecha === this.filtroFecha : true)
      );
    this.paginaActual = 1;
  }

  cambiarPagina(direccion: number) {
    this.paginaActual += direccion;
  }

  get noticiasPaginadas() {
    const inicio = (this.paginaActual - 1) * this.noticiasPorPagina;
    return this.noticiasFiltradas.slice(inicio, inicio + this.noticiasPorPagina);
  }

  verDetalle(id: number) {
    this.router.navigate(['/blog-detail', id]);
  }
}
