import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { BrandWordmark } from '../../shared/ui/brand-wordmark/brand-wordmark';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, BrandWordmark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
    '(window:scroll)': 'updateScrolled()',
  },
})
export class SiteHeader {
  private readonly document = inject(DOCUMENT);

  protected readonly site = inject(SITE_CONFIG);
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected updateScrolled(): void {
    this.scrolled.set((this.document.defaultView?.scrollY ?? 0) > 8);
  }
}
