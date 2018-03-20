const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-example',
            template: 'template.html',
        }),
    ],
};
