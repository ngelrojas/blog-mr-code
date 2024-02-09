/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width:{
        '990': '990px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}

