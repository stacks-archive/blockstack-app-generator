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
      'firebase.json',
      'requires.js',
      'server.js',
      'public/app.css',
      'public/app.js',
      'public/bootstrap.min.css',
      'public/favicon.ico',
      'public/icon-192x192.png',
      'public/index.html',
      'public/manifest.json',
      'public/robots.txt',
    ]);
  });
});

describe('generator-blockstack:react', function () {
  this.timeout(9000);

  before(function () {
    return helpers.run(path.join(__dirname, '../react'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.babelrc',
      '.gitignore',
      'package.json',
      'webpack.config.js',
      'src/index.js',
      'src/index.html',
      'src/styles/style.css',
      'src/assets/manifest.json',
      'src/images/icon-192x192.png',
      'src/components/App.jsx',
      'src/components/Profile.jsx',
      'src/components/Signin.jsx',
    ]);
  });
});
