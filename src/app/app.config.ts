import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withViewTransitions,
  type RouterFeatures,
} from '@angular/router';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { provideContactSender } from './core/services/contact/provide-contact-sender';
import { SeoManager } from './core/services/seo-manager';

const routerFeatures: RouterFeatures[] = [
  withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
  withViewTransitions({ skipInitialTransition: true }),
  ...(environment.hashRouting ? [withHashLocation()] : []),
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, ...routerFeatures),
    provideHttpClient(withFetch()),
    provideContactSender(),
    provideAppInitializer(() => inject(SeoManager).init()),
  ],
};
