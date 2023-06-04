/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-cover': 'linear-gradient(0deg, #000000 -40.85%, rgba(0, 0, 0, 0) 100%);',
        'gradient-shop': ' linear-gradient(81.55deg, #99060D 3.18%, rgba(48, 1, 18, 0.483051) 28.35%, rgba(12, 0, 19, 0.305085) 44.45%, rgba(0, 0, 0, 0) 62.58%);'
      },
    },
  },
  plugins: [],
}
