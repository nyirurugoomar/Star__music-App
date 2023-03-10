/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage:{
      'footer-bg':"url('/Users/Omar/Desktop/react-projects/Star music/star-music/star_music-app/Star__music-App/src/assets/footer background.png')"

    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#000000',
      
     }),
     borderRadius: {
      lg:'40px',
      full: '9999px',
     },
    
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      xxl:'64px',
      36:'36px',
      30:'30px',
      20:'20px',
      15:'15px',
      70:'70px',
      50:'50px',
      10:'10px',
      
      
    },

    
    
    screens: {
      smm: '360',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    // fontFamily: {
    //   display: ['Gilroy', 'sans-serif'],
    //   body: ['Graphik', 'sans-serif, '],

    // },
    
    colors:{
      grass:'#2ecc71',
      black_light:'#2c3e50',
      orange:'#F97316',
      black:'#000000',
      white:'#FFFFFF',
      yellow:'#f1c40f',
      bg_mobile:'./assets/hero_img.png',
      

    },
    
  },
  plugins: [],
}
