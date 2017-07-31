const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "app/index.jsx"),
    output: {
        filename: "bundle-[id]-[hash].js"
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
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
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

            }
        ]
    },


    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require("autoprefixer")({ browsers:["last 3 version"] })
                ]
            }
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "app/index.tmpl.html")
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == "dev") || "false"))
        })
    ],

    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: "0.0.0.0",
        port: 8080,
        disableHostCheck: true,
    }

};