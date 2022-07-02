const proxy = require("express-http-proxy");
const express = require('express'),
  path = require('path'),
  app = express(),
  bodyParser = require("body-parser"),
  port = 3070;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));

app.use(
  "/service/blibliserver",
  proxy("https://www.blibli.com", {
    proxyReqOptDecorator(proxyReqOpts) {
      proxyReqOpts.headers["Origin"] = "https://www.blibli.com";
      return proxyReqOpts;
    }
  })
)

/*app.get('/backend/search/products', (req, res) => {
  const json = req.query;
  request(`https://www.blibli.com/backend/search/products?searchTerm=${json.searchTerm}&start=${json.start}&itemPerPage=${json.itemPerPage}`,
    (err, res1, data) => {
      console.log(err, res1, data);
      res.json(res1);
    }, (error) => console.error(error));
});*/

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});