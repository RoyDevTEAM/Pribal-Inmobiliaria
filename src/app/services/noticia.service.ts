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
      id: 2,
      titulo: 'Evento de Networking Inmobiliario: Conectando con Expertos',
      fecha: '5 de febrero de 2025',
      categoria: 'actividades',
      multimedia: [
        { tipo: 'imagen', url: 'https://cdn.prod.website-files.com/61e9b342b016364181c41f50/6425bcf814ecb5ac92aaf327_Blog%20Enero%20(25).png' },
        { tipo: 'imagen', url: 'https://cdn.prod.website-files.com/6643a82fc46ca462b5ef9921/6644d76852cfb44c1d4be520_656e64944fc3722f3ea2968b_networking-inmobiliario-2.jpeg' }
      ],
      contenido: `El pasado 5 de febrero, nuestra inmobiliaria organizó un evento de networking exclusivo para profesionales del sector inmobiliario. La cita reunió a inversores, agentes y arquitectos en un ambiente de intercambio de conocimientos y oportunidades de negocio.

      Durante el evento, se llevaron a cabo charlas magistrales sobre las tendencias del mercado, las nuevas regulaciones inmobiliarias y las oportunidades de inversión en 2025. Además, los asistentes pudieron interactuar con líderes del sector y establecer alianzas estratégicas.

      La jornada culminó con una sesión de preguntas y respuestas, donde nuestros expertos compartieron su visión sobre el futuro del mercado inmobiliario en la región. Agradecemos a todos los participantes y los invitamos a estar atentos a nuestras próximas actividades.`
    },
    {
      id: 3,
      titulo: 'Nuevo Cliente Adquiere su Hogar Soñado',
      fecha: '1 de febrero de 2025',
      categoria: 'clientes',
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
    }
  ];

  constructor() {}

  getNoticias(): Noticia[] {
    return this.noticias;
  }

  getNoticiaById(id: number): Noticia | undefined {
    return this.noticias.find(noticia => noticia.id === id);
  }
}
