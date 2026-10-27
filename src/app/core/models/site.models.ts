export interface NavLink {
  readonly label: string;
  readonly path: string;
}

/** Línea de negocio bajo la casa madre NYV (p. ej. NYV Software). */
export interface BusinessLine {
  /** Identificador estable; se usa en anclas y en el asunto del formulario. */
  readonly id: string;
  /** Nombre comercial completo: "NYV Software". */
  readonly name: string;
  /** Sufijo de la línea: "Software". */
  readonly shortName: string;
  readonly scope: string;
  readonly description: string;
  readonly deliverables: readonly string[];
}

export interface JourneyStep {
  readonly title: string;
  readonly description: string;
}

export interface Standard {
  readonly code: string;
  readonly scope: string;
}

export interface LabelValue {
  readonly label: string;
  readonly value: string;
}

export interface CaseStudy {
  readonly client: string;
  readonly sector: string;
  readonly summary: string;
  readonly model: string;
  readonly facts: readonly LabelValue[];
}

export interface Principle {
  readonly title: string;
  readonly description: string;
}

export interface ContactChannels {
  readonly email: string;
  readonly phone?: string;
  readonly whatsapp?: string;
  readonly city: string;
  readonly region: string;
  readonly country: string;
  readonly address?: string;
  readonly schedule: string;
}

export interface SiteConfig {
  readonly companyName: string;
  readonly legalName: string;
  readonly nameMeaning: string;
  readonly tagline: string;
  readonly description: string;
  readonly siteUrl: string;
  readonly navigation: readonly NavLink[];
  readonly facts: readonly string[];
  /** Lectura de instrumento del hero: datos fijos y verificables de la empresa. */
  readonly readout: readonly LabelValue[];
  readonly lines: readonly BusinessLine[];
  readonly journey: readonly JourneyStep[];
  readonly caseStudy: CaseStudy;
  readonly standards: readonly Standard[];
  readonly about: {
    readonly intro: string;
    readonly nameStory: string;
    readonly direction: string;
    readonly mission: string;
    readonly vision: string;
    readonly principles: readonly Principle[];
    readonly operatingModel: readonly string[];
    readonly markets: string;
  };
  readonly contact: ContactChannels;
}
