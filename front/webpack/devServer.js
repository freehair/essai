var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

require("babel/register");

var app = express();
var http = require('http');
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = config.output.publicPath;

// We point to our static assets
app.use(express.static(publicPath));

console.log("__dirname : ",__dirname)


app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../src/app/index.html'));
   //res.send();
});

/*app.get('*', function(req, res) {
    res.send('404 - Page Not Found');
})*/

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});