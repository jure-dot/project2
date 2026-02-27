/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': '17px',
        'h1': '32px',
        'h2': '28px',
        'h3': '26px',
        'h4': '24px',
        'h5': '22px',
        'h6': '19px',
      },
      colors: {
        primary: {
          DEFAULT: '#2CB1BC',
          hover: '#13919B',
        },
        navy: {
          dark: '#0F2A43',
          DEFAULT: '#133453',
        },
        slate: {
          DEFAULT: '#587089',
          light: '#829AB1',
        },
        accent: {
          cyan: '#E0FCFF',
          gray: '#F5F7FA',
        },
      },
    },
  },
  plugins: [],
};
