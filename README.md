# Blockstack App Generator [![CircleCI][circleci-image]][circleci-url] [![NPM version][npm-image]][npm-url] [![Slack][slack-image]][slack-url]

## Installation

1. If not already installed, install [node.js](https://nodejs.org/)
2. Install [Yeoman](http://yeoman.io) and the blockstack app generator using [npm](https://www.npmjs.com/

    ```bash
    npm install -g yo generator-blockstack
    ```

3. Create a new directory and `cd` into it:

    ```bash
    mkdir hello-blockstack
    cd hello-blockstack
    ```

4. Generate a Blockstack app, you can specify the framework.

    | Framework | Use this command to install |
    |------------------|-----------------------------|
    | Plain Javascript | `yo blockstack` |
    | Webpack | `yo blockstack:webpack` |
    | React | `yo blockstack:react` |
    | Vue | `yo blockstack:vue` |

5. Start the development server:

    ```bash
    npm run start
    ```

## Testing the generator

The single tests works for all generators:


```bash
npm run test
```

This command will generate the four variants of Blockstack apps in folders called `.app-gen-test`,
`.webpack-gen-test`, `.react-gen-test`, and `.vue-gen-test`. The test asserts that all expected files were
actually created. It also runs the `npm run test` command within each app. F

or the
React, Webpack, and Vue generators, `npm run test` currently builds the app, but that command can be
changed. (For a React app, the typical test command is `react-scripts test`.)

## License

MIT © [Blockstack](https://blockstack.com)


[npm-image]: https://img.shields.io/npm/v/generator-blockstack.svg
[npm-url]: https://www.npmjs.com/package/generator-blockstack
[circleci-image]: https://circleci.com/gh/blockstack/blockstack-app-generator.svg?style=shield&circle-token=:circle-token
[circleci-url]: https://circleci.com/gh/blockstack/blockstack-app-generator/tree/master
[slack-image]: http://slack.blockstack.org/badge.svg
[slack-url]: http://slack.blockstack.org/
