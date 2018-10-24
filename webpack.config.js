const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env) => {
    const mode =  env && env.dev ? 'development' : 'production';

    return {
        mode: mode,
        entry: {
            polyfill: './polyfill/polyfill.js',
            main: ['./main.js','./src/main.scss']
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    uglifyOptions: {
                        mangle: true,
                        keep_fnames: true
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ],
            splitChunks: {
                cacheGroups: {
                  commons: {
                    test: /[\\/]polyfill[\\/]/,
                    name: "polyfill",
                    chunks: "initial",
                  }
                }
              }
                  },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new CopyWebpackPlugin([ 
                {
                    from: './assets',
                    to: './assets'
                },
                {
                    from: './index.prod.html',
                    to: './index.html'
                } 
            ], {
                debug: "debug"
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        }
    }
};