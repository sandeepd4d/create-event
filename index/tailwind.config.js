/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.js',
    '!./node_modules/**/*'
  ],
  theme: {
    extend: {
      maxWidth: {
        'cxl': '960px',
      },
      colors:{
        'brown':'#490000',
        // 'brown': {
        //   '50':'#fff0f0',
        //   '100':'#ffdddd',
        //   '200':'#ffc1c1',
        //   '300':'#ff9696',
        //   '400':'#ff5a5a',
        //   '500':'#ff2727',
        //   '600':'#fb0707',
        //   '700':'#d40101',
        //   '800':'#ae0606',
        //   '900':'#900c0c',
        //   '950':'#490000',
        // },
        'orange':'#c53c00',
      },
      backgroundImage: {
        'textarea': "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
      },
      boxShadow: {
        'sliderDot': '0 1px 4px rgba(0,0,0,.1)',
      },
      backgroundImage: {
        'moving-radial': 'radial-gradient(circle, rgba(197,60,0,0.2) 5%, rgba(197,60,0,0.06) 20%)',
      },
      keyframes: {
        move: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'moving-bg': 'move 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}