'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the primo ' + chalk.red('generator-blockstack') + ' generator!'
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
    packageJSON: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
    },
    editorConfig: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
    },
    gitignore: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },
    requiresJS: function () {
      this.fs.copy(
        this.templatePath('requires.js'),
        this.destinationPath('requires.js')
      );
    },
    serverJS: function () {
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
    },
    scripts: function () {
      this.fs.copy(
        this.templatePath('public/app.js'),
        this.destinationPath('public/app.js')
      );
    },
    html: function () {
      this.fs.copy(
        this.templatePath('public/index.html'),
        this.destinationPath('public/index.html')
      );
    },
    misc: function () {
      this.fs.copy(
        this.templatePath('public/robots.txt'),
        this.destinationPath('public/robots.txt')
      );
    }
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
