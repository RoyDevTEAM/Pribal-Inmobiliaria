import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Noticia } from '../models/noticia.model';
import { NoticiasService } from '../services/noticia.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit {
  noticia: Noticia | null = null;
  noticiasRelacionadas: Noticia[] = [];

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // Suscribirse a cambios en la URL para actualizar dinámicamente el contenido
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.cargarNoticia(id);
    });
  }

  cargarNoticia(id: number) {
    const noticiaEncontrada = this.noticiasService.getNoticiaById(id);

    if (!noticiaEncontrada) {
      this.router.navigate(['/blog']);
      return;
    }

    this.noticia = noticiaEncontrada;
    this.cargarNoticiasRelacionadas();
  }

  cargarNoticiasRelacionadas() {
    if (!this.noticia) return;
    this.noticiasRelacionadas = this.noticiasService.getNoticias()
      .filter(n => n.id !== this.noticia!.id && n.categoria === this.noticia!.categoria)
      .slice(0, 3); // Máximo 3 noticias
  } 
  
  volver() {
    this.router.navigate(['/blog']);
  }

  // Función para sanitizar la URL del video
  getSanitizedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
