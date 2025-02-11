import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'propiedades', component: PropiedadesComponent }, // Listado de propiedades
  { path: 'nosotros', component: NosotrosComponent }, // Sobre la empresa
  { path: 'blog', component: BlogComponent }, // Noticias y artículos
  { path: 'blog-detail/:id', component: BlogDetailComponent }, // Noticias y artículos

  { path: 'contacto', component: ContactoComponent }, // Contacto y formulario
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección a home en rutas inexistentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
