/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#181818',
        orange_light: '#FDF3EB',
        orange10: '#FE5200',
        white: '#F2F2F2',
      },
      screens: {
        fd: [{ max: '320px' }],
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Jost': ['Jost', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'body': ['"Open Sans"'],



      }
    },
  },
  plugins: [],
}