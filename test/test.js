'use strict';
require('should');
var path = require('path');
var fs = require('fs');
describe('All the things', function() {
  it('Should throw an error when no .htaccess is found', function(done) {
    require('../index')(__dirname, function(err) {
      err.should.not.equal(undefined);
      done();
    });
  });
  it('Should do as expected when given a .htaccess file', function(done) {
    // First store the initial version of the file.
    var file = fs.readFileSync(path.join(__dirname, 'files', '.htaccess'), 'utf8');
    require('../index')(path.join(__dirname, 'files'), function(err) {
      // Check that it have changed.
      var newFile = fs.readFileSync(path.join(__dirname, 'files', '.htaccess'), 'utf8');
      var expectedFile = fs.readFileSync(path.join(__dirname, 'files', 'htaccess_expected'), 'utf8');
      newFile.should.not.equal(file);
      newFile.should.equal(expectedFile);
      // And then write back what we had.
      fs.writeFileSync(path.join(__dirname, 'files', '.htaccess'), file);
      done(err);
    });
  });
});
