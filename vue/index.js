'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var copy = function(context, template, destination) {
  context.fs.copy(
    context.templatePath(template),
    context.destinationPath(destination)
  );
}

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Blockstack') + ' app generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Are you ready to build a Blockstack app with Vue?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer
      this.props = props;
    }.bind(this));
  },

  writing: {
    configs: function () {
      copy(this, '_package.json','package.json');
      copy(this, 'babelrc','.babelrc');
      copy(this, 'gitignore','.gitignore');
      copy(this, 'build', 'build')
      copy(this, 'config', 'config')
    },
    components: function () {
      copy(this, 'src/components','src/components');
      copy(this, 'src/App.vue', 'src/App.vue');
    },
    styles: function () {
      copy(this, 'src/assets/sass', 'src/assets/sass');
    },
    scripts: function () {
      copy(this, 'src/main.js', 'src/main.js');
    },
    images: function () {
      copy(this, 'static/avatar-placeholder.png', 'static/avatar-placeholder.png');
      copy(this, 'static/logo.png', 'static/logo.png');
    },
    html: function () {
      copy(this, 'index.html', 'index.html');
    },
    assets: function () {
      copy(this, 'static/manifest.json', 'static/manifest.json');
    }
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
