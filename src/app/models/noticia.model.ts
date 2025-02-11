export interface Multimedia {
    tipo: 'imagen' | 'video'; // Definimos si es imagen o video
    url: string; // URL del recurso
  }
  
  export interface Noticia {
    id: number;
    titulo: string;
    fecha: string;
    categoria: 'ventas' | 'actividades' | 'clientes' | 'promociones' | 'propiedades';
    multimedia: Multimedia[]; // Ahora puede contener varias imágenes y videos
    contenido: string;
  }
  