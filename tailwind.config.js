const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./docusaurus.config.js', './src/**/*.{js,jsx,ts,tsx}', './docs/**/*.{md,mdx}', './blog/**/*.{md,mdx}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      extend: {},
    },
  },
  plugins: [],
};
