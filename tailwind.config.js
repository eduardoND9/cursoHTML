/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate:{
        '53':'53deg',
      },  
      colors:{
        'azul-claro':'#243cff',
        'azul-oscuro':'#0d1b3e',
      },
      spacing:{
        '42':'170px',
      },
      screens:{
        'tablet':'900px'
      }
    },
  },
  plugins: [],
}

