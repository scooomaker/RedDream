/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'background': "url('/1.jpg')",
        //  'footer-texture': "url('/img/footer-texture.png')",
        }
    },
  },
  plugins: [],
}