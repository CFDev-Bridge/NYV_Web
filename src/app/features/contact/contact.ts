import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SITE_CONFIG } from '../../core/config/site.config';
import { ContactMessage, ContactStatus } from '../../core/models/contact.models';
import { CONTACT_SENDER } from '../../core/services/contact/contact-sender';

/** Solo dígitos, espacios, paréntesis, guiones y un prefijo internacional opcional. */
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
const OTHER_SUBJECT = 'Otro tema';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly sender = inject(CONTACT_SENDER);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);

  protected readonly site = inject(SITE_CONFIG);
  protected readonly status = signal<ContactStatus>('idle');
  protected readonly subjects = [...this.site.services.map((s) => s.title), OTHER_SUBJECT];

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    phone: ['', [Validators.pattern(PHONE_PATTERN)]],
    company: ['', [Validators.maxLength(100)]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1500)]],
    consent: [false, [Validators.requiredTrue]],
    /** Campo trampa para bots: permanece oculto y debe llegar vacío. */
    website: [''],
  });

  constructor() {
    this.preselectSubjectFromQuery();
  }

  protected submit(): void {
    if (this.status() === 'sending') {
      return;
    }
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.focusFirstInvalidField();
      return;
    }

    const value = this.form.getRawValue();
    if (value.website.trim() !== '') {
      // Un bot rellenó el campo oculto: simulamos éxito sin enviar nada.
      this.status.set('sent');
      return;
    }

    this.status.set('sending');
    this.sender
      .send(this.toMessage(value))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.status.set('sent');
          this.form.reset();
        },
        error: () => this.status.set('error'),
      });
  }

  protected reset(): void {
    this.form.reset();
    this.status.set('idle');
  }

  protected showError(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  private toMessage(value: ReturnType<typeof this.form.getRawValue>): ContactMessage {
    return {
      name: value.name.trim(),
      email: value.email.trim().toLowerCase(),
      phone: value.phone.trim(),
      company: value.company.trim(),
      subject: value.subject,
      message: value.message.trim(),
    };
  }

  private preselectSubjectFromQuery(): void {
    const serviceId = this.route.snapshot.queryParamMap.get('servicio');
    const service = this.site.services.find((s) => s.id === serviceId);
    if (service) {
      this.form.controls.subject.setValue(service.title);
    }
  }

  private focusFirstInvalidField(): void {
    const invalid = this.document.querySelector<HTMLElement>('.contact-form [aria-invalid="true"]');
    invalid?.focus();
  }
}
