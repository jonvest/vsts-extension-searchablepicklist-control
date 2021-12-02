var path = require("path");
var webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: "inline-source-map",
    devServer: {
        https: true,
        port: 3000
    },
    target: "web",
    entry: {
        multivalue: "./src/multivalue.ts"
    },
    output: {
        publicPath: "/dist/",
        filename: "src/[name].js",
        libraryTarget: "amd"
    },
    externals: [
        {
        },
        /^VSS\/.*/, /^TFS\/.*/, /^q$/
    ],
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    mode: "development",
    plugins: [
        new BundleAnalyzerPlugin({
          openAnalyzer: false,
          reportFilename: "bundle-analysis.html",
          analyzerMode: "static"
        }),
        new CopyWebpackPlugin({
                patterns: [
                    { from: "./node_modules/es6-promise/dist/es6-promise.min.js", to: "libs/es6-promise.min.js" },
                    { from: "./node_modules/vss-web-extension-sdk/lib/VSS.SDK.min.js", to: "libs/VSS.SDK.min.js" },
                    { from: "./src/multivalue.html", to: "./" },
                    { from: "./img", to: "img" },
                    { from: "./readme.md", to: "readme.md" },
                    { from: "**/*.html", context: "src" }
        ]})
    ]
}