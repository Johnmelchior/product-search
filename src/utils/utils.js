import axios from 'axios';

export const call = (json) => {
  return axios.get(`/backend/search/products?searchTerm=${json.searchTerm}&start=${json.page}&itemPerPage=${json.itemPerPage}`);
}