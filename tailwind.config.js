/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        menuBackground: 'linear-gradient(45deg, rgba(24,24,72,1), rgba(48,72,120,1), rgba(0, 0, 0, 0.5))',
      }
    },
  },
  plugins: [],
  important: true,
}

