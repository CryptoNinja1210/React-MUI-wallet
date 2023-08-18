/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 5px rgba(0,0, 255, 0.2)",
          "0 0px 10px rgba(0, 0,255, 0.1)",
        ],
      },
      backgroundColor: {
        'custom-background': 'lightgray',
      },
      mixBlendMode: {
        'screen': 'screen',
      },
    }
  },
  variants: {},
  plugins: [],
}