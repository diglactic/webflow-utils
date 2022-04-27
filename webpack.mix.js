const mix = require('laravel-mix');

// Isolated config file useful for PhpStorm to pick up on Webpack
// @see https://gist.github.com/nachodd/4e120492a5ddd56360e8cff9595753ae
const config = require('./webpack.config.js');
mix.webpackConfig(config);

mix.js('src/webflow-utils.js', 'dist')
    .sass('src/webflow-utils.scss', 'dist');
