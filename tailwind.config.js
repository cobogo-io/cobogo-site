module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#4FB9E3',
      bluehover: '#2E6C85',
      purple: '#514E7F',
      purplehover: '#373556',
      purplelight: '#6C63FF',
      purplelighthover: '#4C46A1',
      white: '#FFFFFF',
      primary: '#121212',
      secondary: '#1C1C1C',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
