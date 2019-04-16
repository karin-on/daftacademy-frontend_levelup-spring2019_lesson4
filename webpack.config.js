const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function (env) {
    const isDev = (env && env.dev) ? true : false;

    const config = {
        devtool: isDev ? 'eval-source-map' : false,
        entry: './script.js',
        output: {
            filename: 'out.js',
            path: path.resolve(__dirname, 'docs')
        },
        mode: isDev ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html'
            })
        ]
    };

    return config;
};