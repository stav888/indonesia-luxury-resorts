/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#031a14',
          900: '#062d23',
          800: '#0b4738',
        },
        gold: {
          300: '#f6e09e',
          400: '#e5c365',
          500: '#c59f3d',
          600: '#a37e28',
        },
        sand: {
          50: '#faf8f5',
          100: '#f4efe8',
          200: '#e7ded2',
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans: ['Montserrat', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
