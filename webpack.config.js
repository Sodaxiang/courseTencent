const { resolve } = require('path');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = {
    // mode: 'development',
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: resolve(__dirname, './src/js/index.js'),
        list: resolve(__dirname, './src/js/list.js')
    },
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [resolve(__dirname, 'node_modules')]
        }, {
            test: /\.tpl$/,
            loader: 'ejs-loader'
        }, {
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [autoprefixer('last 5 versions')]
                        }
                    }
                }
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader', 
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [autoprefixer('last 5 versions')]
                        }
                    }
                },
                'sass-loader'
            ]
        }, {
            test:/\.(png|jpg|jpeg|gif|ico|woff|eot|svg|ttf)$/i,
            loader:[
                'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]'
            ]
        }]
    },
    plugins: [
        new UglifyWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin({}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve(__dirname, './src/template/index.html'),
            title: '腾讯课堂——首页',
            chunks: ['index'],
            chunksSortMode: 'manual',
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'list.html',
            template: resolve(__dirname, './src/template/list.html'),
            title: '腾讯课堂——列表页',
            chunks: ['list'],
            chunksSortMode: 'manual',
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],
    devServer: {
        watchOptions: {
            ignored: /node_modules/
        },
        open: true,
        host: 'localhost',
        port: 3201
    }

}