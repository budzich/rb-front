import axios, { AxiosResponse, AxiosError } from 'axios';
import { camelizeKeys } from 'humps';
import { TokenStorage } from './tokenStorage';

export const baseURL = process.env.REACT_APP_BACKEND_HOSTNAME || 'undefined-backend-url';

const axiosConfig = {
  baseURL,
};

const axiosInstance = axios.create(axiosConfig);

let isRefreshing = false;
const refreshSubscribers: any = [];

function subscribeTokenRefresh(cb: Function) {
  refreshSubscribers.push(cb);
}

function onRefreshed(token: string) {
  refreshSubscribers.map((cb: Function) => cb(token));
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;

    if (status === 401 && originalRequest.headers.Authorization) {
      if (!isRefreshing) {
        isRefreshing = true;
        TokenStorage.getNewToken()
          .then((newToken) => {
            isRefreshing = false;
            onRefreshed(newToken);
          })
          .catch(() => {
            TokenStorage.clear();
            return window.location.replace('/');
          });
      }

      return new Promise((resolve) => {
        subscribeTokenRefresh((token: string) => {
          // replace the expired token and retry
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(axios(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data && response.headers['content-type'] === 'application/json') {
      response.data = camelizeKeys(response.data);
    }
    return response;
  },
  (error: AxiosError) => Promise.reject(error)
);

export default axiosInstance;
