import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0F172A',
          deep: '#020617',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        brand: {
          orange: '#F97316',
          orangeLight: '#FB923C',
          orangeDark: '#EA580C',
          blue: '#3B82F6',
          blueLight: '#60A5FA',
          blueDark: '#2563EB',
          green: '#10B981',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-light':
          'radial-gradient(at 0% 0%, rgba(249,115,22,0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(59,130,246,0.10) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(16,185,129,0.08) 0px, transparent 50%)',
        'mesh-dark':
          'radial-gradient(at 0% 0%, rgba(249,115,22,0.18) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(59,130,246,0.14) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(16,185,129,0.10) 0px, transparent 50%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)',
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(15,23,42,0.12), 0 10px 25px -10px rgba(15,23,42,0.08)',
        'glow-orange': '0 20px 60px -15px rgba(249,115,22,0.45), 0 0 40px rgba(249,115,22,0.15)',
        'glow-blue': '0 20px 60px -15px rgba(59,130,246,0.45), 0 0 40px rgba(59,130,246,0.15)',
        'glow-green': '0 20px 60px -15px rgba(16,185,129,0.40), 0 0 40px rgba(16,185,129,0.12)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        'float-slow': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-22px)' } },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-50px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,30px) scale(0.95)' },
        },
        'gradient-shift': { '0%,100%': { backgroundPosition: '0% center' }, '50%': { backgroundPosition: '100% center' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'spin-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'sync-pulse': { '0%': { opacity: '0', transform: 'scaleX(0)' }, '50%': { opacity: '1', transform: 'scaleX(1)' }, '100%': { opacity: '0', transform: 'scaleX(1)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        shimmer: 'shimmer 2.5s infinite',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'sync-pulse': 'sync-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
