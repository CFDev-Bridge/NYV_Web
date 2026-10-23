import { TestBed } from '@angular/core/testing';
import { SITE_CONTENT } from '../../config/site.config';
import { ContactMessage } from '../../models/contact.models';
import { MailtoContactSender } from './mailto-contact-sender';

describe('MailtoContactSender', () => {
  const message: ContactMessage = {
    name: 'Luis & Cía',
    email: 'luis@example.com',
    phone: '',
    company: '',
    subject: 'Consultoría tecnológica',
    message: 'Hola,\n¿podemos agendar una reunión?',
  };

  it('builds a mailto URL addressed to the configured email with encoded subject and body', () => {
    const sender = TestBed.inject(MailtoContactSender);

    const url = new URL(sender.buildMailto(message));

    expect(url.protocol).toBe('mailto:');
    expect(url.pathname).toBe(SITE_CONTENT.contact.email);
    expect(url.searchParams.get('subject')).toBe('[Web] Consultoría tecnológica - Luis & Cía');
    expect(url.searchParams.get('body')).toBe(
      'Nombre: Luis & Cía\nCorreo: luis@example.com\n\nHola,\n¿podemos agendar una reunión?',
    );
    expect(url.href).not.toContain('+');
  });

  it('includes phone and company only when present', () => {
    const sender = TestBed.inject(MailtoContactSender);

    const url = new URL(sender.buildMailto({ ...message, phone: '0991234567', company: 'ACME' }));

    expect(url.searchParams.get('body')).toContain('Teléfono: 0991234567');
    expect(url.searchParams.get('body')).toContain('Empresa: ACME');
  });
});
