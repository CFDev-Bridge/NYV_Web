import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Marca el elemento con `is-revealed` cuando entra en el viewport.
 * El estado inicial es visible: si el script falla o el observador no existe,
 * el contenido nunca queda oculto. Con `prefers-reduced-motion` se revela de inmediato.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay.ms]': 'delay()',
  },
})
export class Reveal implements OnInit, OnDestroy {
  readonly delay = input(0, { alias: 'appRevealDelay' });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private observer: IntersectionObserver | undefined;

  ngOnInit(): void {
    const view = this.document.defaultView;
    const reduceMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? true;
    if (!view || reduceMotion || typeof IntersectionObserver === 'undefined') {
      this.show();
      return;
    }
    this.host.nativeElement.classList.add('reveal--pending');
    this.observer = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && this.show(),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private show(): void {
    this.host.nativeElement.classList.add('is-revealed');
    this.observer?.disconnect();
  }
}
