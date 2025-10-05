import tailwindcssPostcss from '@tailwindcss/postcss';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

export default {
  plugins: [
    tailwindcssPostcss,
    postcssPresetEnv,

    process.env.NODE_ENV === 'production' ? cssnano : null,
  ].filter(Boolean),
};