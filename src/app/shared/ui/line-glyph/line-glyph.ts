import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Glifo de cada línea de negocio, dibujado con el vocabulario del instrumento:
 * círculo, retícula, trazo de 1,5 y el punto observado en color señal.
 */
@Component({
  selector: 'app-line-glyph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg class="glyph" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" class="glyph__ring" />
      @switch (lineId()) {
        @case ('software') {
          <path d="M18 15 11 24l7 9M30 15l7 9-7 9" class="glyph__stroke" />
          <circle cx="24" cy="24" r="2.2" class="glyph__dot" />
        }
        @case ('ai') {
          <path
            d="M9 24c4-6.5 9.5-10 15-10s11 3.5 15 10c-4 6.5-9.5 10-15 10S13 30.5 9 24Z"
            class="glyph__stroke"
          />
          <circle cx="24" cy="24" r="5" class="glyph__stroke" />
          <circle cx="26" cy="22" r="1.8" class="glyph__dot" />
        }
        @case ('data') {
          <ellipse cx="24" cy="16" rx="11" ry="4" class="glyph__stroke" />
          <path
            d="M13 16v16c0 2.2 4.9 4 11 4s11-1.8 11-4V16M13 24c0 2.2 4.9 4 11 4s11-1.8 11-4"
            class="glyph__stroke"
          />
          <circle cx="31" cy="32" r="2" class="glyph__dot" />
        }
        @case ('consulting') {
          <circle cx="24" cy="24" r="12" class="glyph__stroke" />
          <path d="m30 18-3.5 8.5L18 30l3.5-8.5L30 18Z" class="glyph__stroke" />
          <circle cx="24" cy="24" r="1.8" class="glyph__dot" />
        }
        @case ('growth') {
          <path d="M11 33l8-9 6 5 12-14" class="glyph__stroke" />
          <path d="M30 15h7v7" class="glyph__stroke" />
          <circle cx="37" cy="15" r="2.2" class="glyph__dot" />
        }
        @case ('labs') {
          <path
            d="M19 11h10M21 11v9l-8.5 14.5A2 2 0 0 0 14.2 38h19.6a2 2 0 0 0 1.7-3.5L27 20v-9"
            class="glyph__stroke"
          />
          <circle cx="20" cy="31" r="2" class="glyph__dot" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      color: inherit;
    }
    .glyph {
      width: 100%;
      height: 100%;
    }
    .glyph__ring {
      fill: none;
      stroke: currentColor;
      stroke-width: 0.8;
      opacity: 0.35;
    }
    .glyph__stroke {
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .glyph__dot {
      fill: var(--signal-bright);
    }
    :host-context(.on-paper) .glyph__dot {
      fill: var(--signal);
    }
  `,
})
export class LineGlyph {
  readonly lineId = input.required<string>();
}
