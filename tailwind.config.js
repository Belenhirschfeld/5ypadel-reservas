import { fileURLToPath } from 'node:url';

const here = (p) => fileURLToPath(new URL(p, import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [here('./index.html'), here('./src') + '/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: { DEFAULT: '#A6CE39', hover: '#B9E04A', soft: 'rgba(166,206,57,0.12)' },
        ink: { DEFAULT: '#0B0B0C', 2: '#141416', 3: '#1C1C1F' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
