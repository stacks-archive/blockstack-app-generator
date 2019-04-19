'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

class BlockstackGenerator extends Generator {
  prompting() {
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
  }

  writing() {
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
    // server
    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('server.js')
    );
    // styles
    this.fs.copy(
      this.templatePath('public/app.css'),
      this.destinationPath('public/app.css')
    );
    this.fs.copy(
      this.templatePath('public/bootstrap.min.css'),
      this.destinationPath('public/bootstrap.min.css')
    );
    // scripts
    this.fs.copy(
      this.templatePath('public/app.js'),
      this.destinationPath('public/app.js')
    );
    // images
    this.fs.copy(
      this.templatePath('public/icon-192x192.png'),
      this.destinationPath('public/icon-192x192.png')
    )
    this.fs.copy(
      this.templatePath('public/favicon.ico'),
      this.destinationPath('public/favicon.ico')
    )
    // html
    this.fs.copy(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html')
    );
    // publicExtras
    this.fs.copy(
      this.templatePath('public/robots.txt'),
      this.destinationPath('public/robots.txt')
    );
    this.fs.copy(
      this.templatePath('public/manifest.json'),
      this.destinationPath('public/manifest.json')
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
}

module.exports = BlockstackGenerator;
