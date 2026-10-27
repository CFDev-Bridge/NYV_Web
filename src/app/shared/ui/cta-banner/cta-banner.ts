import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta section--night" aria-labelledby="cta-titulo">
      <div class="container cta__inner">
        <div class="cta__copy">
          <h2 id="cta-titulo" class="cta__title">{{ title() }}</h2>
          <p class="cta__text">{{ text() }}</p>
        </div>
        <a routerLink="/contacto" class="btn btn--primary">{{ actionLabel() }}</a>
      </div>
    </section>
  `,
  styles: `
    .cta {
      position: relative;
      overflow: hidden;
      padding-block: var(--space-8);
      border-top: 1px solid var(--night-line);
    }
    .cta::before {
      content: '';
      position: absolute;
      inset: auto -10% -60% auto;
      width: 36rem;
      height: 36rem;
      border-radius: 50%;
      background: radial-gradient(circle, var(--signal-glow), transparent 65%);
      pointer-events: none;
    }
    .cta__inner {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
      align-items: flex-start;
    }
    .cta__title {
      margin: 0;
      max-width: 20ch;
    }
    .cta__text {
      margin: var(--space-3) 0 0;
      max-width: 58ch;
      color: var(--night-muted);
    }
    @media (min-width: 48rem) {
      .cta__inner {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
  `,
})
export class CtaBanner {
  readonly title = input('¿Qué decisión necesitas ver con más claridad?');
  readonly text = input(
    'Cuéntanos el problema y te proponemos un camino concreto en alcance, tiempo y presupuesto.',
  );
  readonly actionLabel = input('Conversemos');
}
