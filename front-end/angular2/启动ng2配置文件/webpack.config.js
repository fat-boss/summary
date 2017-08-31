var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './src/main.ts',
    output: {
        filename: './bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}