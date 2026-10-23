import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './layout/footer/footer';
import { SiteHeader } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#contenido-principal">Saltar al contenido principal</a>
    <app-site-header />
    <main id="contenido-principal" class="site-main" tabindex="-1">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
})
export class App {}
