/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        eclipse: {
          50: '#f4f5ff',
          100: '#e8eaff',
          200: '#c7ccff',
          300: '#a4adff',
          400: '#808eff',
          500: '#5c6fff',
          600: '#3a4ef0',
          700: '#2837b8',
          800: '#1e2a8a',
          900: '#161f64',
          950: '#0f153f'
        }
      }
    }
  },
  plugins: []
}