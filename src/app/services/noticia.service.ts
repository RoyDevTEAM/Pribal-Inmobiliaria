import { Injectable } from '@angular/core';
import { Noticia } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Venta Exitosa en el Octavo Anillo',
      fecha: '11 de febrero de 2025',
      categoria: 'ventas',
      multimedia: [
        { tipo: 'imagen', url: 'https://pribal-inmobiliaria.vercel.app/assets/urubovilla.jpeg' },
        { tipo: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      ],
      contenido: `Nos complace anunciar la venta de una hermosa propiedad en el octavo anillo de la ciudad. Esta vivienda, que cuenta con amplios jardines, piscina privada y acabados de lujo, fue adquirida por una familia que buscaba comodidad y exclusividad. 

      La transacción se realizó en tiempo récord gracias a nuestro equipo de asesores, quienes proporcionaron un servicio excepcional desde el primer contacto hasta la firma del contrato. Este éxito refuerza nuestro compromiso de ofrecer soluciones inmobiliarias de calidad y satisfacer las necesidades de nuestros clientes.

      Si estás buscando comprar o vender una propiedad, no dudes en contactarnos. Te asesoraremos en cada paso del proceso para garantizar una experiencia segura y eficiente.`
    },
   
    {
      id: 3,
      titulo: 'Nuevo Cliente Adquiere su Hogar Soñado',
      fecha: '1 de febrero de 2025',
      categoria: 'actividades',
      multimedia: [
        { tipo: 'imagen', url: 'https://thumbs.dreamstime.com/b/familia-con-hijos-comprando-una-casa-o-apartamento-nuevo-y-mud%C3%A1ndose-su-hogar-so%C3%B1ado-de-compra-familiar-nueva-vista-posterior-242525290.jpg' },
        { tipo: 'imagen', url: 'https://img.freepik.com/fotos-premium/feliz-familia-musulmana-comprando-apartamento-nuevo-senalar-dedo_568137-184.jpg' }
      ],
      contenido: `Hoy celebramos la adquisición de una nueva vivienda por parte de la familia Rodríguez, quienes finalmente encontraron el hogar perfecto para comenzar una nueva etapa de sus vidas. 

      La propiedad, ubicada en una zona residencial tranquila y segura, cuenta con amplios espacios, un diseño moderno y un hermoso jardín. Después de varias visitas y un proceso de asesoramiento personalizado, logramos cumplir con todas sus expectativas.

      Nos sentimos felices de haber sido parte de este momento tan especial y les deseamos todo el éxito en su nuevo hogar. Si tú también buscas la casa de tus sueños, nuestro equipo de expertos está listo para ayudarte.`
    },
    {
      id: 4,
      titulo: 'Lanzamos una Nueva Promoción Exclusiva para Propiedades de Lujo',
      fecha: '28 de enero de 2025',
      categoria: 'promociones',
      multimedia: [
        { tipo: 'imagen', url: 'https://brainsre.news/wp-content/uploads/2021/11/zonas-comunes-vivienda-lujo-od-real-estate-talamanca-1024x648.jpg' },
        { tipo: 'imagen', url: 'https://img4.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/12/b7/e8/1171977132.jpg' }
      ],
      contenido: `¡Atención inversionistas y compradores! Hemos lanzado una promoción exclusiva para aquellas personas que buscan adquirir propiedades de lujo en la ciudad. 

      Durante tiempo limitado, ofrecemos descuentos especiales en viviendas seleccionadas con características premium, incluyendo piscinas, domótica avanzada y vistas panorámicas. Además, brindamos facilidades de financiamiento con tasas preferenciales.

      No pierdas la oportunidad de vivir en una residencia de ensueño. Contáctanos para obtener más información y agenda una visita personalizada con nuestros expertos en bienes raíces.`
    },{
      id: 5,
      titulo: 'Pribal Capacita a sus Agentes Inmobiliarios para Brindar un Servicio de Excelencia',
      fecha: '11 de febrero de 2025',
      categoria: 'actividades',
      multimedia: [
        { tipo: 'imagen', url: '/assets/IMG-20250211-WA0159.jpg' },
        { tipo: 'imagen', url: '/assets/IMG-20250211-WA0174.jpg' },
        { tipo: 'video', url: 'https://www.youtube.com/embed/VIDEO_ID' } // Reemplaza VIDEO_ID con el ID del video de YouTube
      ],
      contenido: `Con el firme compromiso de ofrecer un servicio inmobiliario de primer nivel, Pribal llevó a cabo una jornada de capacitación intensiva dirigida a su equipo de agentes inmobiliarios. Esta iniciativa, liderada por la CEO Priscila Balcázar, tuvo como objetivo fortalecer las habilidades del equipo en áreas clave como técnicas de ventas, negociación, marketing digital y atención al cliente.
    
      Durante la sesión, los participantes se involucraron en talleres interactivos, donde adquirieron conocimientos sobre las últimas tendencias del mercado y estrategias innovadoras para mejorar la experiencia de los clientes. La formación estuvo a cargo de expertos del sector, quienes compartieron valiosas experiencias y mejores prácticas aplicables en el día a día.
    
      🔹 Nuestro compromiso con la excelencia  
      En Pribal, creemos que la formación continua es esencial para garantizar un servicio de calidad y mantenernos a la vanguardia del sector inmobiliario. Esta capacitación no solo fortalece las competencias de nuestros agentes, sino que también reafirma nuestro compromiso con quienes confían en nosotros para encontrar su hogar ideal.
    
      🎥 Revive los mejores momentos de la capacitación en nuestro canal de YouTube.  
    
      📸 ¡Mira las imágenes del evento y descubre cómo seguimos elevando los estándares del sector inmobiliario!  
    
      📞 Contacto: Priscila Balcázar – CEO Pribal Inmobiliaria  
      📲 Teléfono: 69419909`
    },{
      id: 6,
      titulo: '🏡 ¡La casa de tus sueños te espera en Parque 3, Urubó!',
      fecha: '10 de febrero de 2025',
      categoria: 'propiedades',
      multimedia: [
        { tipo: 'imagen', url: '/assets/IMG-20250212-WA0021.jpg' },
        { tipo: 'imagen', url: 'https://cdn.prod.website-files.com/6643a82fc46ca462b5ef9921/6644d76852cfb44c1d4be520_casa-urubo-2.jpeg' },
        { tipo: 'imagen', url: 'https://cdn.prod.website-files.com/6643a82fc46ca462b5ef9921/6644d76852cfb44c1d4be520_casa-urubo-3.jpeg' },
        { tipo: 'video', url: 'https://www.youtube.com/embed/65sw3ArpnuqVyyzB' } // Reemplaza VIDEO_ID con el ID del video de YouTube
      ],
      contenido: `✨ Descubre esta increíble propiedad en Parque 3, Urubó, a solo 5 minutos del puente Mario Foianini. Diseñada para brindarte comodidad y exclusividad, esta casa lo tiene todo:
    
      ✅ 4 habitaciones, incluyendo una suite con vestidor y baño privado.  
      ✅ Amplia sala de estar ideal para compartir con familia y amigos.  
      ✅ Cocina totalmente equipada y un elegante baño de visitas.  
      ✅ Churrasquera perfecta para momentos inolvidables al aire libre.  
    
      🌿 Vive con seguridad, tranquilidad y el mejor ambiente sin alejarte de la ciudad.  
    
      📩 Escríbeme y agenda tu visita. ¡Esta casa puede ser tuya!  
      📞 Contacto: 69419909`
    },
    
  ];

  constructor() {}

  getNoticias(): Noticia[] {
    return this.noticias;
  }

  getNoticiaById(id: number): Noticia | undefined {
    return this.noticias.find(noticia => noticia.id === id);
  }
}
