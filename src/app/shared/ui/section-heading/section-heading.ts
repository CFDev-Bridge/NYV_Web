import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-heading" [class.section-heading--center]="align() === 'center'">
      @if (eyebrow()) {
        <p class="section-heading__eyebrow">{{ eyebrow() }}</p>
      }
      <h2 class="section-heading__title" [id]="headingId()">{{ title() }}</h2>
      @if (lead()) {
        <p class="section-heading__lead">{{ lead() }}</p>
      }
    </div>
  `,
  styles: `
    .section-heading {
      max-width: 62ch;
      margin-bottom: var(--space-6);
    }
    .section-heading--center {
      margin-inline: auto;
      text-align: center;
    }
    .section-heading__eyebrow {
      margin: 0 0 var(--space-2);
      font-size: var(--text-sm);
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-accent-strong);
    }
    .section-heading__title {
      margin: 0;
    }
    .section-heading__lead {
      margin: var(--space-3) 0 0;
      font-size: var(--text-lg);
      color: var(--color-text-muted);
    }
  `,
})
export class SectionHeading {
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly eyebrow = input<string>();
  readonly lead = input<string>();
  readonly align = input<'start' | 'center'>('start');
}
