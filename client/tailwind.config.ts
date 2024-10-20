/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral Colour Palette
        'brand-cream': '#F5E9D7',    // Light cream
        'brand-tan': '#D2B49C',      // Tan
        'brand-mocha': '#9C6D57',    // Mocha
        'brand-charcoal': '#4A4A4A', // Charcoal
        'brand-white': '#FFFFFF',    // White
        'brand-offwhite': '#F7F7F2', // Slightly off-white

        // Additional shades
        'brand-light-tan': '#E3D5C2', // Light tan
        'brand-dark-mocha': '#7B4D3A', // Dark mocha
        'brand-deep-charcoal': '#333333', // Deeper charcoal
      },
      fontFamily: {
        'Archivo': ['Archivo Black', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif'],
        'Script': ['Script'],
        'Black': ['Black Han Sans', 'sans-serif'],
      },
      transitionProperty: {
        'width': 'width',
      },
      transitionDuration: {
        '1300': '1300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
