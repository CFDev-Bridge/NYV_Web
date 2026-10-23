import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SITE_CONFIG } from '../../config/site.config';
import { ContactMessage } from '../../models/contact.models';
import { ContactSender } from './contact-sender';

/**
 * Canal de respaldo cuando no existe un endpoint HTTP: abre el cliente de
 * correo del visitante con el mensaje prellenado.
 */
@Injectable({ providedIn: 'root' })
export class MailtoContactSender implements ContactSender {
  private readonly document = inject(DOCUMENT);
  private readonly site = inject(SITE_CONFIG);

  send(message: ContactMessage): Observable<void> {
    this.document.defaultView?.location.assign(this.buildMailto(message));
    return of(undefined);
  }

  buildMailto(message: ContactMessage): string {
    const subject = `[Web] ${message.subject} - ${message.name}`;
    const body = [
      `Nombre: ${message.name}`,
      `Correo: ${message.email}`,
      message.phone ? `Teléfono: ${message.phone}` : null,
      message.company ? `Empresa: ${message.company}` : null,
      '',
      message.message,
    ]
      .filter((line): line is string => line !== null)
      .join('\n');

    const params = new URLSearchParams({ subject, body });
    return `mailto:${this.site.contact.email}?${params.toString().replace(/\+/g, '%20')}`;
  }
}
