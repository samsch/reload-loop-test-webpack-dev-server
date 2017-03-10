// @flow
/*eslint-env node */
var webpack = require('webpack');
var path = require('path');

const TARGET = process.env.npm_lifecycle_event;
var BUILD_DIR = path.resolve(__dirname, 'public/packed');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: {
        app: APP_DIR + '/main.js',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [],
    devServer: {
        https: true,
        port: 8082,
        proxy: {
            '/': {
                target: 'http://localhost:8080',
                secure: false,
            },
        },
        publicPath: '/packed/',
    },
};

if(TARGET === 'build' || TARGET === 'build-secondary') {
    config.plugins.push(
        (new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        })),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        })
    );
}

module.exports = config;
