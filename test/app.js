'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-blockstack:app', function () {
  this.enableTimeouts(false)

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


describe('generator-blockstack:webpack', function () {
  this.enableTimeouts(false)


  let generator = undefined;
  const testingDir = path.join(__dirname, "../.webpack-gen-test");

  before(async () => {
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
    const appPath = path.join(__dirname, "../webpack");
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
      'webpack.config.js',
      'firebase.json',
      'src/index.js',
      'dist/app.css',
      'dist/index.html',
      'dist/manifest.json',
      'dist/robots.txt',
      'dist/bootstrap.min.css',
      'dist/icon-192x192.png'
    ]);
  });

  it("run npm test", () => {
    // Ensure `npm test` succeeds in generated project.
    generator.spawnCommandSync("npm", ["test"]);
  });


});

describe('generator-blockstack:react', function () {
  this.enableTimeouts(false)

  let generator = undefined;

  before(async () => {

    const testingDir = path.join(__dirname, "../.react-gen-test");
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
    const appPath = path.join(__dirname, "../react");
    generator = helpers.createGenerator(appPath, [], [], {
      skipInstall: false
    });
    helpers.mockPrompt(generator, { someAnswer: true });
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
  this.enableTimeouts(false);

  let generator = undefined;

  before(async () => {

    const testingDir = path.join(__dirname, "../.vue-gen-test");
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
    const appPath = path.join(__dirname, "../vue");
    generator = helpers.createGenerator(appPath, [], [], {
      skipInstall: false
    });
    helpers.mockPrompt(generator, { someAnswer: true });
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
      'src/App.vue',
      'src/assets/styles.css',
      'src/main.js',
      'src/router.js',
      'src/userSession.js',
      'src/components/Dashboard.vue',
      'src/components/Landing.vue',
      'src/views/Home.vue',
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


