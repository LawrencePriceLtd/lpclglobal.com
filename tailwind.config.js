module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coregray: '#545454',
        lightgrey: '#F9FAFB',
        textgrey: '#B1BAC0',
        altgrey: '#E8EDF1',
        orange: '#FF8300',
        lawrenceprice: '#E6D308',
        blackescape: '#0000001e',
        kiwi: '#0e182a',
        copperblack: '#282D27',
        gray1: '#707173',
      },
      fontFamily: {
        redhat: ['Red Hat Display', 'sans-serif'],
        trirong: ['Trirong', 'sans-serif'],
      },
      fontSize: {
        '6px': ['0.375rem', { lineHeight: '1rem' }],
        '8px': ['0.5rem', { lineHeight: '1rem' }],
        '10px': ['0.625rem', { lineHeight: '1rem' }],
        '24px': ['1.375rem', { lineHeight: '1.75rem' }],
        '4rem': ['4rem', { lineHeight: '1' }],
      },
      height: () => ({
        '210px': '210px',
        '228px': '228px',
        '250px': '250px',
        '380px': '380px',
        '450px': '450px',
        '455px': '455px',
        '700px': '700px',
        '900px': '900px',
        '950px': '950px',
      }),
      width: () => ({
        '300px': '300px',
        '386px': '386px',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
