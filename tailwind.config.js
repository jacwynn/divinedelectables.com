/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D9534F',
        'brand-black': '#333333',
        'brand-grey': '#717171',
        'brand-bg-grey': '#FAFAFA',
        'brand-bg-white': '#FFFFFF'
      },
      fontFamily: {
        'serif': ['PT Serif', 'serif'],
        'seaweed': ['SeaweedScript', 'cursive']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
