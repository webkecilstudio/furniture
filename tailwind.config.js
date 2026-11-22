/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          red: '#EF4444',
          'red-hover': '#DC2626',
          'red-active': '#B91C1C',
          white: '#FAFAFA',
          surface: '#F5F5F5',
          'surface-raised': '#E5E5E5',
          'text-primary': '#0A0A0A',
          'text-secondary': '#525252',
          'text-tertiary': '#A3A3A3',
          'border-subtle': '#E5E5E5',
          'border-medium': '#D4D4D4',
          'border-strong': '#0A0A0A',
          success: '#16A34A',
          warning: '#CA8A04',
          error: '#EF4444'
        }
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Impact', '"Arial Black"', 'sans-serif'],
        sans: ['"Work Sans"', '-apple-system', '"Segoe UI"', 'Helvetica', 'sans-serif'],
        mono: ['"Space Mono"', '"Courier New"', 'Consolas', 'monospace']
      },
      borderRadius: {
        none: '0px',
        full: '9999px'
      },
      boxShadow: {
        none: 'none'
      }
    },
  },
  plugins: [],
}
