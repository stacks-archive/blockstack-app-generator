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
      message: '(TESTING) Are you ready to build a Blockstack app in Vue.JS?',
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
        this.templatePath('babel.config.js'),
        this.destinationPath('babel.config.js')
      );
      this.fs.copy(
        this.templatePath('browserslistrc'),
        this.destinationPath('.broswerslistrc')
      );
      this.fs.copy(
        this.templatePath('docker-compose.yaml'),
        this.destinationPath('docker-compose.yaml')
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
      
    },
    components: function () {
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
    },
    styles: function () {
      this.fs.copy(
        this.templatePath('src/assets/styles.css'),
        this.destinationPath('src/assets/styles.css')
      );
    },
    scripts: function () {
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
    },
    html: function () {
      this.fs.copy(
        this.templatePath('public/index.html'),
        this.destinationPath('public/index.html')
      );
    },
    assets: function () {
      this.fs.copy(
        this.templatePath('public/manifest.json'),
        this.destinationPath('public/manifest.json')
      );
      this.fs.copy(
        this.templatePath('public/logo.png'),
        this.destinationPath('public/logo.png')
      );
      this.fs.copy(
        this.templatePath('public/avatar-placeholder.png'),
        this.destinationPath('public/avatar-placeholder.json')
      );
      this.fs.copy(
        this.templatePath('public/_headers'),
        this.destinationPath('public/_headers')
      );
      this.fs.copy(
        this.templatePath('public/_redirects'),
        this.destinationPath('public/_redirects')
      );
    }
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
