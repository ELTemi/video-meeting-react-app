const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
require("dotenv").config();


var configFunc = function(){
    var config = {
        devtool: "source-map",
        target: 'node',
        entry: [
            'webpack-hot-middleware/client?reload=true',
            __dirname + "/src/index.js"
        ],
        output: {
            path: __dirname + "/dist",
            filename: "bundle.js",
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader",
                    exclude: [/node_modules/]
                },
                {
                    test: /\.(sass|scss|css)$/,
                    use: [
                        {
                            loader: "style-loader" // creates style nodes from JS strings
                        },
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                template: path.join(__dirname , "/public/index.html"),
                inject: "body"
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.BannerPlugin("React Twilio"),
            new ExtractTextPlugin("[name]-[hash].css")
        ]};
    if(process.env.NODE_ENV === "PROD") {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin());
        config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        }));
    }
    return config;
}();

module.exports = configFunc;
