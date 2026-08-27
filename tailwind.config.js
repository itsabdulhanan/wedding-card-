/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f6dc97',
          DEFAULT: '#d4af37',
          dark: '#8a6620'
        },
        velvet: {
          light: '#a82c3f',
          DEFAULT: '#8a1c2d',
          dark: '#5a0e1c'
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        garamond: ['Cormorant Garamond', 'Georgia', 'serif'],
        calligraphic: ['Pinyon Script', 'Great Vibes', 'cursive'],
        body: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
