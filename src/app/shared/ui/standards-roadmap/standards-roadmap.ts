import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE_CONFIG } from '../../../core/config/site.config';
import { Reveal } from '../../directives/reveal';

/** Ruta de madurez: estándares que NYV adopta progresivamente. No son certificaciones obtenidas. */
@Component({
  selector: 'app-standards-roadmap',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ol class="roadmap" appReveal>
      @for (standard of site.standards; track standard.code; let i = $index) {
        <li class="roadmap__item" appReveal [appRevealDelay]="i * 70">
          <span class="roadmap__marker" aria-hidden="true"></span>
          <span class="roadmap__code">{{ standard.code }}</span>
          <span class="roadmap__scope">{{ standard.scope }}</span>
        </li>
      }
    </ol>
    <p class="roadmap__note">
      En adopción progresiva. NYV aún no cuenta con certificaciones: esta tabla fija la ruta de
      madurez, no un logro alcanzado.
    </p>
  `,
  styles: `
    .roadmap {
      position: relative;
      display: grid;
      gap: var(--space-5);
      margin: 0;
      padding: 0 0 0 1.5rem;
      list-style: none;
    }
    .roadmap::before {
      content: '';
      position: absolute;
      top: 0.4rem;
      bottom: 0.4rem;
      left: 0.3rem;
      width: 1px;
      background: var(--signal);
      opacity: 0.5;
      transform-origin: top;
      transition: transform 1400ms var(--ease-out);
    }
    .roadmap.reveal--pending::before {
      transform: scaleY(0);
    }
    .roadmap.reveal--pending.is-revealed::before {
      transform: scaleY(1);
    }
    .roadmap__item {
      position: relative;
      display: grid;
      gap: var(--space-1);
    }
    .roadmap__marker {
      position: absolute;
      left: -1.5rem;
      top: 0.45rem;
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
      border: 1.5px solid var(--signal);
      background: var(--paper);
    }
    .roadmap__code {
      font-family: var(--font-display);
      font-size: var(--text-lg);
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .roadmap__scope {
      color: var(--ink-2);
      max-width: 34ch;
    }
    .roadmap__note {
      margin: var(--space-6) 0 0;
      max-width: 64ch;
      font-size: var(--text-sm);
      color: var(--ink-2);
    }
    @media (prefers-reduced-motion: reduce) {
      .roadmap::before {
        transform: none !important;
        transition: none;
      }
    }
    @media (min-width: 64rem) {
      .roadmap {
        grid-template-columns: repeat(6, 1fr);
        gap: var(--space-4);
        padding: 1.6rem 0 0;
      }
      .roadmap::before {
        top: 0.3rem;
        bottom: auto;
        left: 0.3rem;
        right: 0;
        width: auto;
        height: 1px;
        transform-origin: left;
      }
      .roadmap.reveal--pending::before {
        transform: scaleX(0);
      }
      .roadmap.reveal--pending.is-revealed::before {
        transform: scaleX(1);
      }
      .roadmap__marker {
        left: 0;
        top: -1.6rem;
      }
    }
  `,
})
export class StandardsRoadmap {
  protected readonly site = inject(SITE_CONFIG);
}
