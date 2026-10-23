import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { ContactMessage } from '../../models/contact.models';
import { HttpContactSender } from './http-contact-sender';

describe('HttpContactSender', () => {
  const message: ContactMessage = {
    name: 'Ana',
    email: 'ana@example.com',
    phone: '',
    company: '',
    subject: 'Soporte y mantenimiento',
    message: 'Necesitamos un plan de soporte para nuestro portal.',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
  });

  afterEach(() => TestBed.inject(HttpTestingController).verify());

  it('posts the message as JSON to the configured endpoint', () => {
    const sender = TestBed.inject(HttpContactSender);
    const http = TestBed.inject(HttpTestingController);
    let completed = false;

    sender.send(message).subscribe({ complete: () => (completed = true) });

    const req = http.expectOne(environment.contactEndpoint);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(message);
    expect(req.request.headers.get('Accept')).toBe('application/json');
    req.flush({ ok: true });

    expect(completed).toBe(true);
  });

  it('propagates HTTP errors to the caller', () => {
    const sender = TestBed.inject(HttpContactSender);
    const http = TestBed.inject(HttpTestingController);
    let failed = false;

    sender.send(message).subscribe({ error: () => (failed = true) });
    http
      .expectOne(environment.contactEndpoint)
      .flush('error', { status: 500, statusText: 'Error' });

    expect(failed).toBe(true);
  });
});
