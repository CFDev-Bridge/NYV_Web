import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container not-found">
        <p class="not-found__code">404</p>
        <h1>Página no encontrada</h1>
        <p class="not-found__text">
          La dirección que ingresaste no existe o fue movida. Puedes volver al inicio o revisar
          nuestros servicios.
        </p>
        <div class="not-found__actions">
          <a routerLink="/" class="btn btn--primary">Ir al inicio</a>
          <a routerLink="/servicios" class="btn btn--ghost">Ver servicios</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .not-found {
      max-width: 40rem;
      text-align: center;
    }
    .not-found__code {
      margin: 0;
      font-family: var(--font-display);
      font-size: 6rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.04em;
      color: var(--signal);
    }
    .not-found__text {
      color: var(--ink-2);
    }
    .not-found__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-3);
      margin-top: var(--space-5);
    }
  `,
})
export class NotFound {}
