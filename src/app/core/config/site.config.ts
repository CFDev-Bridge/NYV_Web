import { InjectionToken } from '@angular/core';
import { SiteConfig } from '../models/site.models';

/**
 * Único punto de verdad del contenido institucional.
 * Para actualizar textos, servicios o datos de contacto edita este archivo.
 */
export const SITE_CONTENT: SiteConfig = {
  companyName: 'NYV',
  legalName: 'NYV S.A.',
  tagline: 'Tecnología y software que impulsan tu operación',
  description:
    'NYV S.A. diseña, desarrolla e integra soluciones de software, datos e infraestructura ' +
    'para empresas e instituciones que necesitan operar con eficiencia y crecer con confianza.',
  siteUrl: 'https://www.nyv.com.ec',
  navigation: [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Contacto', path: '/contacto' },
  ],
  services: [
    {
      id: 'desarrollo-software',
      title: 'Desarrollo de software a medida',
      summary: 'Aplicaciones web, móviles y APIs construidas sobre tus procesos reales.',
      description:
        'Levantamos requerimientos junto a tu equipo, diseñamos la arquitectura y entregamos ' +
        'software mantenible, probado y documentado. Trabajamos con entregas incrementales para ' +
        'que veas avances desde las primeras semanas.',
      deliverables: [
        'Aplicaciones web y portales empresariales',
        'APIs REST seguras y documentadas',
        'Aplicaciones móviles multiplataforma',
        'Pruebas automatizadas y documentación técnica',
      ],
      icon: 'code',
    },
    {
      id: 'datos-analitica',
      title: 'Datos e inteligencia de negocio',
      summary: 'Convierte tus datos dispersos en tableros, indicadores y decisiones.',
      description:
        'Integramos fuentes de información, modelamos almacenes de datos y construimos tableros ' +
        'de control que responden las preguntas de la dirección. Incluimos gobierno de datos y ' +
        'calidad desde el diseño.',
      deliverables: [
        'Almacenes de datos y procesos ETL',
        'Tableros de indicadores (BI)',
        'Modelos analíticos y predictivos',
        'Definición y gobierno de indicadores',
      ],
      icon: 'data',
    },
    {
      id: 'integracion-sistemas',
      title: 'Integración y modernización de sistemas',
      summary: 'Conecta sistemas heredados con plataformas actuales sin detener la operación.',
      description:
        'Diseñamos capas de integración, migramos aplicaciones heredadas y automatizamos flujos ' +
        'entre sistemas para eliminar reprocesos y errores manuales.',
      deliverables: [
        'Integración entre sistemas y servicios externos',
        'Migración y modernización de aplicaciones',
        'Automatización de procesos internos',
        'Bases de datos: diseño, optimización y migración',
      ],
      icon: 'integration',
    },
    {
      id: 'nube-devops',
      title: 'Infraestructura en la nube y DevOps',
      summary: 'Despliegues confiables, monitoreo y costos bajo control.',
      description:
        'Implementamos infraestructura como código, contenedores y canalizaciones de integración ' +
        'y despliegue continuo, con monitoreo y respaldos definidos desde el inicio.',
      deliverables: [
        'Arquitectura y migración a la nube',
        'Contenedores y orquestación',
        'Canalizaciones CI/CD',
        'Monitoreo, respaldos y continuidad',
      ],
      icon: 'cloud',
    },
    {
      id: 'soporte-mantenimiento',
      title: 'Soporte y mantenimiento',
      summary: 'Acompañamiento continuo para que tus sistemas sigan funcionando.',
      description:
        'Planes de soporte con tiempos de respuesta acordados, mantenimiento correctivo y ' +
        'evolutivo, y actualizaciones de seguridad periódicas.',
      deliverables: [
        'Mesa de ayuda con niveles de servicio',
        'Mantenimiento correctivo y evolutivo',
        'Actualizaciones de seguridad',
        'Revisiones periódicas de desempeño',
      ],
      icon: 'support',
    },
    {
      id: 'consultoria-tecnologica',
      title: 'Consultoría tecnológica',
      summary: 'Una hoja de ruta tecnológica alineada con los objetivos del negocio.',
      description:
        'Evaluamos tu situación actual, priorizamos iniciativas y definimos una hoja de ruta ' +
        'realista en alcance, tiempo y presupuesto. Acompañamos la toma de decisiones técnicas.',
      deliverables: [
        'Diagnóstico de sistemas y procesos',
        'Hoja de ruta de transformación digital',
        'Arquitectura de soluciones',
        'Acompañamiento en selección de tecnología',
      ],
      icon: 'strategy',
    },
  ],
  valuePropositions: [
    {
      title: 'Enfoque en el negocio',
      description:
        'Cada proyecto empieza por entender el proceso y el resultado esperado, no por la herramienta.',
    },
    {
      title: 'Calidad verificable',
      description:
        'Código revisado, pruebas automatizadas y documentación entregada con cada versión.',
    },
    {
      title: 'Seguridad desde el diseño',
      description:
        'Validación de entradas, mínimo privilegio y protección de datos en cada capa de la solución.',
    },
  ],
  process: [
    {
      title: 'Descubrimiento',
      description: 'Entendemos el problema, los usuarios y las restricciones del proyecto.',
    },
    {
      title: 'Diseño',
      description: 'Definimos la arquitectura, el alcance y los criterios de aceptación.',
    },
    {
      title: 'Construcción',
      description: 'Desarrollamos en iteraciones cortas con demostraciones periódicas.',
    },
    {
      title: 'Entrega y soporte',
      description: 'Desplegamos, capacitamos a tu equipo y acompañamos la operación.',
    },
  ],
  about: {
    intro:
      'NYV S.A. es una empresa de tecnología que acompaña a organizaciones públicas y privadas ' +
      'en el diseño, desarrollo y operación de sus sistemas de información.',
    mission:
      'Construir soluciones tecnológicas confiables que simplifiquen la operación de nuestros ' +
      'clientes y generen valor medible.',
    vision:
      'Ser el aliado tecnológico de referencia para las organizaciones de la región que buscan ' +
      'crecer con base en datos y software de calidad.',
    values: [
      {
        title: 'Transparencia',
        description: 'Alcances claros, avances visibles y comunicación directa en cada etapa.',
      },
      {
        title: 'Rigor técnico',
        description: 'Buenas prácticas de ingeniería aplicadas de forma consistente.',
      },
      {
        title: 'Compromiso',
        description: 'Cumplimos lo acordado y asumimos la responsabilidad del resultado.',
      },
      {
        title: 'Mejora continua',
        description: 'Medimos, aprendemos y ajustamos para entregar cada vez mejor.',
      },
    ],
  },
  contact: {
    email: 'contacto@nyv.com.ec',
    city: 'Ambato',
    country: 'Ecuador',
    schedule: 'Lunes a viernes, 08:30 a 17:30',
  },
};

export const SITE_CONFIG = new InjectionToken<SiteConfig>('SITE_CONFIG', {
  providedIn: 'root',
  factory: () => SITE_CONTENT,
});
