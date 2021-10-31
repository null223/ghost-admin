import axios from 'axios';

const clinet = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
});

export default clinet;
