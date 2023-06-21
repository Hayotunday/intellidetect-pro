/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        publicSans: "'Public Sans', sans-serif"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "black-screen": "#292929",
        "blue-one": "#0575E6",
        "blue-two": "#02298A",
        "blue-three": "#021B79",
        "brown-orange": "#C93000",
        "blue-dark": "#072A6C",
        "green-dark": "#04724D",
        "grey": "#737780",
        "blue-light": "#E7E8FC",
        "white-screen": "#FFFCF2",
        "white-smoke": "#FAFAFA",
      },
      spacing: {
        100: '25rem',
        125: '500px',
        150: '600px'
      }
    },
  },
  plugins: [],
}
