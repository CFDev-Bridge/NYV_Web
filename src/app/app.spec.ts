import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { provideContactSender } from './core/services/contact/provide-contact-sender';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([]), provideHttpClient(), provideContactSender()],
    }).compileComponents();
  });

  it('renders the shell with header, main landmark and footer', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('header')).not.toBeNull();
    expect(compiled.querySelector('main#contenido-principal')).not.toBeNull();
    expect(compiled.querySelector('footer')).not.toBeNull();
  });

  it('exposes a skip link as the first focusable element', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const skipLink = compiled.querySelector<HTMLAnchorElement>('a.skip-link');

    expect(skipLink?.getAttribute('href')).toBe('#contenido-principal');
  });
});
