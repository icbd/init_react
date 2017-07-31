const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require("./package.json");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, "app/index.jsx"),
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + "/build/",
        filename: "js/[name].[chunkhash].js"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "sass-loader"]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp|ico)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 5000
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: 5000
                        }
                    }
                ]
            },
        ]
    },


    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == "dev") || "false"))
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require("autoprefixer")({browsers: ["last 3 version"]})
                ]
            }
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "app/index.tmpl.html"),
        }),


        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new ExtractTextPlugin({
            filename: "css/style.[contenthash].css",
            allChunks: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "js/[name].[chunkhash].js",
            minSize: Infinity,
        }),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "assets"),
                to: 'assets',
                ignore: ['.*']
            }
        ]),
    ],
};