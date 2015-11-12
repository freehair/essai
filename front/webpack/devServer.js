var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var compiler = webpack(config);

// var cors = require('cors');

var app = express();

/*
app.use(cors({
  headers: ["X-Requested-With"]
}));
*/

app.use(express.static(path.join(__dirname, '..', 'src', 'app')));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, '..', 'src', 'app', 'index.html'));
  res.send();
});

app.listen(3001, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3001');
});