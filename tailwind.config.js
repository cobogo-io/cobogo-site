module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    colors: {
      blue: '#4FB9E3',
      bluehover: '#2E6C85',
      purple: '#514E7F',
      purplehover: '#373556',
      purplelight: '#6C63FF',
      purplelighthover: '#4C46A1',
      white: '#FFFFFF',
      primary: '#121113',
      secondary: '#1D1D1B',
      details: '#333333',
      violet: '#6808CF',
      violet2: '#B266FA',
      violet3: '#D7ABFF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
