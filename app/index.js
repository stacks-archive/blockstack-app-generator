'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Blockstack') + ' app generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Are you ready to build a Blockstack app?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer
      this.props = props;
    }.bind(this));
  },

  writing: {
    configs: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('requires.js'),
        this.destinationPath('requires.js')
      );
      this.fs.copy(
        this.templatePath('firebase.json'),
        this.destinationPath('firebase.json')
      );
    },
    server: function () {
      this.fs.copy(
        this.templatePath('server.js'),
        this.destinationPath('server.js')
      );
    },
    styles: function () {
      this.fs.copy(
        this.templatePath('public/app.css'),
        this.destinationPath('public/app.css')
      );
      this.fs.copy(
        this.templatePath('public/bootstrap.min.css'),
        this.destinationPath('public/bootstrap.min.css')
      );
    },
    scripts: function () {
      this.fs.copy(
        this.templatePath('public/app.js'),
        this.destinationPath('public/app.js')
      );
    },
    images: function () {
      this.fs.copy(
        this.templatePath('public/icon-192x192.png'),
        this.destinationPath('public/icon-192x192.png')
      )
    },
    html: function () {
      this.fs.copy(
        this.templatePath('public/index.html'),
        this.destinationPath('public/index.html')
      );
    },
    publicExtras: function () {
      this.fs.copy(
        this.templatePath('public/robots.txt'),
        this.destinationPath('public/robots.txt')
      );
      this.fs.copy(
        this.templatePath('public/manifest.json'),
        this.destinationPath('public/manifest.json')
      );
    }
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
