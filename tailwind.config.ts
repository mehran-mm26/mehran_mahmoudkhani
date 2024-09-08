import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    container: {
      // you can configure the container to be centered
      center: true,
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '580px',
          },
          '@screen md': {
            maxWidth: '640px',
          },
          '@screen lg': {
            maxWidth: '768px',
          },
          '@screen xl': {
            maxWidth: '992px',
          },
          '@screen 2xl': {
            maxWidth: '1280px',
          },
        },
      });
    },
  ],
 
};
export default config;
