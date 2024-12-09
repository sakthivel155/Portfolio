/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'dropdown-mobile': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'dropdown-mobile': 'dropdown-mobile 0.3s ease-out'
      },
      colors: {  
        'lite-gray': '#f1f3f2', //body background color
        'primary-green': '#059862',
        'primary-green-lite': '#037a43',
        'filter-bar-gray' : '#e8eae9'
      },
    },
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }
  
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }
  
      'laptop': '1150px',
      // => @media (min-width: 1024px) { ... }
  
      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}