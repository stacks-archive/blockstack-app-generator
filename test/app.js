'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-blockstack:app', function () {
  this.timeout(9000);

  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.editorconfig',
      '.gitignore',
      'package.json',
      'requires.js',
      'server.js',
      'public/app.css',
      'public/app.js',
      'public/index.html',
      'public/robots.txt'
    ]);
  });
});
