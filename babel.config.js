/**
 * Random quirk: can't use .babelrc with laravel-mix
 * @see https://github.com/laravel-mix/laravel-mix/issues/2837#issuecomment-1030513703
 */
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3
            }
        ]
    ]
};
