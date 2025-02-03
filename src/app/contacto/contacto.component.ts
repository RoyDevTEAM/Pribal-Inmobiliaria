import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviarMensaje() {
    this.enviado = true;
    if (this.contactoForm.valid) {
      const formData = this.contactoForm.value;
      this.http.post('https://formspree.io/f/xbldywpp', formData).subscribe(
        response => {
          console.log('Mensaje enviado:', response);
          alert('Mensaje enviado con éxito');
          this.contactoForm.reset();
          this.enviado = false;
        },
        error => {
          console.error('Error al enviar el mensaje:', error);
          alert('Hubo un error al enviar el mensaje');
        }
      );
    }
  }
}
