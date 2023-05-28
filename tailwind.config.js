/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F7A8C',
        secondary: '#BFDBF7',
        dark: '#022B3A',
        light: '#FEFEFE',
        gray: '#E1E5F2',
      },
    },
  },
  plugins: [],
};
