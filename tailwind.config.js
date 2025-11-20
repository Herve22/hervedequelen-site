/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          light: '#2C5282',
          dark: '#152943',
        },
        accent: {
          DEFAULT: '#FF6B35',
          light: '#FF8C5A',
          dark: '#E65525',
        },
        neutral: {
          50: '#F5F7FA',
          100: '#E8ECF1',
          200: '#D1D9E3',
          300: '#B3BFD0',
          400: '#8896AB',
          500: '#677B94',
          600: '#4E6179',
          700: '#3D4E63',
          800: '#2C3E50',
          900: '#1A2633',
        },
      },
    },
  },
  plugins: [],
}
