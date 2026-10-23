import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta" aria-labelledby="cta-titulo">
      <div class="container cta__inner">
        <div>
          <h2 id="cta-titulo" class="cta__title">{{ title() }}</h2>
          <p class="cta__text">{{ text() }}</p>
        </div>
        <a routerLink="/contacto" class="btn btn--accent">{{ actionLabel() }}</a>
      </div>
    </section>
  `,
  styles: `
    .cta {
      padding-block: var(--space-8);
      background: linear-gradient(
        135deg,
        var(--color-primary) 0%,
        var(--color-primary-strong) 100%
      );
      color: var(--color-on-primary);
    }
    .cta__inner {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
      align-items: flex-start;
    }
    .cta__title {
      margin: 0;
      color: inherit;
    }
    .cta__text {
      margin: var(--space-2) 0 0;
      max-width: 60ch;
      color: var(--color-on-primary-muted);
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
  readonly title = input('¿Tienes un proyecto en mente?');
  readonly text = input(
    'Cuéntanos qué necesitas y te proponemos un camino claro en alcance, tiempo y presupuesto.',
  );
  readonly actionLabel = input('Conversemos');
}
