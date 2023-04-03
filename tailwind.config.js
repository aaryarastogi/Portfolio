/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      keyframes:{
        ripple:{
          '0%':{width:'0px',height:'0px',opacity:0.5},
          '100%':{width:'500px',height:'500px',opacity:0}
        }
      },
      animation:{
        ripple:'ripple 1s linear infinite'
      },
      colors:{
        navbarBg:"#333C4A",
        Heading:"#9EE5FB",
        navbarLink:"#45A29F",
        bg:"#1F2833",
        smallHeading:"#45A29E",
        bg1:"#5B5561",
        h1:"#46344E",
        h2:"#4B3854",
        button:"#34A6E2"
      }
    },
  },
  plugins: [Myclass],
}
