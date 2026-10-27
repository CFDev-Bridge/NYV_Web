import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-head" [class.section-head--center]="align() === 'center'">
      <h2 [id]="headingId()">{{ title() }}</h2>
      @if (lead()) {
        <p class="lead">{{ lead() }}</p>
      }
    </div>
  `,
  styles: `
    .section-head--center {
      margin-inline: auto;
      text-align: center;
    }
  `,
})
export class SectionHeading {
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly lead = input<string>();
  readonly align = input<'start' | 'center'>('start');
}
