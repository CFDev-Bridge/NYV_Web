import { Provider, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CONTACT_SENDER } from './contact-sender';
import { HttpContactSender } from './http-contact-sender';
import { MailtoContactSender } from './mailto-contact-sender';

/** Selecciona el canal de envío según exista o no un endpoint configurado. */
export function provideContactSender(): Provider {
  return {
    provide: CONTACT_SENDER,
    useFactory: () =>
      environment.contactEndpoint ? inject(HttpContactSender) : inject(MailtoContactSender),
  };
}
