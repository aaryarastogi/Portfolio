/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
         animation:{
          shine:'shine is'
         },
         keyframes:{
          shine:{
            "100%":{left:"125%"},
          },
         },
    },
  },
  plugins: [],
}
