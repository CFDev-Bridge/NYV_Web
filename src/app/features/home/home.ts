import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { Reveal } from '../../shared/directives/reveal';
import { Contours } from '../../shared/ui/contours/contours';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';
import { LineGlyph } from '../../shared/ui/line-glyph/line-glyph';
import { ObservatoryInstrument } from '../../shared/ui/observatory-instrument/observatory-instrument';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { StandardsRoadmap } from '../../shared/ui/standards-roadmap/standards-roadmap';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    Reveal,
    SectionHeading,
    ObservatoryInstrument,
    StandardsRoadmap,
    CtaBanner,
    LineGlyph,
    Contours,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = inject(SITE_CONFIG);
  /** Marcas de la escala graduada del fondo del hero, cada 6°. */
  protected readonly scaleTicks = Array.from({ length: 60 }, (_, i) => i * 6);

  private readonly cards = viewChild<ElementRef<HTMLElement>>('cards');

  /** Nombre corto de una línea a partir de su identificador. */
  protected lineName(lineId: string): string {
    return this.site.lines.find((line) => line.id === lineId)?.shortName ?? lineId;
  }

  /** Desplaza el carrusel de líneas una tarjeta en la dirección indicada. */
  protected scrollCards(direction: -1 | 1): void {
    const track = this.cards()?.nativeElement;
    if (!track) {
      return;
    }
    const card = track.querySelector<HTMLElement>('.card');
    const step = (card?.offsetWidth ?? 320) + 24;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  }
}
