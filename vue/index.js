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
      message: 'Are you ready to build a Blockstack app in Vue.JS?',
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
        this.templatePath('_headers'),
        this.destinationPath('_headers')
      );
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
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
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('postcssrc.js'),
        this.destinationPath('.postcssrc.js')
      );
      this.fs.copy(
        this.templatePath('config/dev.env.js'),
        this.destinationPath('config/dev.env.js')
      );
      this.fs.copy(
        this.templatePath('config/index.js'),
        this.destinationPath('config/index.js')
      );
      this.fs.copy(
        this.templatePath('config/prod.env.js'),
        this.destinationPath('config/prod.env.js')
      );
      this.fs.copy(
        this.templatePath('config/test.env.js'),
        this.destinationPath('config/test.env.js')
      );
      this.fs.copy(
        this.templatePath('build/build.js'),
        this.destinationPath('build/build.js')
      );
      this.fs.copy(
        this.templatePath('build/check-versions.js'),
        this.destinationPath('build/check-versions.js')
      );
      this.fs.copy(
        this.templatePath('build/dev-client.js'),
        this.destinationPath('build/dev-client.js')
      );
      this.fs.copy(
        this.templatePath('build/dev-server.js'),
        this.destinationPath('build/dev-server.js')
      );
      this.fs.copy(
        this.templatePath('build/utils.js'),
        this.destinationPath('build/utils.js')
      );
      this.fs.copy(
        this.templatePath('build/vue-loader.conf.js'),
        this.destinationPath('build/vue-loader.conf.js')
      );
      this.fs.copy(
        this.templatePath('build/webpack.base.js'),
        this.destinationPath('build/webpack.base.js')
      );
      this.fs.copy(
        this.templatePath('build/webpack.dev.js'),
        this.destinationPath('build/webpack.dev.js')
      );
      this.fs.copy(
        this.templatePath('build/webpack.prod.js'),
        this.destinationPath('build/webpack.prod.js')
      );
      this.fs.copy(
        this.templatePath('build/webpack.test.js'),
        this.destinationPath('build/webpack.test.js')
      );
    },
    components: function () {
      this.fs.copy(
        this.templatePath('src/App.vue'),
        this.destinationPath('src/App.vue')
      );
      this.fs.copy(
        this.templatePath('src/components/Profile.vue'),
        this.destinationPath('src/components/Profile.vue')
      );
      this.fs.copy(
        this.templatePath('src/components/Signin.vue'),
        this.destinationPath('src/components/Signin.vue')
      );
    },
    styles: function () {
      this.fs.copy(
        this.templatePath('src/assets/style.css'),
        this.destinationPath('src/assets/style.css')
      );
    },
    scripts: function () {
      this.fs.copy(
        this.templatePath('src/main.js'),
        this.destinationPath('src/main.js')
      );
      this.fs.copy(
        this.templatePath('src/router/index.js'),
        this.destinationPath('src/router/index.js')
      );
    },
    images: function () {
      this.fs.copy(
        this.templatePath('src/assets/icon-192x192.png'),
        this.destinationPath('src/assets/icon-192x192.png')
      )
    },
    html: function () {
      this.fs.copy(
        this.templatePath('index.html'),
        this.destinationPath('index.html')
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
