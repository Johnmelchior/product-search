import fetch from "node-fetch";

fetch("https://www.blibli.com/backend/search/products?searchTerm=apple&start=0&itemPerPage=2", {
  "headers": {
  },
  "method": "GET"
}).then(async(response) => {
    console.dir(await response.json());
});

