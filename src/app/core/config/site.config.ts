import { InjectionToken } from '@angular/core';
import { SiteConfig } from '../models/site.models';

/**
 * Único punto de verdad del contenido institucional.
 * Fuente: Perfil de empresa NYV S.A.S. (octubre de 2026).
 */
export const SITE_CONTENT: SiteConfig = {
  companyName: 'NYV',
  legalName: 'NYV S.A.S.',
  nameMeaning: 'Nexo y Visión',
  tagline: 'Convertimos datos en visión y decisiones',
  description:
    'NYV es una empresa de tecnología con sede en Ambato, Ecuador. Diseñamos, desarrollamos, ' +
    'alojamos y mantenemos software, inteligencia artificial y plataformas de datos para ' +
    'empresas e instituciones públicas de América Latina y Estados Unidos, y convertimos sus ' +
    'datos en visión y decisiones.',
  siteUrl: 'https://nyvcorp.com',
  navigation: [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Líneas', path: '/servicios' },
    { label: 'Contacto', path: '/contacto' },
  ],
  facts: [
    'Software, IA, datos e investigación',
    'Operación 100 % en la nube',
    'Construido con herramientas open source',
    'Ambato, Ecuador, con vocación exportadora',
  ],
  readout: [
    { label: 'Líneas', value: '6' },
    { label: 'En la nube', value: '100 %' },
    { label: 'En producción', value: '1 proyecto' },
    { label: 'Base · Ambato', value: '2 577 m' },
    { label: 'Visión', value: '2031' },
    { label: 'Mercados', value: 'EC · US' },
  ],
  lines: [
    {
      id: 'software',
      name: 'NYV Software',
      shortName: 'Software',
      scope: 'Desarrollo a medida, adaptación de sistemas y licenciamiento.',
      description:
        'Sistemas, aplicaciones, bases de datos y plataformas web construidos sobre los procesos ' +
        'reales de cada organización. Adaptamos sistemas existentes cuando reemplazarlos no tiene ' +
        'sentido y licenciamos productos propios cuando el problema se repite entre clientes.',
      deliverables: [
        'Aplicaciones web y portales institucionales',
        'APIs seguras y documentadas',
        'Bases de datos: diseño, migración y optimización',
        'Adaptación e integración de sistemas existentes',
      ],
    },
    {
      id: 'ai',
      name: 'NYV AI',
      shortName: 'AI',
      scope: 'Aplicaciones con inteligencia artificial y visión por computadora.',
      description:
        'Modelos aplicados a problemas concretos: detección y conteo con cámaras, clasificación de ' +
        'documentos, asistentes sobre información propia y automatización de tareas repetitivas. ' +
        'Cada modelo se entrega con métricas de desempeño y un plan de operación.',
      deliverables: [
        'Visión por computadora en entornos reales',
        'Asistentes y búsqueda sobre documentos propios',
        'Automatización inteligente de procesos',
        'Evaluación, monitoreo y gobierno de modelos',
      ],
    },
    {
      id: 'data',
      name: 'NYV Data',
      shortName: 'Data',
      scope: 'Análisis y procesamiento de datos, hospedaje y nube.',
      description:
        'Integramos fuentes dispersas, modelamos almacenes de datos y construimos tableros que ' +
        'responden las preguntas de la dirección. Alojamos y operamos las plataformas en la nube, ' +
        'con respaldos y monitoreo definidos desde el diseño.',
      deliverables: [
        'Almacenes de datos y procesos de integración',
        'Tableros de indicadores para la toma de decisiones',
        'Hospedaje y operación de aplicaciones en la nube',
        'Calidad y gobierno de datos',
      ],
    },
    {
      id: 'consulting',
      name: 'NYV Consulting',
      shortName: 'Consulting',
      scope: 'Consultoría informática, empresarial y de administración pública. Capacitación.',
      description:
        'Diagnóstico, hoja de ruta y acompañamiento técnico para decisiones de tecnología. ' +
        'Dominamos la planificación pública ecuatoriana, lo que nos permite alinear los sistemas ' +
        'con los instrumentos de gestión del Estado. Incluye capacitación en informática.',
      deliverables: [
        'Diagnóstico de sistemas y procesos',
        'Hoja de ruta de transformación digital',
        'Consultoría para administración pública',
        'Capacitación técnica a equipos',
      ],
    },
    {
      id: 'growth',
      name: 'NYV Growth',
      shortName: 'Growth',
      scope: 'Socio tecnológico de largo plazo para nuevos negocios.',
      description:
        'Modelo growth partner: el socio aporta capital y relación con los clientes; NYV aporta ' +
        'tecnología, desarrollo y alojamiento, con una cuota mensual. El negocio arranca con un ' +
        'equipo técnico completo sin contratarlo.',
      deliverables: [
        'Producto digital desde la idea hasta la operación',
        'Infraestructura y alojamiento incluidos',
        'Evolución continua del producto',
        'Modelo de pago mensual acordado',
      ],
    },
    {
      id: 'labs',
      name: 'NYV Labs',
      shortName: 'Labs',
      scope: 'Investigación y desarrollo en ingeniería y tecnología.',
      description:
        'Investigación aplicada que alimenta al resto de las líneas: prototipos, pruebas de ' +
        'concepto y publicaciones técnicas en inteligencia artificial, visión por computadora y ' +
        'ciencia de datos.',
      deliverables: [
        'Prototipos y pruebas de concepto',
        'Evaluación de tecnologías emergentes',
        'Colaboración con academia e instituciones',
        'Transferencia de resultados a productos',
      ],
    },
  ],
  journey: [
    {
      title: 'Diseña',
      description: 'Entendemos el proceso, los usuarios y las restricciones antes de proponer.',
    },
    {
      title: 'Desarrolla',
      description: 'Construimos en iteraciones cortas con estándares de calidad y seguridad.',
    },
    {
      title: 'Aloja',
      description: 'Desplegamos en la nube, con respaldos, monitoreo y costos bajo control.',
    },
    {
      title: 'Mantiene',
      description: 'Actualizaciones, soporte y corrección de errores del desarrollo.',
    },
    {
      title: 'Crece contigo',
      description: 'Cuando el modelo lo permite, acompañamos como socio tecnológico.',
    },
  ],
  caseStudy: {
    client: 'TuSocio Visión',
    sector: 'Visión por computadora para cafeterías',
    summary:
      'Plataforma de visión por computadora para cafeterías, el primer proyecto desplegado en la ' +
      'infraestructura de NYV. TuSocio Visión aporta capital y relación con los clientes; NYV ' +
      'aporta tecnología, desarrollo y alojamiento.',
    model: 'Modelo growth partner',
    facts: [
      { label: 'Sector', value: 'Cafeterías' },
      { label: 'Tecnología', value: 'Visión por computadora' },
      { label: 'Modelo', value: 'Growth partner' },
      { label: 'Estado', value: 'En producción' },
    ],
  },
  experience: [
    {
      id: 'poa',
      name: 'Sistema POA',
      clientType: 'Gobierno autónomo descentralizado municipal',
      period: '2023 · en operación',
      summary:
        'Plataforma web para formular, alinear y dar seguimiento al Plan Operativo Anual de un ' +
        'gobierno municipal. Cada dependencia registra sus actividades, metas y presupuesto ' +
        'alineados con el PDOT, el PEI y el Plan Nacional de Desarrollo; la plataforma controla ' +
        'las reformas, consolida el avance físico y presupuestario y genera los reportes de ' +
        'seguimiento y rendición de cuentas.',
      stack: ['Oracle APEX', 'Oracle Database', 'PL/SQL', 'JavaScript'],
      lines: ['software', 'data', 'consulting'],
    },
  ],
  experienceNote:
    'Sistemas construidos por el equipo fundador antes de la constitución de NYV. Se omite el ' +
    'nombre de las instituciones por confidencialidad.',
  standards: [
    { code: 'ISO 9001', scope: 'Sistema de gestión de la calidad' },
    { code: 'ISO/IEC 27001', scope: 'Seguridad de la información de clientes y plataformas' },
    { code: 'ISO/IEC 25010', scope: 'Modelo de calidad del producto de software' },
    { code: 'ISO/IEC/IEEE 12207', scope: 'Procesos del ciclo de vida del software' },
    { code: 'ISO/IEC 42001', scope: 'Sistema de gestión de inteligencia artificial responsable' },
    {
      code: 'ISO/IEC 20000-1',
      scope: 'Gestión de servicios de TI: hospedaje, soporte y mantenimiento',
    },
  ],
  about: {
    intro:
      'NYV es una empresa ecuatoriana de desarrollo de software, inteligencia artificial, datos e ' +
      'investigación, con sede en Ambato y vocación exportadora. Construye soluciones a medida ' +
      'para empresas privadas e instituciones públicas, y las aloja y mantiene en la nube.',
    nameStory:
      'NYV significa Nexo y Visión. Nexo, porque conecta sistemas, datos y personas. Visión, ' +
      'porque usa inteligencia artificial y análisis para ver más lejos. El nombre sigue el ' +
      'modelo de marca corta y única: una casa madre, NYV, de la que derivan líneas especializadas.',
    direction:
      'NYV se posiciona como la empresa que observa y anticipa: convierte datos en visión y ' +
      'decisiones.',
    mission:
      'Diseñamos, desarrollamos y operamos soluciones de software, inteligencia artificial y ' +
      'datos que convierten la información de empresas e instituciones públicas en decisiones y ' +
      'resultados medibles. Trabajamos con estándares internacionales de calidad, seguridad de la ' +
      'información y gestión de servicios, y acompañamos a cada cliente como socio tecnológico de ' +
      'largo plazo, desde la idea hasta la operación en la nube.',
    vision:
      'Al 2031, ser la empresa ecuatoriana de referencia en inteligencia artificial y software a ' +
      'medida para América Latina y Estados Unidos, reconocida por exportar soluciones de clase ' +
      'mundial, por la madurez certificada de sus procesos y por generar innovación propia desde ' +
      'la investigación aplicada.',
    principles: [
      {
        title: 'Resultados medibles',
        description:
          'Cada proyecto se define por la decisión que habilita y el indicador que mueve.',
      },
      {
        title: 'Seguridad de la información',
        description: 'Datos de clientes y plataformas protegidos desde el diseño, no al final.',
      },
      {
        title: 'Socio de largo plazo',
        description: 'Acompañamos desde la idea hasta la operación, no solo hasta la entrega.',
      },
      {
        title: 'Investigación aplicada',
        description: 'Lo que aprendemos en NYV Labs se transfiere a productos y servicios.',
      },
    ],
    operatingModel: [
      'Operación 100 % en la nube, sin centro de datos propio.',
      'Soluciones construidas con herramientas open source.',
      'Los dominios, credenciales y activos digitales de cada cliente le pertenecen al cliente.',
      'NYV implementa, entrega y luego mantiene; el cliente opera su sistema de forma independiente.',
    ],
    markets:
      'Atendemos al mercado ecuatoriano, público y privado, y exportamos servicios con Estados ' +
      'Unidos como mercado objetivo.',
  },
  contact: {
    email: 'christian.nunez.dev.ds@gmail.com',
    city: 'Ambato',
    region: 'Tungurahua',
    country: 'Ecuador',
    schedule: 'Lunes a viernes, 08:30 a 17:30 (GMT-5)',
  },
};

export const SITE_CONFIG = new InjectionToken<SiteConfig>('SITE_CONFIG', {
  providedIn: 'root',
  factory: () => SITE_CONTENT,
});
