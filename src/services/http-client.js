import axios from 'axios';
import storage from './storage';

let token = storage.get('token');

const httpFactory = axios.create({
  baseURL: 'http://homolog-dev/api'
});

const httpClient = {
  get(uri) {
    return httpFactory.get(uri);
  },
  post(uri, data) {
    return httpFactory.post(uri, data);
  },
  setAuthToken(token) {
    httpFactory.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  setInterceptor() {}
};

export default httpClient;
