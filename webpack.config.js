const { EvalSourceMapDevToolPlugin } = require('webpack')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = ( env = {} ) => {
    return {
        mode: env.production ? 'production' : 'development',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        module: {
            rules:[
                {
                    test: /\.vue$/,
                    loader: ['vue-loader']
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.pug$/,
                    oneOf: [
                        {
                            resourceQuery: /^\?vue/,
                            use: ['pug-plain-loader']
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(env.production)
            }),
            new VueLoaderPlugin()
        ],
        output: {
            path: path.join(__dirname, 'public'),
            publicPath: '/'
        },
        devtool: env.production ? false : 'cheap-module-eval-source-map',
        devServer: {
            historyApiFallback: true
        }
    }
}