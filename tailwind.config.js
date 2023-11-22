/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        menuBackground: 'linear-gradient(45deg, rgba(24,24,72,1), rgba(48,72,120,1), rgba(0, 0, 0, 0.5))',
      },
      keyframes: {
        'show-menu': {
          '0%': { transform: 'translatex(-100%)' },
          '50%': { transform: 'translatex(-50%)' },
          '100%': { transform: 'translatex(0)' },
        },
        'hide-menu': {
          '0%': { transform: 'translatex(0)' },
          '50%': { transform: 'translatex(-50%)' },
          '100%': { transform: 'translatex(-100%)' },
        },
      },
      animation: {
        'show-menu': 'show-menu 0.5s linear forwards',
        'hide-menu': 'hide-menu 0.5s linear forwards',
      },
    },
  },
  plugins: [],
  important: true,
}

