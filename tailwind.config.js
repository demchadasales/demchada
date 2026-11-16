/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0d',
        paper: '#fbfbfd',
        mist: '#f5f5f7',
        graphite: '#1d1d1f',
        steel: '#86868b',
        hairline: '#d2d2d7',
        accent: {
          blue: '#0a6cff',
          violet: '#7b5cff',
          coral: '#ff5a5f',
          mint: '#00c7a0',
          amber: '#ff9f0a',
        },
      },
      fontFamily: {
        display: ['"SF Pro Display"', '-apple-system', 'Inter', 'system-ui', 'sans-serif'],
        text: ['"SF Pro Text"', '-apple-system', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'hero-sm': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        headline: ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        shell: '1240px',
      },
      transitionTimingFunction: {
        demchada: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        fadeIn: 'fadeIn 1s ease both',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        drift: 'drift 30s linear infinite',
      },
    },
  },
  plugins: [],
}
