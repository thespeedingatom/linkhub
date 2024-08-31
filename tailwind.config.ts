import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        'display-1': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'display-2': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'h1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'h2': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'h3': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body': ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};

export default config;