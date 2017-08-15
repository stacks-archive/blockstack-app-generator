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
      message: 'Are you ready to build a Blockstack app in React?',
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
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
    },
    components: function () {
      this.fs.copy(
        this.templatePath('src/components/App.jsx'),
        this.destinationPath('src/components/App.jsx')
      );
      this.fs.copy(
        this.templatePath('src/components/Profile.jsx'),
        this.destinationPath('src/components/Profile.jsx')
      );
      this.fs.copy(
        this.templatePath('src/components/Signin.jsx'),
        this.destinationPath('src/components/Signin.jsx')
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
        this.templatePath('src/styles/style.css'),
        this.destinationPath('src/styles/style.css')
      );
    },
    scripts: function () {
      this.fs.copy(
        this.templatePath('src/index.js'),
        this.destinationPath('src/index.js')
      );
    },
    images: function () {
      this.fs.copy(
        this.templatePath('src/images/icon-192x192.png'),
        this.destinationPath('src/images/icon-192x192.png')
      )
    },
    html: function () {
      this.fs.copy(
        this.templatePath('src/index.html'),
        this.destinationPath('src/index.html')
      );
    },
    assets: function () {
      this.fs.copy(
        this.templatePath('src/assets/manifest.json'),
        this.destinationPath('src/assets/manifest.json')
      );
    }
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
