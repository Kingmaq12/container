const autoprefixer = require('autoprefixer');
const postCssImport = require('postcss-import');
const postNested = require('postcss-nested');

module.exports = {
    plugins: [postCssImport, autoprefixer, postNested, 'postcss-preset-env'],
};
