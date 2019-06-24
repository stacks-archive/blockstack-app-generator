'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const yo_env = require("yeoman-environment");
const Generator = require("yeoman-generator")

describe('generator-blockstack:app', function () {
  this.timeout(9000);

  let generator = undefined;

  before(async () => {

    const testingDir = path.join(__dirname, "../.app-gen-test");
    await new Promise((resolve, reject) => {
      helpers.testDirectory(testingDir, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });

  it("generate a project", async () => {
    const appPath = path.join(__dirname, "../app");
    generator = helpers.createGenerator(appPath, [], [], {
      skipInstall: false
    });
    helpers.mockPrompt(generator, { someAnswer: true });
    // Run yo-generator to output project.
    await Promise.resolve(generator.run());
  });

  it('creates files', function () {
    assert.file([
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

  it("run npm test", () => {
    // Ensure `npm test` succeeds in generated project.
    generator.spawnCommandSync("npm", ["test"]);
  });

});

/*
describe('generator-blockstack:webpack', function () {
  this.timeout(9000);

  before(function () {
    return helpers.run(path.join(__dirname, '../.webpack-gen-test'))
      .withPrompts({ someAnswer: true })
      .toPromise();
  });

  it("generate a project", async () => {
    const appPath = path.join(__dirname, "../webpack");
    generator = helpers.createGenerator("webpack", [appPath], undefined, {
      skipInstall: false
    });

    // Run yo-generator to output project.
    await Promise.resolve(generator.run());
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

  it("run npm test", () => {
    // Ensure `npm test` succeeds in generated project.
    generator.spawnCommandSync("npm", ["test"]);
  });
});

describe('generator-blockstack:react', function () {
  this.timeout(9000);

  before(function () {
    return helpers.run(path.join(__dirname, '../.react-gen-test'))
      .withPrompts({ someAnswer: true })
      .toPromise();
  });

  it("generate a project", async () => {
    const appPath = path.join(__dirname, "../react");
    generator = helpers.createGenerator("react", [appPath], undefined, {
      skipInstall: false
    });

    // Run yo-generator to output project.
    await Promise.resolve(generator.run());
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
      'public/icon-192x192.png',
      'public/index.html',
      'public/manifest.json'
    ]);
  });

  it("run npm test", () => {
    // Ensure `npm test` succeeds in generated project.
    generator.spawnCommandSync("npm", ["test"]);
  });
});

describe('generator-blockstack:vue', function () {
  this.timeout(9000);

  before(function () {
    return helpers.run(path.join(__dirname, '../.vue-gen-test'))
      .withPrompts({ someAnswer: true })
      .toPromise();
  });

  it("generate a project", async () => {
    const appPath = path.join(__dirname, "../vue");
    generator = helpers.createGenerator("vue", [appPath], undefined, {
      skipInstall: false
    });

    // Run yo-generator to output project.
    await Promise.resolve(generator.run());
  });

  it('creates files', function () {
    assert.file([
      'babel.config.js',
      '.gitignore',
      '.browserslistrc',
      'docker-compose.yaml',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.js',
      'firebase.json',
      '.firebaserc',
      'package.json',
      'jest.config.js',
      'postcss.config.js',
      '.postcssrc.js',
      'vue.config.js',
      'src/index.js',
      'src/App.js',
      'src/assets/style.css',
      'src/main.js',
      'src/routher.js',
      'src/userSession.js',
      'src/App.vue',
      'src/components/Dashboard.vue',
      'src/components/Landing.vue',
      'public/icon-192x192.png',
      'public/_headers',
      'public/_redirects',
      'public/avatar-placeholder.png',
      'public/logo.png',
      'public/index.html',
      'public/manifest.json'
    ]);
  });

  it("run npm test", () => {
    // Ensure `npm test` succeeds in generated project.
    generator.spawnCommandSync("npm", ["test"]);
  });

});
*/
