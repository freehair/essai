// webpack.config.js
var path = require('path');
var node_modules = path.resolve(__dirname, '../node_modules');
//console.log("node_modules :", node_modules);
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDomMin = path.resolve(node_modules, 'react/lib/ReactDOM');


var config = {
    entry: path.resolve(__dirname, '../src/app/js/index.jsx'),
    context: path.join(__dirname, "..", "src", "app"),
    output: {
        path: path.resolve(__dirname, '../build'),
        pathInfo: true,
        filename: 'app.js',
        publicPath: '/assets/'
    },
    resolve: {
        alias: {
            'react': pathToReact,
            
            'react-dom' : pathToReactDomMin
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=1&optional=runtime'
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader?outputStyle=expanded&"+
                    "includePaths[]=" + node_modules
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
        noParse: [pathToReact]
    }
};
 
module.exports = config;