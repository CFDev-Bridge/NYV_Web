import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { SITE_CONTENT } from '../../core/config/site.config';
import { ContactMessage } from '../../core/models/contact.models';
import { CONTACT_SENDER, ContactSender } from '../../core/services/contact/contact-sender';
import { Contact } from './contact';

class FakeContactSender implements ContactSender {
  sent: ContactMessage[] = [];
  result: Observable<void> = of(undefined);

  send(message: ContactMessage): Observable<void> {
    this.sent.push(message);
    return this.result;
  }
}

const VALID_MESSAGE = 'Necesitamos un sistema para gestionar inventarios en tres bodegas.';

async function setup(queryParams: Record<string, string> = {}) {
  const sender = new FakeContactSender();
  await TestBed.configureTestingModule({
    imports: [Contact],
    providers: [
      { provide: CONTACT_SENDER, useValue: sender },
      {
        provide: ActivatedRoute,
        useValue: { snapshot: { queryParamMap: convertToParamMap(queryParams) } },
      },
    ],
  }).compileComponents();

  const fixture: ComponentFixture<Contact> = TestBed.createComponent(Contact);
  await fixture.whenStable();
  return { fixture, sender, el: fixture.nativeElement as HTMLElement };
}

function fill(el: HTMLElement, selector: string, value: string): void {
  const input = el.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    selector,
  );
  if (!input) {
    throw new Error(`No existe el campo ${selector}`);
  }
  input.value = value;
  input.dispatchEvent(new Event('input'));
  input.dispatchEvent(new Event('change'));
}

function check(el: HTMLElement, selector: string): void {
  const input = el.querySelector<HTMLInputElement>(selector);
  if (!input) {
    throw new Error(`No existe el campo ${selector}`);
  }
  input.checked = true;
  input.dispatchEvent(new Event('change'));
}

function fillValidForm(el: HTMLElement): void {
  fill(el, '#nombre', 'Ana Pérez');
  fill(el, '#correo', 'Ana.Perez@Empresa.com ');
  fill(el, '#telefono', '+593 99 123 4567');
  fill(el, '#empresa', 'Empresa Ejemplo');
  fill(el, '#asunto', SITE_CONTENT.lines[0].name);
  fill(el, '#mensaje', VALID_MESSAGE);
  check(el, '#consentimiento');
}

async function submitForm(fixture: ComponentFixture<Contact>, el: HTMLElement): Promise<void> {
  el.querySelector('form')?.dispatchEvent(new Event('submit'));
  await fixture.whenStable();
}

describe('Contact', () => {
  it('does not send when the form is empty and shows validation errors', async () => {
    const { fixture, sender, el } = await setup();

    await submitForm(fixture, el);

    expect(sender.sent).toHaveLength(0);
    expect(el.querySelector('#nombre-error')).not.toBeNull();
    expect(el.querySelector('#correo-error')).not.toBeNull();
    expect(el.querySelector('#asunto-error')).not.toBeNull();
    expect(el.querySelector('#mensaje-error')).not.toBeNull();
    expect(el.querySelector('#consentimiento-error')).not.toBeNull();
  });

  it('rejects a malformed phone number', async () => {
    const { fixture, el } = await setup();
    fillValidForm(el);
    fill(el, '#telefono', 'abc');

    await submitForm(fixture, el);

    expect(el.querySelector('#telefono-error')).not.toBeNull();
  });

  it('sends a normalized message and shows the success state', async () => {
    const { fixture, sender, el } = await setup();
    fillValidForm(el);

    await submitForm(fixture, el);

    expect(sender.sent).toEqual([
      {
        name: 'Ana Pérez',
        email: 'ana.perez@empresa.com',
        phone: '+593 99 123 4567',
        company: 'Empresa Ejemplo',
        subject: SITE_CONTENT.lines[0].name,
        message: VALID_MESSAGE,
      },
    ]);
    expect(el.querySelector('.alert--success')).not.toBeNull();
    expect(el.querySelector('form')).toBeNull();
  });

  it('shows an error alert when the sender fails', async () => {
    const { fixture, sender, el } = await setup();
    sender.result = throwError(() => new Error('network'));
    fillValidForm(el);

    await submitForm(fixture, el);

    expect(el.querySelector('.alert--error')).not.toBeNull();
    expect(el.querySelector('form')).not.toBeNull();
  });

  it('silently drops submissions where the honeypot field was filled', async () => {
    const { fixture, sender, el } = await setup();
    fillValidForm(el);
    fill(el, '#sitio-web', 'https://spam.example');

    await submitForm(fixture, el);

    expect(sender.sent).toHaveLength(0);
    expect(el.querySelector('.alert--success')).not.toBeNull();
  });

  it('preselects the subject from the "linea" query parameter', async () => {
    const line = SITE_CONTENT.lines[2];
    const { el } = await setup({ linea: line.id });

    const select = el.querySelector<HTMLSelectElement>('#asunto');
    expect(select?.value).toBe(line.name);
  });

  it('ignores an unknown "linea" query parameter', async () => {
    const { el } = await setup({ linea: '<script>alert(1)</script>' });

    const select = el.querySelector<HTMLSelectElement>('#asunto');
    expect(select?.value).toBe('');
  });
});
