import axios from 'axios';
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
});

httpClient.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers, //Lấy lại tất cả các giá trị header qua thuộc tính headers
      Accept: 'application/json',
      Authorization: `${
        localStorage.getItem(ACCESSTOKEN)
          ? 'Bearer ' + JSON.parse(localStorage.getItem(ACCESSTOKEN) || '')
          : ''
      }`,
      'Content-Type': 'application/json',
    };
    return config;
  },
  (errors) => {
    return Promise.reject({ errors });
  }
);

// // export default new Commerce(
// //   checAPIKey,
// //   false,
// //   http,
// // );
