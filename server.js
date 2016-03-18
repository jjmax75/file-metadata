'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();
var path = process.cwd();

app.use('/public', express.static(path + '/public'));
app.use('/controllers', express.static(path + '/app/controllers'));

routes(app);

app.listen(8080, function () {
  console.log('Node.js listening on port 8080...');
});
