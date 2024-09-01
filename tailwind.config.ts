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
      colors: {
        primary: {
          light: '#6ab7ff',
          DEFAULT: '#2196f3',
          dark: '#0069c0',
        },
        secondary: {
          light: '#ff94c2',
          DEFAULT: '#f06292',
          dark: '#ba2d65',
        },
        accent: {
          light: '#ffff8d',
          DEFAULT: '#ffeb3b',
          dark: '#c8b900',
        },
        background: {
          light: '#f5f5f5',
          dark: '#121212',
        },
        text: {
          light: '#212121',
          dark: '#ffffff',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
           400: '#cbd5e0',
           500: '#a0aec0',
           600: '#718096',
           700: '#4a5568',
           800: '#2d3748',
           900: '#1a202c',
        },
        darkgray: {
          100: '#2d3748',
          200: '#283141',
          300: '#232b3a',
          400: '#1e2533',
          500: '#191f2c',
          600: '#141925',
          700: '#0f131e',
          800: '#0a0d17',
          900: '#050710',
        },
      },
      backgroundColor: {
        'light': 'var(--color-background-light)',
        'dark': 'var(--color-background-dark)',
      },
      textColor: {
        'light': 'var(--color-text-light)',
        'dark': 'var(--color-text-dark)',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h1': ['3rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'h2': ['2.25rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'h3': ['1.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
      },
    },
  },
  plugins: [],
};

export default config;