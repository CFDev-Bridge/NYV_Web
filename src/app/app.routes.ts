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
      'NYV S.A.S.: desarrollo de software a medida, datos e inteligencia de negocio, ' +
        'integración de sistemas, nube y soporte para empresas e instituciones.',
    ),
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    data: seo(
      'Nosotros',
      'Conoce a NYV S.A.S.: misión, visión y los valores que guían cada proyecto tecnológico.',
    ),
  },
  {
    path: 'servicios',
    loadComponent: () => import('./features/services/services').then((m) => m.Services),
    data: seo(
      'Servicios',
      'Servicios de NYV S.A.S.: software a medida, analítica de datos, integración, ' +
        'infraestructura en la nube, soporte y consultoría tecnológica.',
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
