import axios from 'axios';

export const call = (json) => {
  return axios.get(`/service/blibliserver?searchTerm=${json.searchTerm}&start=${json.page}&itemPerPage=${json.itemPerPage}`);
}