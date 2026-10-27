import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';

@Component({
  selector: 'app-services',
  imports: [RouterLink, CtaBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly site = inject(SITE_CONFIG);
}
