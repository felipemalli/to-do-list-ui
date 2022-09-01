import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptor';

const API = axios.create({
  baseURL: 'https://to-do-list-fvm.herokuapp.com'
});

API.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { API };
