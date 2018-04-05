'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-blockstack:vue', function () {
  this.timeout(9000);

  before(function () {
    return helpers.run(path.join(__dirname, '../vue'))
      .withPrompts({ someAnswer: true })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.babelrc',
      '.gitignore',
      'package.json',
      'index.html',
      'README.md',
      '.eslintrc.js',
      '.editorconfig',
      '.eslintignore',
      'src/main.js',
      'src/assets/sass/_variables.scss',
      'src/assets/sass/app.scss',
      'static/manifest.json',
      'static/logo.png',
      'static/avatar-placeholder.png',
      'src/App.vue',
      'src/components/Dashboard.vue',
      'src/components/Landing.vue',
      'build/build.js',
      'build/check-versions.js',
      'build/dev-client.js',
      'build/dev-server.js',
      'build/utils.js',
      'build/vue-loader.conf.js',
      'build/webpack.base.conf.js',
      'build/webpack.dev.conf.js',
      'build/webpack.prod.conf.js',
      'config/dev.env.js',
      'config/index.js',
      'config/prod.env.js',
    ]);
  });
});
