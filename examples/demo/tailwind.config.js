/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'rg-',
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}', '../../packages/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
      },
    },
  },
  plugins: [],
}
