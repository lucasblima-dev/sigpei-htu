module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    process.env.NODE_ENV === 'production' ? 'cssnano' : null,
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ].filter(Boolean),
};