const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env = {}) => {
    return {
        mode: env.production ? 'production' : 'development',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            extensions: ['*', '.js', '.sss', '.vue', '.json']
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test: /\.(js)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.pug$/,
                    oneOf: [
                        // this applies to `<template lang="pug">` in Vue components
                        {
                            resourceQuery: /^\?vue/,
                            use: ['pug-plain-loader']
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg|ttf|woff2|woff)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '[name].[ext]?[hash]'
                    }
                },
                {
                    test: /(\.html$|favicon)/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                },
                {
                    test: /\.(css|sss|postcss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                    ]
                }
            ]
        },
        output: {
            path: path.join(__dirname, 'build'),
            publicPath: '/build/'
        },
        // https://github.com/Tech-Nomad/wue-theme
        devServer: {
            publicPath: "/",
            https: false,
            inline: true,
            noInfo: false,
            historyApiFallback: true,
            hot: true,
            open: false,
            hotOnly: true,
            disableHostCheck: true,
            writeToDisk: true
        },
        devtool: env.production ? false : 'cheap-module-eval-source-map',
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(env.production)
            }),
            new VueLoaderPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
}