import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Isologo de NYV S.A.S. en SVG inline para evitar peticiones externas. */
@Component({
  selector: 'app-brand-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="brand" [class.brand--inverse]="variant() === 'inverse'">
      <svg class="brand__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <rect x="2" y="2" width="36" height="36" rx="9" class="brand__mark-bg" />
        <path d="M12 28V12l16 16V12" class="brand__mark-stroke" />
      </svg>
      <span class="brand__text">
        <span class="brand__name">NYV</span>
        <span class="brand__suffix">S.A.S.</span>
      </span>
    </span>
  `,
  styles: `
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      color: var(--color-primary);
    }
    .brand--inverse {
      color: var(--color-on-primary);
    }
    .brand__mark {
      width: 2.25rem;
      height: 2.25rem;
      flex-shrink: 0;
    }
    .brand__mark-bg {
      fill: var(--color-primary);
    }
    .brand--inverse .brand__mark-bg {
      fill: var(--color-accent);
    }
    .brand__mark-stroke {
      fill: none;
      stroke: #fff;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .brand__text {
      display: inline-flex;
      align-items: baseline;
      gap: 0.35rem;
      line-height: 1;
    }
    .brand__name {
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: 0.04em;
    }
    .brand__suffix {
      font-size: 0.8rem;
      font-weight: 600;
      opacity: 0.75;
    }
  `,
})
export class BrandLogo {
  readonly variant = input<'default' | 'inverse'>('default');
}
