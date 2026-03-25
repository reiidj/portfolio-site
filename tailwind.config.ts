import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        mono: ['DM Mono', 'Courier New', 'monospace'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      letterSpacing: {
        widest: '0.2em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

export default config
