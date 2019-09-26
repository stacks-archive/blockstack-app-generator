'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

class BlockstackWebpackGenerator extends Generator {

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }

  prompting() {

  }

  writing() {
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('netlify.toml'),
      this.destinationPath('netlify.toml')
    );
    this.fs.copy(
      this.templatePath('firebase.json'),
      this.destinationPath('firebase.json')
    );
    this.fs.copy(
      this.templatePath('amplify.yml'),
      this.destinationPath('amplify.yml')
    );
    // styles
    this.fs.copy(
      this.templatePath('dist/app.css'),
      this.destinationPath('dist/app.css')
    );
    this.fs.copy(
      this.templatePath('dist/bootstrap.min.css'),
      this.destinationPath('dist/bootstrap.min.css')
    );
    // images
    this.fs.copy(
      this.templatePath('dist/avatar-placeholder.png'),
      this.destinationPath('dist/avatar-placeholder.png')
    )
    // html
    this.fs.copy(
      this.templatePath('dist/index.html'),
      this.destinationPath('dist/index.html')
    );
    // publicExtras
    this.fs.copy(
      this.templatePath('dist/robots.txt'),
      this.destinationPath('dist/robots.txt')
    );
    this.fs.copy(
      this.templatePath('dist/manifest.json'),
      this.destinationPath('dist/manifest.json')
    );
    this.fs.copy(
      this.templatePath('dist/favicon.ico'),
      this.destinationPath('dist/favicon.ico')
    );
    this.fs.copy(
      this.templatePath('dist/white-logo.svg'),
      this.destinationPath('dist/white-logo.svg')
    );
    // scripts
    this.fs.copy(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js')
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
}

module.exports = BlockstackWebpackGenerator;
