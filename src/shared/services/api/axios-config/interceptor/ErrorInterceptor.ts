import { AxiosError } from 'axios';

export const errorInterceptor= (error: AxiosError) => {
  if (error.response?.status === 401) {
    // redirect to login
  }

  return Promise.reject(error);
};