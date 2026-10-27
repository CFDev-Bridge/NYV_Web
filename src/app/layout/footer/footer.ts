import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { BrandWordmark } from '../../shared/ui/brand-wordmark/brand-wordmark';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, BrandWordmark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class SiteFooter {
  protected readonly site = inject(SITE_CONFIG);
  protected readonly currentYear = new Date().getFullYear();
}
