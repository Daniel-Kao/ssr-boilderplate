import axios from 'axios';

const instance = axios.create({
  baseURL: '/'
});

export default instance;

instance.interceptors.response.use(function(res) {
  console.log(res);
  return res;
});
