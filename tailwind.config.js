/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'accent-red': '#ff3b3f',
        'accent-orange': '#ff9900',
      },
      boxShadow: {
        'accent': '0 4px 32px 0 rgba(255,59,63,0.25)',
        'accent-orange': '0 4px 32px 0 rgba(255,153,0,0.18)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.1s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'bounce-in': 'bounceIn 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(60px)' },
          '60%': { opacity: '1', transform: 'scale(1.05) translateY(-8px)' },
          '80%': { transform: 'scale(0.98) translateY(4px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}

