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

describe('generator-blockstack:webpack', function () {
  this.timeout(9000);

  before(function () {
    return helpers.run(path.join(__dirname, '../webpack'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.gitignore',
      'package.json',
      'webpack.config.js',
      'src/index.js',
      'dist/app.css',
      'dist/index.html',
      'dist/manifest.json',
      'dist/robots.txt'
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
      '.env.development',
      '.gitignore',
      'package.json',
      'README.md',
      'src/index.js',
      'src/App.js',
      'src/styles/style.css',
      'src/Signin.js',
      'src/Profile.js',
      'src/index.js',
      'src/setupProxy.js',
      'src/public/icon-192x192.png',
      'src/public/index.html',
      'src/public/manifest.json'
    ]);
  });
});
