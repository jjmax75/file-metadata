'use strict';

var FileHandler = require(process.cwd() + '/app/controllers/fileHandler.client.js');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
// var upload = multer({ limits: { fileSize: 5000000 } });

module.exports = function (app) {

  var fileHandler = new FileHandler();

  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });

  app.post('/api/getFileSize/', upload.single('sentFile'), fileHandler.getFileSize);
};
