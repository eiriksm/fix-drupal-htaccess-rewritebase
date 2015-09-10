'use strict';
var fs = require('fs');
var path = require('path');
var async = require('async');

function replaceText(dir, data, callback) {
  data = data.replace('# RewriteBase /', 'RewriteBase /');
  fs.writeFile(path.join(dir, '.htaccess'), data, {
    encoding: 'utf8'
  }, callback);
}

module.exports = function(dir, callback) {
  async.waterfall([
    fs.readFile.bind(fs, path.join(dir, '.htaccess'), {
      encoding: 'utf8'
    }),
    replaceText.bind(null, dir)
  ], callback);
};


