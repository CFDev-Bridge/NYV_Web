export interface ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly company: string;
  readonly subject: string;
  readonly message: string;
}

export type ContactStatus = 'idle' | 'sending' | 'sent' | 'error';
