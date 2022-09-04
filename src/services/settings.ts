import axios from 'axios';
import { RefreshTokenUserHTTP } from './UserService';
// // import Commerce from '@chec/commerce.js';

export const STATUS_CODES = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  SERVER_ERROR: 500,
};

export const ACCESSTOKEN = 'accessToken';
export const REFRESHTOKEN = 'refreshToken';

export const DOMAIN = 'http://localhost:4030/api';

// // const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;

//setup axios interceptor
export const httpClient = axios.create({
  baseURL: DOMAIN, //Domain khi request api sẽ được ghép vào với link
  timeout: 30000, //Thời gian tối đa chờ response trả về
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

httpClient.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers, //Lấy lại tất cả các giá trị header qua thuộc tính headers
      Authorization: `${
        localStorage.getItem(ACCESSTOKEN)
          ? 'Bearer ' + JSON.parse(localStorage.getItem(ACCESSTOKEN) || '')
          : ''
      }`,
    };
    return config;
  },
  async (error) => {
    return Promise.reject({ error });
  }
);

// Auto call api when accessToken expired
httpClient.interceptors.response.use(
  (resp) => resp,
  async (err) => {
    const originalConfig = err.config;
    // Access Token was expired
    if (
      originalConfig.url !== '/auth/refreshToken' &&
      err.response.status === 401
    ) {
      try {
        const { status, data } = await RefreshTokenUserHTTP({
          token: JSON.parse(localStorage.getItem(REFRESHTOKEN) || ''),
        });
        if (status === 200) {
          httpClient.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${data.accessToken}`;
          localStorage.setItem(ACCESSTOKEN, JSON.stringify(data.accessToken));
        }
        return httpClient(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    } else if (originalConfig.url === '/auth/refreshToken') {
      window.location.replace('/login/login-expiration');
      localStorage.clear();
    }
    return Promise.reject(err);
  }
);
