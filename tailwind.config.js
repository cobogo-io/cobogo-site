/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        orbitron: ['Orbitron', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#121212',
        'yellow-community': '#EFE750',
        yellow: '#FCF39E',
        'yellow-2': '#F0E84F',
        'pink-launchpad': '#F5AEFF',
        pink: '#FFCAFF',
        'pink-2': '#F2A9EE',
        'pink-3': '#FEE1FF',
        'blue-social': '#00B9E9',
        blue: '#9FE8FF',
        'blue-2': '#DDFFFF',
        gray: '#1C1C1C',
        'gray-2': '#111111',
        'gray-3': '#1D1D1D',
      },
      backgroundImage: {
        'home-carrousel-social-background':
          "url('/images/home-carrousel-social-background.svg')",
        'home-carrousel-social-background-mobile':
          "url('/images/home-carrousel-social-background-mobile.svg')",
        'home-carrousel-community-background':
          "url('/images/home-carrousel-community-background.svg')",
        'home-carrousel-community-background-mobile':
          "url('/images/home-carrousel-community-background-mobile.svg')",
        'home-carrousel-launchpad-background':
          "url('/images/home-carrousel-launchpad-background.svg')",
        'home-carrousel-launchpad-background-mobile':
          "url('/images/home-carrousel-launchpad-background-mobile.svg')",
        'home-carrousel-social-background':
          "url('/images/home-carrousel-social-background.svg')",
        'launchpad-main-background':
          "url('/images/launchpad-main-background.svg')",
        'related-content-text-gradient':
          'linear-gradient(92.91deg, #EFE750 -4%, #BA68C8 18%, #00B9E9 38%);',
        'related-content-text-gradient-en':
          'linear-gradient(92.91deg, #EFE750 -4%, #BA68C8 50%, #00B9E9 70%);',
        'related-content-text-gradient-pt':
          'linear-gradient(92.91deg, #EFE750 -4%, #BA68C8 58%, #00B9E9 78%);',
        'mentions-text-gradient':
          'linear-gradient(92.91deg, #EFE750 -2%, #BA68C8 18%, #00B9E9 38%);',
      },
    },
  },
  plugins: [require('tailwind-clip-path'), require('tailwind-scrollbar')],
}
