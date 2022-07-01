import axios from 'axios';

export const call = (json) => {
  return axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${json.searchTerm}&start=${json.page}&itemPerPage=${json.itemPerPage}`, {
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*"
    }
  });
}