import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      black: '#040404',
      blackGray: '#2C2C2C0',
      blackOrange: '#0D0800',
      orange: '#FF9900',
      whiteOrange: '#FFF0DA',
      grayText: {
        400: '#C8C8C8',
        800: '#4B4B4B',
      },
      white: '#FAECE3',
      skinColor: '#F7AD86',
      pink: '#F2C6C8',
      red: '#BB0300',
      grayCalcaMode: '#B3A6AC',
      darkBrown: '#5D483F',
      blue: '#2D49AF',
      darkRed: '#900606',
      lightGreen: '#9DAD9B',
      darkGreen: '#074006',
      darkPink: '#D512AA',
      brown: '#8D6D51',
      grayCollege: '#867975',
    },
  },
  plugins: [],
}
export default config
