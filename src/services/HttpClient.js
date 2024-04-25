import axios from 'axios';
import storage from './Storage';

let token = storage.get('token');

const httpClient = axios.create({
  baseURL: 'http://homolog-dev/api'
});

httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default {
  get(uri) {
    return httpClient.get(uri);
  },
  post(uri, data) {
    return httpClient.post(uri, data);
  }
};
