'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

class BlockstackReactGenerator extends Generator {
  prompting() {
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
  }

  writing() {
    // configs
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('env.development'),
      this.destinationPath('.env.development')
    );
    // CORS configuration for Firebase, Netlify
    this.fs.copy(
      this.templatePath('cors/_headers'),
      this.destinationPath('cors/_headers')
    );
    this.fs.copy(
      this.templatePath('cors/_redirects'),
      this.destinationPath('cors/_redirects')
    );
    this.fs.copy(
      this.templatePath('cors/firebase.json'),
      this.destinationPath('cors/firebase.json')
    );
    // styles
    this.fs.copy(
      this.templatePath('src/styles/style.css'),
      this.destinationPath('src/styles/style.css')
    );
    // scripts
    this.fs.copy(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js')
    );
    this.fs.copy(
      this.templatePath('src/App.js'),
      this.destinationPath('src/App.js')
    );
    this.fs.copy(
      this.templatePath('src/Profile.js'),
      this.destinationPath('src/Profile.js')
    );
    this.fs.copy(
      this.templatePath('src/setupProxy.js'),
      this.destinationPath('src/setupProxy.js')
    );
    this.fs.copy(
      this.templatePath('src/Signin.js'),
      this.destinationPath('src/Signin.js')
    );
    // images, assets, and html
    this.fs.copy(
      this.templatePath('public/icon-192x192.png'),
      this.destinationPath('public/icon-192x192.png')
    )
    this.fs.copy(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html')
    );
    this.fs.copy(
      this.templatePath('public/manifest.json'),
      this.destinationPath('public/manifest.json')
    );
    // create-react-app README
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    )
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};

module.exports = BlockstackReactGenerator;
