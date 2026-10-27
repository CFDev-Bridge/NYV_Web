import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Marca denominativa NYV: logotipo tipográfico con un glifo de lente como
 * elemento de apoyo. La identidad definitiva está pendiente; este componente
 * concentra el cambio cuando exista.
 */
@Component({
  selector: 'app-brand-wordmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="wordmark" [class.wordmark--inverse]="variant() === 'inverse'">
      <svg class="wordmark__lens" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <circle cx="16" cy="16" r="13.5" class="wordmark__ring" />
        <circle cx="16" cy="16" r="6.5" class="wordmark__ring wordmark__ring--inner" />
        <circle cx="20.5" cy="11.5" r="2.4" class="wordmark__dot" />
      </svg>
      <span class="wordmark__text">NYV</span>
    </span>
  `,
  styles: `
    .wordmark {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      color: var(--ink);
    }
    .wordmark--inverse {
      color: var(--night-text);
    }
    .wordmark__lens {
      width: 1.75rem;
      height: 1.75rem;
      flex-shrink: 0;
    }
    .wordmark__ring {
      fill: none;
      stroke: currentColor;
      stroke-width: 1.6;
    }
    .wordmark__ring--inner {
      stroke-width: 1.2;
      opacity: 0.55;
    }
    .wordmark__dot {
      fill: var(--signal);
    }
    .wordmark--inverse .wordmark__dot {
      fill: var(--signal-bright);
    }
    .wordmark__text {
      font-family: var(--font-display);
      font-size: 1.45rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1;
    }
  `,
})
export class BrandWordmark {
  readonly variant = input<'default' | 'inverse'>('default');
}
