module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coregray: '#545454',
        lightgrey: '#F9FAFB',
        orange: '#FF8300',
        lawrenceprice: '#E6D308',
        blackescape: '#0000001e',
        kiwi: '#0e182a',
      },
      fontFamily: {
        redhat: ['Red Hat Display', 'sans-serif'],
        trirong: ['Trirong', 'sans-serif'],
      },
      fontSize: {
        '24px': ['1.375rem', { lineHeight: '1.75rem' }],
        '4rem': ['4rem', { lineHeight: '1' }],
      },
      height: () => ({
        '228px': '228px',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
