export interface NavLink {
  readonly label: string;
  readonly path: string;
}

export interface ServiceOffering {
  /** Identificador estable; se usa en anclas y en el asunto del formulario. */
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly description: string;
  readonly deliverables: readonly string[];
  /** Nombre del icono definido en `ServiceCard`. */
  readonly icon: ServiceIcon;
}

export type ServiceIcon = 'code' | 'data' | 'cloud' | 'integration' | 'support' | 'strategy';

export interface ValueProposition {
  readonly title: string;
  readonly description: string;
}

export interface ProcessStep {
  readonly title: string;
  readonly description: string;
}

export interface CompanyValue {
  readonly title: string;
  readonly description: string;
}

export interface ContactChannels {
  readonly email: string;
  readonly phone?: string;
  readonly whatsapp?: string;
  readonly city: string;
  readonly country: string;
  readonly address?: string;
  readonly schedule: string;
}

export interface SiteConfig {
  readonly companyName: string;
  readonly legalName: string;
  readonly tagline: string;
  readonly description: string;
  readonly siteUrl: string;
  readonly navigation: readonly NavLink[];
  readonly services: readonly ServiceOffering[];
  readonly valuePropositions: readonly ValueProposition[];
  readonly process: readonly ProcessStep[];
  readonly about: {
    readonly intro: string;
    readonly mission: string;
    readonly vision: string;
    readonly values: readonly CompanyValue[];
  };
  readonly contact: ContactChannels;
}
