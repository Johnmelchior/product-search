const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use(
  //   createProxyMiddleware(
  //     '/backend/search/products',
  //     {
  //       target: 'https://www.blibli.com',
  //       changeOrigin: true,
  //     }
  //   )
  // );
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../', 'build', 'index.html'));
  })
};