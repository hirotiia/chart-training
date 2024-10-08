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
        foreground: 'var(--foreground)',
        foregroundDark: 'var(--forground-dark)',
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
      width: {
        'custom-min': 'min(50%, 500px)',
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
      minHeight: {
        'screen-dvh': '100dvh',
      },
      backgroundImage: {
        'gradient-custom': 'var(--linear-gradient)',
        'text-gradient': 'var(--text-gradient)',
      },
      gridTemplateColumns: {
        'custom-layout':
          '1fr minmax(var(--viewport-min), var(--viewport-max)) 1fr',
      },
      gap: {
        'custom-gap':
          '0 clamp(var(--screen-gap-min), 0.591rem + 2.182vw, var(--screen-gap-max))',
      },
    },
  },
  plugins: [],
};
export default config;
