import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://139.9.205.72'
});

export default instance;
