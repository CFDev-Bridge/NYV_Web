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
    '[class.site-header-host--hidden]': 'hidden()',
  },
})
export class SiteHeader {
  private readonly document = inject(DOCUMENT);
  private lastScrollY = 0;

  protected readonly site = inject(SITE_CONFIG);
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  /** Se recoge al desplazarse hacia abajo y reaparece al subir. */
  protected readonly hidden = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    if (this.menuOpen()) {
      this.setHidden(false);
    }
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected updateScrolled(): void {
    const y = this.document.defaultView?.scrollY ?? 0;
    const delta = y - this.lastScrollY;
    this.scrolled.set(y > 8);

    if (!this.menuOpen() && Math.abs(delta) > 6) {
      this.setHidden(delta > 0 && y > HIDE_AFTER);
    }
    this.lastScrollY = y;
  }

  private setHidden(hidden: boolean): void {
    if (this.hidden() === hidden) {
      return;
    }
    this.hidden.set(hidden);
    // Las barras pegajosas de las páginas leen este desplazamiento para subir al borde.
    this.document.documentElement.style.setProperty(
      '--header-offset',
      hidden ? '0px' : 'var(--header-height)',
    );
  }
}

/** Píxeles de desplazamiento antes de que el encabezado pueda recogerse. */
const HIDE_AFTER = 160;
