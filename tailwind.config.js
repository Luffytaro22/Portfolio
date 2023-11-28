/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        menuBackground: 'linear-gradient(45deg, rgba(24,24,72,1), rgba(48,72,120,1), rgb(2 91 34))',
      },
      backgroundColor: {
        stackBackground: 'rgba(0, 0, 0, 0.5)',
      },
      transitionProperty: {
        'about-menu': 'opacity 0.5s, transform 0.5s;',
      },
      keyframes: {
        'show-message': {
          '0%': { transform: 'translatey(-100%)' },
          '50%': { transform: 'translatey(-50%)' },
          '100%': { transform: 'translatey(0)' },
        },
        'hide-message': {
          '0%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-50%)' },
          '100%': { transform: 'translatey(-110%)' },
        },
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
        'hover-stacks': {
          '0%': { background: 'inherit' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { background: '#00510C' },
        },
        'hover-links': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'show-message': 'show-message 0.3s linear forwards',
        'hide-message': 'hide-message 0.3s linear forwards',
        'show-menu': 'show-menu 0.5s linear forwards',
        'hide-menu': 'hide-menu 0.5s linear forwards',
        'hover-stacks': 'hover-stacks 0.5s linear forwards',
        'hover-links': 'hover-links 0.5s linear infinite',
      },
    },
  },
  plugins: [],
  important: true,
}

