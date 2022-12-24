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
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
