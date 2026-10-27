import { ChangeDetectionStrategy, Component } from '@angular/core';

const WIDTH = 1200;
const HEIGHT = 600;
const LINES = 9;

/** Genera una curva de nivel suave como polilínea de segmentos cortos. */
function contour(index: number): string {
  const base = 80 + index * 52;
  const points: string[] = [];
  for (let x = -40; x <= WIDTH + 40; x += 24) {
    const y =
      base +
      Math.sin(x / 190 + index * 0.9) * 26 +
      Math.sin(x / 73 + index * 2.1) * 9 +
      Math.cos(x / 310 - index * 0.4) * 18;
    points.push(`${x},${y.toFixed(1)}`);
  }
  return `M${points.join('L')}`;
}

/**
 * Curvas de nivel de fondo: el relieve andino leído como un instrumento lo haría.
 * Decorativo, sin interacción; el color lo da el contexto.
 */
@Component({
  selector: 'app-contours',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.viewBox]="viewBox"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      @for (d of paths; track $index) {
        <path [attr.d]="d" [attr.opacity]="$index % 3 === 0 ? 0.9 : 0.5" />
      }
    </svg>
  `,
  styles: `
    :host {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      color: currentColor;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    path {
      fill: none;
      stroke: currentColor;
      stroke-width: 1;
    }
  `,
})
export class Contours {
  protected readonly viewBox = `0 0 ${WIDTH} ${HEIGHT}`;
  protected readonly paths = Array.from({ length: LINES }, (_, i) => contour(i));
}
