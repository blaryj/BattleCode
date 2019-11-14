const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//const ace = require("ace-builds");
//require("ace-builds/webpack-resolver");


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'editor.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/'
    },
    plugins: [
        new VueLoaderPlugin(),
        // new webpack.ProvidePlugin({
        //     $: '../jquery.min.js',
        //     jQuery: '../jquery.min.js'
        // })
    ],
    module: {
        rules: [
            /*{
                test: /\.(js)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: 'assets',
                },
            },*/
            //{
            //    enforce: 'pre',
            //    test: /\.(js|vue)$/,
            //    exclude: /node_modules/,
            //    loader: 'eslint-loader'
            //},
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader'
               }
            },
            {
               test: /\.css$/,
               use: [
                   'vue-style-loader',
                   'css-loader'
               ]
            },
            {
               test: /\.scss$/,
               use: [
                   'vue-style-loader',
                   'css-loader',
                   'sass-loader'
               ]
            },
            //{
            //    test: /\.sass$/,
            //    use: [
            //        'vue-style-loader',
            //        'css-loader',
            //        'sass-loader?indentedSyntax'
            //    ]
            //},
            //{
            //    test: /\.svg$/,
            //    loader: 'vue-svg-loader'
            //},
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            }
        ]
    }
};
