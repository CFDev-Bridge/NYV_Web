import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { Reveal } from '../../shared/directives/reveal';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';
import { ObservatoryInstrument } from '../../shared/ui/observatory-instrument/observatory-instrument';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { StandardsRoadmap } from '../../shared/ui/standards-roadmap/standards-roadmap';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Reveal, SectionHeading, ObservatoryInstrument, StandardsRoadmap, CtaBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = inject(SITE_CONFIG);
}
