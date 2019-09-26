'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

class BlockstackGenerator extends Generator {

  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    this.option('react', {
      description: 'Generate a React project template',
      type: Boolean
    });
    this.option('plain', {
      description: 'Generate a plain Javascript project template',
      type: Boolean
    });
    this.option('vue', {
      description: 'Generate a Vue project template',
      type: Boolean
    });
  }

  async prompting() {
    if (this.options.react) {
      this.outputAppType = 'react';
    } else if (this.options.plain) {
      this.outputAppType = 'plain';
    } else if (this.options.vue) {
      this.outputAppType = 'vue';
    } else {

      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the ' + chalk.red('Blockstack') + ' app generator!'
      ));

      const answers = await this.prompt([{
        type: 'rawlist',
        name: 'generator_type',
        message: 'What type of project scaffolding do you want to generate?',
        suffix: ` ${chalk.dim('(Use arrow keys to select and press ENTER)')}`,
        choices: [
          { name: 'React', value: 'react' },
          { name: 'Plain JavaScript', value: 'plain' },
          { name: 'Vue', value: 'vue' }
        ]
      }]);
      this.outputAppType = answers['generator_type'];
    }
  }

  main() {
    if (this.outputAppType === 'react') {
      return this.composeWith(require.resolve('../react'));
    } else if (this.outputAppType === 'plain') {
      return this.composeWith(require.resolve('../webpack'));
    } else if (this.outputAppType === 'vue') {
      return this.composeWith(require.resolve('../vue'));
    } else {
      throw new Error(`Unexpected app output type selected: ${this.outputAppType}`);
    }
  }

}

module.exports = BlockstackGenerator;
