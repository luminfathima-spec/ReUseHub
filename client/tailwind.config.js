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
          primary: '#7655B5',
          'primary-hover': '#6544A3',
          'primary-dark': '#55368F',
          'primary-light': '#8E6ECB',
          secondary: '#A78BDF',
          'secondary-light': '#C8B6ED',
          'secondary-subtle': '#EDE7F9',
          background: '#F8F6FF',
          surface: '#FFFFFF',
          text: '#29243A',
          muted: '#77718A',
          border: '#E9E4F5',
          'border-light': '#F1EDFA',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(118, 85, 181, 0.08), 0 2px 6px -1px rgba(118, 85, 181, 0.04)',
        'soft-hover': '0 12px 28px -4px rgba(118, 85, 181, 0.15), 0 4px 12px -2px rgba(118, 85, 181, 0.08)',
        'card': '0 2px 14px 0 rgba(41, 36, 58, 0.04)',
      }
    },
  },
  plugins: [],
}

