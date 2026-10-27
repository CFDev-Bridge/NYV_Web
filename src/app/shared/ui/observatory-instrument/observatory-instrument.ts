import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';

interface Beacon {
  readonly cx: number;
  readonly cy: number;
  readonly r: number;
  readonly delay: number;
}

const CENTER = 200;
const SWEEP_SECONDS = 14;

/**
 * Instrumento del Observatorio: anillos graduados y un barrido que ilumina
 * puntos de datos a su paso. Es el momento de movimiento autoral del sitio.
 * El barrido se detiene fuera de pantalla y con `prefers-reduced-motion`.
 */
@Component({
  selector: 'app-observatory-instrument',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './observatory-instrument.html',
  styleUrl: './observatory-instrument.scss',
  host: {
    '[class.is-paused]': 'paused()',
    '[style.--sweep-seconds]': 'sweepSeconds + "s"',
  },
})
export class ObservatoryInstrument implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private observer: IntersectionObserver | undefined;

  protected readonly paused = signal(false);
  protected readonly sweepSeconds = SWEEP_SECONDS;
  protected readonly ticks = Array.from({ length: 72 }, (_, i) => i * 5);
  protected readonly rings = [172, 136, 100, 64];
  protected readonly beacons: readonly Beacon[] = [
    { angle: 22, radius: 150, r: 4 },
    { angle: 68, radius: 118, r: 3 },
    { angle: 111, radius: 160, r: 3.5 },
    { angle: 147, radius: 84, r: 3 },
    { angle: 196, radius: 128, r: 4 },
    { angle: 238, radius: 156, r: 3 },
    { angle: 281, radius: 96, r: 3.5 },
    { angle: 326, radius: 142, r: 3 },
  ].map(({ angle, radius, r }) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      cx: Math.round((CENTER + radius * Math.cos(rad)) * 10) / 10,
      cy: Math.round((CENTER + radius * Math.sin(rad)) * 10) / 10,
      r,
      delay: Math.round((angle / 360) * SWEEP_SECONDS * 100) / 100,
    };
  });

  ngAfterViewInit(): void {
    if (!this.document.defaultView || typeof IntersectionObserver === 'undefined') {
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => this.paused.set(!entries.some((e) => e.isIntersecting)),
      { threshold: 0.05 },
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
