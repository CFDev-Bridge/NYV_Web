# Sitio web corporativo de NYV S.A.

Sitio institucional de **NYV S.A.** construido con **Angular 21** (componentes standalone, señales, detección de cambios sin Zone.js). Incluye las secciones Inicio, Nosotros, Servicios y Contacto, con formulario validado, SEO por ruta, accesibilidad y diseño responsive.

## Requisitos

- Node.js 22.12 o superior (el contenedor OpenCode incluye Node 22 LTS).
- npm 10 o superior.

## Comandos

| Comando | Descripción |
|---|---|
| `npm install` | Instala las dependencias. |
| `npm start` | Servidor de desarrollo en `http://localhost:4200`. |
| `npm run build` | Compilación de producción en `dist/nyv-web/browser`. |
| `npm test` | Pruebas unitarias con Vitest. |
| `npx prettier --write src` | Formatea el código. |

## Estructura

```text
src/
├── app/
│   ├── core/
│   │   ├── config/site.config.ts        # Contenido institucional (textos, servicios, contacto)
│   │   ├── models/                      # Interfaces de dominio
│   │   └── services/
│   │       ├── seo-manager.ts           # Título, metadatos, canónica y foco por ruta
│   │       └── contact/                 # Canal de envío del formulario (HTTP o mailto)
│   ├── layout/                          # Cabecera y pie de página
│   ├── features/                        # Páginas: home, about, services, contact, not-found
│   ├── shared/ui/                       # Componentes reutilizables (logo, tarjetas, CTA)
│   ├── app.config.ts                    # Proveedores de la aplicación
│   └── app.routes.ts                    # Rutas con carga diferida y datos SEO
├── environments/                        # Configuración por entorno
└── styles/                              # Tokens de diseño, base, layout y componentes globales
```

## Cómo actualizar el contenido

Todo el contenido institucional vive en `src/app/core/config/site.config.ts`:

- `legalName`, `tagline`, `description` y `siteUrl` (URL pública, usada en la etiqueta canónica).
- `services`: cada servicio tiene `id` (se usa como ancla y en el enlace *Solicitar información*), título, resumen, descripción y entregables.
- `about`: misión, visión y valores.
- `contact`: correo (obligatorio), teléfono, WhatsApp (número internacional sin `+`), dirección y horario. Los campos opcionales se muestran solo si tienen valor.

Las páginas leen esta configuración mediante el token `SITE_CONFIG`; no hay textos institucionales repartidos en las plantillas.

## Formulario de contacto

El formulario valida en el cliente (longitudes máximas, correo, teléfono, consentimiento) e incluye un campo trampa para bots. El envío se delega a la abstracción `ContactSender`, con dos implementaciones:

1. **`HttpContactSender`**: envía un `POST` con JSON al endpoint definido en `environment.contactEndpoint`. Úsalo con un servicio de formularios (por ejemplo Formspree, Basin o una función serverless propia). El cuerpo enviado es:

   ```json
   {
     "name": "string",
     "email": "string",
     "phone": "string",
     "company": "string",
     "subject": "string",
     "message": "string"
   }
   ```

2. **`MailtoContactSender`**: se activa automáticamente cuando `contactEndpoint` está vacío. Abre el cliente de correo del visitante con el mensaje prellenado hacia `contact.email`.

Para activar el envío HTTP edita `src/environments/environment.ts`:

```ts
export const environment = {
  production: true,
  contactEndpoint: 'https://tu-endpoint.example.com/contacto',
} as const;
```

El endpoint debe validar nuevamente los datos en el servidor y aplicar límites de frecuencia; la validación del navegador es solo una primera barrera. Nunca coloques claves ni credenciales en los archivos de `environments/`: se publican con el sitio.

## Seguridad

- Política de seguridad de contenido (CSP) declarada en `src/index.html` sin `unsafe-inline` para scripts. `connect-src` permite `https:` para que el endpoint de contacto funcione; si usas un dominio fijo, restríngelo a ese origen. La compilación desactiva el CSS crítico en línea (`inlineCritical: false`) porque esa optimización inyecta un manejador `onload` inline que la CSP bloquearía.
- Sin dependencias de fuentes ni scripts externos.
- Angular sanitiza toda interpolación; el proyecto no usa `innerHTML` ni `bypassSecurityTrust*`.
- Parámetros de consulta (`?servicio=`) se validan contra la lista de servicios antes de usarse.

Configura además en el servidor las cabeceras `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` y `Content-Security-Policy` con `frame-ancestors 'none'` (esa directiva solo surte efecto como cabecera HTTP, no en la etiqueta `meta`).

## Despliegue

El resultado de `npm run build` es estático. Cualquier servidor debe devolver `index.html` para rutas desconocidas (aplicación de una sola página).

**Nginx**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Netlify**: crea `public/_redirects` con `/* /index.html 200`.

**GitHub Pages**: compila con `npm run build -- --base-href /NOMBRE-DEL-REPO/` y publica `dist/nyv-web/browser`, copiando `index.html` como `404.html`.

## Accesibilidad

- Enlace para saltar al contenido, regiones semánticas (`header`, `nav`, `main`, `footer`).
- Menú móvil con `aria-expanded`, cierre con Escape y al navegar.
- Formulario con etiquetas asociadas, `aria-invalid`, mensajes de error vinculados por `aria-describedby` y foco en el primer campo inválido.
- Contraste de color conforme a WCAG 2.1 AA en texto y controles.
- Respeta `prefers-reduced-motion`.
