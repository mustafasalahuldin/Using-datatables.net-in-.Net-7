const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    externals: {
        jquery: 'jQuery',
        bootstrap: 'bootstrap'
    }, entry: {
        app_bim360pp: "./scripts/es6/index.js"
    },
    output: {
        path: path.resolve(__dirname, "wwwroot/js"),
        filename: '[name].js',
        libraryTarget: 'var',
        // `library` determines the name of the global variable
        library: '[name]'
    },
    module: {

        rules: [{

            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                },
            }
        }]
    },

    resolve: {

        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json']

    },
    mode: "development",
    devtool: "source-map",
    plugins: [
        new WebpackNotifierPlugin(),
        new BrowserSyncPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css"
        })
    ]
};