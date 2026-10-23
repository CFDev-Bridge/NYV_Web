import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMessage } from '../../models/contact.models';

/** Abstracción del canal de envío del formulario de contacto. */
export interface ContactSender {
  send(message: ContactMessage): Observable<void>;
}

export const CONTACT_SENDER = new InjectionToken<ContactSender>('CONTACT_SENDER');
