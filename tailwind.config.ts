import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  /** TailwindCSSがどこで使われる？ */
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem', // おおよそ32px
      screens: {
        '3xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: 'var(--border)',
        ring: 'var(--ring)', // フォーカスが当たっている要素の周り
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navForground: 'var(--nav-forground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backdropBlur: {
        glass: 'var(--blur)',
      },
      keyframes: {
        accordionDown: {
          from: { height: '0' },
          to: { height: 'var(--accordion-height)' },
        },
        accordionUp: {
          from: { height: 'var(--accordion-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        accordionDown: 'accordionDown 0.3s ease-out',
        accordionUp: 'accordionUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
