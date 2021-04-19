module.exports = {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line global-require
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
