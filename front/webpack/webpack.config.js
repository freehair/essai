
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

require("bootstrap-sass-loader");
//require("font-awesome-webpack");

var appEntryPoint = path.join(__dirname, "..", "src", "app", "js", "index");
var bootstrapSassConfig = path.join(__dirname, '..');



module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        "font-awesome-webpack",
        "bootstrap-sass!./bootstrap-sass.config.js",
        appEntryPoint
    ],
    context: path.join(__dirname, "..", "src", "app"),
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: 'app.js',
        publicPath: '/assets/'
    },
    module: {
        noParse: /quill.js/,
        preLoaders: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules|vendor|bootstrap-sass.config.js|font-awesome.config.js/,
                loaders: ['preprocess?BACKEND_URL=http://localhost:3000/', 'babel']
            }
        ],

        loaders: [
            {test: /\.(css|scss)$/, loader: 'style-loader!css-loader!sass-loader'},
            //{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000' },
            {test: /\.png$/, loader: "url-loader?limit=10000"},
            {test: /\.jpg$/, loader: "file-loader"},
            //{exclude: /node_modules/},

            {
                test: /\.js$|\.jsx$/,
                //  exclude: /node_modules\/quill\/dist/,
                loaders: ['babel'],
                include: path.join(__dirname, '..', 'src', 'app', 'js')
            },
            //{ test: /bootstrap-sass\/assets\/\.js$/, loader: 'imports?jQuery=jquery' },


            //{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            //{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
            //{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            //{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {test: /\.html$/, loader: "html-loader"}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin("styles/main.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]/*,
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }*/
};