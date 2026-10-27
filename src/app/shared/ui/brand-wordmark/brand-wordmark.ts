import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Bloque de marca NYV: símbolo (N de nexo con el punto observado en la
 * contraforma en V) + logotipo tipográfico. Los archivos maestros viven en
 * `brand/logo/`; este componente replica el símbolo en línea para evitar
 * peticiones y permitir el color por contexto.
 */
@Component({
  selector: 'app-brand-wordmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="brand" [class.brand--inverse]="variant() === 'inverse'">
      <svg class="brand__symbol" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect x="8" y="8" width="9" height="48" class="brand__ink" />
        <rect x="47" y="8" width="9" height="48" class="brand__ink" />
        <polygon points="8,8 20.7,8 56,43.3 56,56 43.3,56 8,20.7" class="brand__ink" />
        <circle cx="40.8" cy="17.2" r="3.4" class="brand__dot" />
      </svg>
      <span class="brand__text">NYV</span>
    </span>
  `,
  styles: `
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      color: var(--ink);
    }
    .brand--inverse {
      color: var(--night-text);
    }
    .brand__symbol {
      width: 1.9rem;
      height: 1.9rem;
      flex-shrink: 0;
    }
    .brand__ink {
      fill: currentColor;
    }
    .brand__dot {
      fill: var(--signal);
    }
    .brand--inverse .brand__dot {
      fill: var(--signal-bright);
    }
    .brand__text {
      font-family: var(--font-display);
      font-size: 1.45rem;
      font-weight: 700;
      letter-spacing: 0.07em;
      line-height: 1;
    }
  `,
})
export class BrandWordmark {
  readonly variant = input<'default' | 'inverse'>('default');
}
