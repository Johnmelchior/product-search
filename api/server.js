const proxy = require("express-http-proxy");
const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require('express'),
  path = require('path'),
  app = express(),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 3070;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));

/*app.use(
  "/service/blibliserver",
  proxy("https://www.blibli.com", {
    proxyReqOptDecorator(proxyReqOpts) {
      proxyReqOpts.headers["Origin"] = "https://www.blibli.com";
      return proxyReqOpts;
    },
    proxyErrorHandler: function(err, res, next) {
      console.log("Proxy err", err);
      next(err);
    }
  })
)*/

/*app.get('/backend/search/products', (req, res) => {
  const json = req.query;
  request(`https://www.blibli.com/backend/search/products?searchTerm=${json.searchTerm}&start=${json.start}&itemPerPage=${json.itemPerPage}`,
    (err, res1, data) => {
      console.log(err, res1, data);
      res.json(res1);
    }, (error) => console.error(error));
});*/

app.use(
  createProxyMiddleware(
    '/service/blibliserver',
    {
      target: 'https://www.blibli.com',
      on : {
        proxyReq: (proxyReq, req, res) => {
          proxyReq.setHeader('Origin', 'https://www.blibli.com')
          proxyReq.setHeader('Host', 'localhost')
          proxyReq.setHeader('Referer', 'http://localhost')
        },
      },
      pathRewrite: {
        '^/service/blibliserver': '', // rewrite path
      },
      changeOrigin: true,
      secure: false
    }
  )
);

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});