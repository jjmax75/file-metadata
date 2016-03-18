'use strict';

function FileHandler() {

  this.getFileSize = function(req, res) {

    var size = req.file.size;

    res.end(size.toString());

  };
}

module.exports = FileHandler;
