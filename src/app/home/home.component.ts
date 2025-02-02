import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  private index = 0;
  private totalItems = 5;
  private container!: HTMLElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Este bloque solo se ejecutará en el navegador
      this.container = document.getElementById("propiedades")!;

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-95');
          }
        });
      }, { threshold: 0.3 });

      document.querySelectorAll('#servicios h2, #servicios p, #servicios div').forEach(element => {
        observer.observe(element);
      });
    }
  }

  mover(direccion: number) {
    this.index += direccion;
    if (this.index < 0) this.index = 0;
    if (this.index > this.totalItems - 1) this.index = this.totalItems - 1;

    const desplazamiento = this.index * -100;
    if (this.container) {
      this.container.style.transform = `translateX(${desplazamiento}%)`;
    }
  }
}
