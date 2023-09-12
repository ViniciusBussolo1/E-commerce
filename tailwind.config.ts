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
      red: '#D00000',
    },
  },
  plugins: [],
}
export default config
