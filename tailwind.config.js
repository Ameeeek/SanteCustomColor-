/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#B2A7D0",
        'primary-agak-ungu': '#676AAF',
        'primary-agak-putih': '#E8E2FC',
        'primary-text': '#F8F8FF',
        'primary-agak-merah': '#FFD3CC',
        'primary-bg' : '#F8F4FF'
      },
      fontFamily:{
        'body': ['Noto Sans'],
        'heading': ['Noto Serif']
      }
    },
  },
  plugins: [],
}
