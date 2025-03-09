/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'mh-black': '#292929',
        'mh-darkgrey': '#2F2F2F',
        'mh-grey': '#646464',
        'mh-yellow': '#FFD600',
        'mh-yellow-light': '#FFF9DA',
        'mh-yellow-extra-light': '#FFFBE5',
        'mh-yellow-extra-extra-light': '#FFFDF2',
      },
      fontFamily: {
        default: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        xxs: ['14px', '1.3'],
        'xxs-desktop': ['20px', '1.3'],
        xs: ['16px', '1.6'],
        'xxs-desktop': ['24px', '1.6'],
        s: ['16px', '1.3'],
        's-desktop': ['24px', '1.3'],
        m: ['24px', '1.3'],
        'm-desktop': ['48px', '1.3'],
        l: ['28px', '1.3'],
        'l-desktop': ['80px', '1.3'],
        xl: ['32px', '1.3'],
        'xl-desktop': ['110px', '1.3'],
      },
      maxWidth: {
        wrapper: '1512px',
      },
      animation: {
        marquee: 'marquee 8s linear infinite',
        marquee2: 'marquee2 8s linear infinite',
        lineChanging: 'lineChanging 4.4s linear 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        lineChanging: {
          '0%': { transform: 'translateY(0)' },
          '15%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-100%)' },
          '40%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(-200%)' },
          '70%': { transform: 'translateY(-200%)' },
          '80%': { transform: 'translateY(-300%)' },
          '100%': { transform: 'translateY(-300%)' },
        },
      },
      screens: {
        '3xl': '120rem',
      },
    },
  },
  plugins: [],
};
