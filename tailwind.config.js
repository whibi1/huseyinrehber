/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bosphorus: {
          800: '#1e3a8a', // Deep blue
          900: '#172554', // Darker blue
        },
        byzantine: {
          500: '#f59e0b', // Gold
          600: '#d97706',
        },
        terracotta: {
          600: '#ea580c',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}