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
        'gradient-cover': 'linear-gradient(0deg, rgba(0,0,0,.6) 70.15%, rgba(0, 0, 0, 0) 100%)',
        'gradient-cover-right': 'linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)',
        'no-gradient': 'none',
      },
    },
  },
  plugins: [],
}
