const express = require('express'),
  path = require('path'),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  request = require('request'),
  port = 3070;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());

app.use(function (req, res, next) {
  addHeader(req, res);
  next();
});

function addHeader(req, res) {
  var origin = req.headers.origin;
  if (!origin) {
    origin = "*";
  }
  res.header("Access-Control-Allow-Origin", origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, " +
      "Last-Modified, Cache-Control, Expires, Content-Type, Content-Language, Cache-Control, X-E4M-With,X_FILENAME"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Cibtebt-TYpe", "application/json");
}

app.get('/backend/search/products', cors(), (req, res) => {
  const json = req.query;
  request(`https://www.blibli.com/backend/search/products?searchTerm=${json.searchTerm}&start=${json.start}&itemPerPage=${json.itemPerPage}`,
    (err, res1, data) => {
      console.log(err, res1, data);
      res.json(res1);
    }, (error) => console.error(error));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});