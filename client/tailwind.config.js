/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        LightGrey:'#141313',
        Grey:'#5e5e5e',
        Yellow:'#ffd149',
        lightYellow:'#c9bc61',
        yel:'#c5a331'
      }
    },
  },
  plugins: [],
}

