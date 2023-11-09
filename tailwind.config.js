/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
      },
      colors: {
        primary: '#001f3f', // Deep Blue
        secondary: '#FFFFFF', // Pure White
        accent: '#C0C0C0', //  Silver
        green: '#008000', // Green 
        gray: '#333333', // Dark Gray 
    },
  },
  plugins: [],
}