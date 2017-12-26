const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
    ],
    devServer: {
        contentBase: './docs'
    },
    module: {
         rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            ['es2015', { modules: false }],
                            'react',
                        ],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            }
        ]
    }
};