import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE_CONFIG } from '../../core/config/site.config';
import { Reveal } from '../../shared/directives/reveal';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { StandardsRoadmap } from '../../shared/ui/standards-roadmap/standards-roadmap';

@Component({
  selector: 'app-about',
  imports: [Reveal, SectionHeading, StandardsRoadmap, CtaBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly site = inject(SITE_CONFIG);
}
