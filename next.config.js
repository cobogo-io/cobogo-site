const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es', 'tr'],
},
  reactStrictMode: true,
  async redirects() {
    return (process.env.NEXT_PUBLIC_BULLZ == 'true') ? [] : [
      {
        source: '/review',
        destination: 'https://bullz.cobogo.xyz/review',
        permanent: false,
      },
    ]
  },
};
