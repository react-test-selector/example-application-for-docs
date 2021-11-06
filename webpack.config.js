const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: false,
    entry: {
        index: "./src/index"
    },
    output: {
        path: path.join(__dirname, "docs"),
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: "babel-loader",
                include: [path.join(__dirname, "src")]
            },
            {
                test: /.css$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: {  modules: true } },
                ],
                include: [path.join(__dirname, "src")]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            title: "React test selector example application",
        })
    ],
};