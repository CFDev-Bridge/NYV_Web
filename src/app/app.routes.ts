import { Routes } from '@angular/router';
import { RouteSeo } from './core/services/seo-manager';

const seo = (title: string, description: string): { seo: RouteSeo } => ({
  seo: { title, description },
});

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    data: seo(
      'Inicio',
      'NYV: software a medida, inteligencia artificial, datos e investigación desde Ambato, ' +
        'Ecuador, para empresas e instituciones de América Latina y Estados Unidos.',
    ),
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    data: seo(
      'Nosotros',
      'Nexo y Visión: quiénes somos, misión, visión 2031, modelo de operación y estándares.',
    ),
  },
  {
    path: 'servicios',
    loadComponent: () => import('./features/services/services').then((m) => m.Services),
    data: seo(
      'Líneas de negocio',
      'NYV Software, NYV AI, NYV Data, NYV Consulting, NYV Growth y NYV Labs: ' +
        'seis líneas especializadas bajo una misma casa madre.',
    ),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    data: seo(
      'Contacto',
      'Escríbenos para conversar sobre tu proyecto. Respondemos en horario laboral.',
    ),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    data: seo('Página no encontrada', 'La página solicitada no existe.'),
  },
];
