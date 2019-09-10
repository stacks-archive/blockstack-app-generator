'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

class BlockstackVueGenerator extends Generator {

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }

  prompting() {

  }

  writing() {
    //configs
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('babel.config.js'),
      this.destinationPath('babel.config.js')
    );
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('eslintignore'),
      this.destinationPath('.eslintignore')
    );
    this.fs.copy(
      this.templatePath('eslintrc.js'),
      this.destinationPath('.eslintrc.js')
    );
    this.fs.copy(
      this.templatePath('firebase.json'),
      this.destinationPath('firebase.json')
    );
    this.fs.copy(
      this.templatePath('firebaserc'),
      this.destinationPath('.firebaserc')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('jest.config.js'),
      this.destinationPath('jest.config.js')
    );
    this.fs.copy(
      this.templatePath('postcss.config.js'),
      this.destinationPath('postcss.config.js')
    );
    this.fs.copy(
      this.templatePath('postcssrc.js'),
      this.destinationPath('.postcssrc.js')
    );


    this.fs.copy(
      this.templatePath('src/App.vue'),
      this.destinationPath('src/App.vue')
    );
    this.fs.copy(
      this.templatePath('src/components/Dashboard.vue'),
      this.destinationPath('src/components/Dashboard.vue')
    );
    this.fs.copy(
      this.templatePath('src/components/Landing.vue'),
      this.destinationPath('src/components/Landing.vue')
    );
    this.fs.copy(
      this.templatePath('src/views/Home.vue'),
      this.destinationPath('src/views/Home.vue')
    );

    this.fs.copy(
      this.templatePath('src/assets/styles.css'),
      this.destinationPath('src/assets/styles.css')
    );

    this.fs.copy(
      this.templatePath('src/main.js'),
      this.destinationPath('src/main.js')
    );
    this.fs.copy(
      this.templatePath('src/router.js'),
      this.destinationPath('src/router.js')
    );
    this.fs.copy(
      this.templatePath('src/userSession.js'),
      this.destinationPath('src/userSession.js')
    );

    this.fs.copy(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html')
    );

    this.fs.copy(
      this.templatePath('public/manifest.json'),
      this.destinationPath('public/manifest.json')
    );
    this.fs.copy(
      this.templatePath('public/favicon.ico'),
      this.destinationPath('public/favicon.ico')
    );
    this.fs.copy(
      this.templatePath('public/white-logo.svg'),
      this.destinationPath('public/white-logo.svg')
    );
    this.fs.copy(
      this.templatePath('public/avatar-placeholder.png'),
      this.destinationPath('public/avatar-placeholder.png')
    );
    this.fs.copy(
      this.templatePath('public/_headers'),
      this.destinationPath('public/_headers')
    );
    this.fs.copy(
      this.templatePath('public/_redirects'),
      this.destinationPath('public/_redirects')
    );
    this.fs.copy(
      this.templatePath('vue.config.js'),
      this.destinationPath('vue.config.js')
    );
  }


  install() {
    this.installDependencies({
      bower: false
    });
  }
};

module.exports = BlockstackVueGenerator;
