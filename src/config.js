export const Config = {
  endpoint: {
    base: window.location.hostname === 'localhost' ? 'http://trinnov-admin.avenirdigital.eu/api' : '/api',
  },
  allowedFileExtensions: [
    'image/jpeg',
    'image/x-citrix-jpeg',
    'image/png',
    'image/gif',
    'image/svg+xml',
    'image/x-icon',
  ]
};
