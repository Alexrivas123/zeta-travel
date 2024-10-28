/** @type {import('tailwindcss').Config} */

  module.exports = {
     content: ["./src/**/*.{html,js}"],
  
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: {
          'sanFrancisco': "url('../asses/img/chicago.jpg')",
          'sanFranciscoDesktop': "url('./asses/img/sanFranciscoDesktop.jpg')",
          'yosemite': "url('./asses/img/yosemite.jpg')",
          'LA': "url('./asses/img/LA.jpg')",
          'seattle': "url('./asses/img/seattle.jpg')",
          'new_york': "url('./asses/img/new_york.jpg')",
          'norway': "url('./asses/img/norway.jpg')",
          'sydney': "url('./asses/img/sydney.jpg')",
          'miami': "url('./asses/img/miami.jpg')",
          'switzerland': "url('./asses/img/switzerland.jpg')",
          'bali': "url('./asses/img/bali.jpg')",
          'norway': "url('./asses/img/norway.jpg')",
          'chicago': "url('./asses/img/chicago.jpg')",
          'europe': "url('./asses/img/europe.jpg')",
          'iceland': "url('./asses/img/iceland.jpg')",
          
        },
        backgroundColor: theme =>({
          ...theme('colors'),
          'principal': '#CC2D4A',
          'secondary': '#8FA206',
          'tertiary': '#61AEC9',
        }),
        textColor:{
          'principal': '#CC2D4A',
          'secondary': '#8FA206',
          'tertiary': '#61AEC9',
          
        },
        fontFamily: {
          Montserrat: ["Montserrat", "sans-serif"],
         },
        
      },
    },
    variants: {
      width: ["responsive", "hover", "focus"],
      extend: {
     },
    },
    plugins: ['tailwindcss'],
  }