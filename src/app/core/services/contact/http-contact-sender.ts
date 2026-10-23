import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ContactMessage } from '../../models/contact.models';
import { ContactSender } from './contact-sender';

/** Envía el mensaje como JSON al endpoint configurado en `environment.contactEndpoint`. */
@Injectable({ providedIn: 'root' })
export class HttpContactSender implements ContactSender {
  private readonly http = inject(HttpClient);

  send(message: ContactMessage): Observable<void> {
    return this.http
      .post(environment.contactEndpoint, message, {
        headers: { Accept: 'application/json' },
      })
      .pipe(map(() => undefined));
  }
}
