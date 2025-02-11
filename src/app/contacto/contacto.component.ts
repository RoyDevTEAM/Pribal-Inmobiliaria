import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    const formUrl = 'https://formspree.io/f/xbldywpp'; // Tu endpoint de Formspree
    const headers = { 'Content-Type': 'application/json' };
    
    this.http.post(formUrl, JSON.stringify(this.formData), { headers }).subscribe(
      response => {
        alert('Mensaje enviado correctamente.');
      },
      error => {
        console.error('Error al enviar:', error);
        alert('Hubo un error al enviar el mensaje.');
      }
    );
  }
  
}
