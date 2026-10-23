import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { ServiceCard } from '../../shared/ui/service-card/service-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SectionHeading, ServiceCard, CtaBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = inject(SITE_CONFIG);
}
