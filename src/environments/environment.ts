/**
 * Configuración de producción.
 *
 * `contactEndpoint`: URL HTTPS que recibe el formulario de contacto (POST JSON).
 * Si queda vacío, el sitio abre el cliente de correo del visitante (mailto:)
 * con el mensaje prellenado. Nunca coloques credenciales aquí: este archivo
 * se publica junto con el sitio.
 */
export const environment = {
  production: true,
  contactEndpoint: '',
} as const;
