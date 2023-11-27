/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        oswald: ['oswald', 'sans-serif']
      },
      screens: {
        'xs':'320px',
        'm':'375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'sxl': '1180px',
        '2xl': '1536px',
      },
      colors:{
        'aquamarine': '#7fffd4',
        'green-ws': '#00bb2d',
        'blue-fb': '#3b5998',
        'blue-ig': '#5F4BC6',
        'purple-ig': '#9E37B8',
        'pink-ig':'#D43089',
        'orange-ig': '#F86F2F',
        'yellow-ig': '#FED372',
        'blue-tw':'#1DA1F2',
        'gray-gm':'#4B4B4B',
        'gray-hvr': '#a6a2a2',
        'orange-light': '#FF5E01',
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}