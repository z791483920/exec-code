const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		singleSpaEntry: 'src/singleSpaEntry.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'release'),
        libraryTarget: 'umd',
        library: 'app2',
		publicPath: 'http://localhost:9002/',
	},
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    plugins:["transform-runtime"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
	resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [
            ".js", ".vue"
        ],
		modules: [
			__dirname,
			'node_modules',
		],
	},
    mode: 'development',
	devtool: 'none',
	externals: [
	],
	plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 9002,
        host: '0.0.0.0',
        inline: true,
        historyApiFallback: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
};
