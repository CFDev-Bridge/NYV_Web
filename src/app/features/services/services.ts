import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';
import { ServiceCard } from '../../shared/ui/service-card/service-card';

@Component({
  selector: 'app-services',
  imports: [RouterLink, ServiceCard, CtaBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly site = inject(SITE_CONFIG);
}
