const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/service/blibliserver',
      {
        target: 'https://www.blibli.com',
        pathRewrite: {
          '^/service/blibliserver': '', // rewrite path
        },
        changeOrigin: true,
        secure: false
      }
    )
  );
};