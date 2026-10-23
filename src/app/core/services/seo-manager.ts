import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { SITE_CONFIG } from '../config/site.config';

export interface RouteSeo {
  readonly title: string;
  readonly description: string;
}

/**
 * Mantiene título, metadatos y URL canónica sincronizados con la ruta activa,
 * y devuelve el foco al contenido principal tras cada navegación.
 */
@Injectable({ providedIn: 'root' })
export class SeoManager {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly site = inject(SITE_CONFIG);

  init(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event) => ({ url: event.urlAfterRedirects, seo: this.deepestRouteSeo() })),
      )
      .subscribe(({ url, seo }) => {
        this.apply(seo, url);
        this.focusMainContent();
      });
  }

  apply(seo: RouteSeo | undefined, url: string): void {
    const pageTitle = seo ? `${seo.title} | ${this.site.legalName}` : this.site.legalName;
    const description = seo?.description ?? this.site.description;
    const canonical = this.buildCanonical(url);

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.updateCanonicalLink(canonical);
  }

  private deepestRouteSeo(): RouteSeo | undefined {
    let current: ActivatedRoute = this.route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current.snapshot.data['seo'] as RouteSeo | undefined;
  }

  private buildCanonical(url: string): string {
    const path = url.split(/[?#]/)[0];
    return `${this.site.siteUrl}${path === '/' ? '' : path}`;
  }

  private updateCanonicalLink(href: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private focusMainContent(): void {
    const main = this.document.getElementById('contenido-principal');
    main?.focus({ preventScroll: true });
  }
}
