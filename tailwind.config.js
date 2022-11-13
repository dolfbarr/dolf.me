/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layouts/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0078d4',
          dark: '#c26e00',
        },
      },
      fontFamily: {
        play: ['Play', 'sans-serif', '-apple-system', 'Arial', 'system-ui'],
      },
      width: {
        46: '11.5rem',
      },
    },
  },
  plugins: [],
}
