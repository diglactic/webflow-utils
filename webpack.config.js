const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    plugins: [
        // Disable chunking
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
        // Inject .env file
        new Dotenv
    ]
};
