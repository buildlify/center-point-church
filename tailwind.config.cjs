/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#217bdb',
      primaryDark: '#15579e',
      secondary: '#2b9fd9',
      black: '#000',
      white: '#fff',
      gray: '#e3e4e6',
      darkGray: '#5e5e5e',
      spotify: '#1DB954',
      appleMusic: ' #f94c57',
      sermon: 'rgb(40, 40, 40)',
      grayish: 'rgb(130, 130, 130, 0.7)',
    },
    borderRadius: {
      primary: '6px',
      full: '50%',
      secondary: '20px',
    },
    boxShadow: {
      main: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      inset: 'inset 0 2px 4px 0 hsla(0, 0%, 0%, .2)',
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['Open Sans', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        '3xl': '1px 1px 0 rgb(0 0 0 / 50%)',
      },
      backgroundImage: {
        header: "url('/test.png')",
      },
      aspectRatio: {
        image: '12 / 8',
      },
    },
  },
  plugins: [],
};
