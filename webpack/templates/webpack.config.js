const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '127.0.0.1',
    port: 9000,
    open: true,
    before: app => {
      // Configure manifest.json CORS headers.
      app.get('/manifest.json', (req, res, next) => {
        res.set({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'GET',
        });
        next();
      })
    }
  }
};
