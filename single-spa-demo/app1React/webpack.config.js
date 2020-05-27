const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        singleSpaEntry: './src/singleSpaEntry.js',
        store: './src/store.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'release'),
        libraryTarget: 'umd',
        library: 'reactApp',
        publicPath: 'http://localhost:9001/',
    },
    

    module: {
        rules: [
            {
                test: /\.js/,
                // use: ['babel-loader?cacheDirectory'],
                use: {
                    loader: 'babel-loader',
                    options:{
                        cacheDirectory: 'cacheDirectory',
                        plugins:["transform-runtime"]
                    },
                },

                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        // options: {
                        //     publicPath: '/app1/',
                        // }
                    }
                ]
            }
        ],
    },
    plugins:[ new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    mode: 'development',

    devtool: 'eval-source-map',
    // devtool: 'none',
    devServer: {
        port: 9001,
        host: '0.0.0.0',
        inline: true,
        historyApiFallback: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
};
