/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        gold: '#CBB07D',
        'gold-dark': '#B9A072',
        'gold-darker': '#907D59',
        'gray-border': '#D9D9D9',
        'custom-gray': '#5A5F69',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
