import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { SITE_CONTENT } from '../config/site.config';
import { SeoManager } from './seo-manager';

describe('SeoManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('applies title, description and canonical URL for a route', () => {
    const seo = TestBed.inject(SeoManager);

    seo.apply({ title: 'Servicios', description: 'Lista de servicios' }, '/servicios?x=1#id');

    expect(TestBed.inject(Title).getTitle()).toBe(`Servicios | ${SITE_CONTENT.legalName}`);
    expect(TestBed.inject(Meta).getTag('name="description"')?.content).toBe('Lista de servicios');
    const canonical = TestBed.inject(DOCUMENT).querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute('href')).toBe(`${SITE_CONTENT.siteUrl}/servicios`);
  });

  it('falls back to the site defaults on the root route', () => {
    const seo = TestBed.inject(SeoManager);

    seo.apply(undefined, '/');

    expect(TestBed.inject(Title).getTitle()).toBe(SITE_CONTENT.legalName);
    expect(TestBed.inject(Meta).getTag('name="description"')?.content).toBe(
      SITE_CONTENT.description,
    );
    const canonical = TestBed.inject(DOCUMENT).querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute('href')).toBe(SITE_CONTENT.siteUrl);
  });
});
