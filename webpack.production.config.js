const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require("./package.json");
console.log(">>>");
module.exports = {
    entry: {
        app: path.resolve(__dirname, "./app/index.jsx"),
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + "/build/",
        filename: "js/[name].[hash].js"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "sass-loader"]
                })
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
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
            }
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
            template: __dirname + "/app/index.tmpl.html"
        }),


        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new ExtractTextPlugin({
            filename: "css/style.[hash].css",
            allChunks: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "js/style.[hash].js",
            minChunks: 1,
            minSize: Infinity,
        }),

    ],

    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 8080
    }

};