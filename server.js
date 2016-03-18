'use strict';

var path = process.cwd();
var express = require('express');
var routes = require(path + '/app/routes/index.js');
var app = express();
var port = process.env.PORT || 8080;

app.use('/public', express.static(path + '/public'));
app.use('/controllers', express.static(path + '/app/controllers'));

routes(app);

app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
