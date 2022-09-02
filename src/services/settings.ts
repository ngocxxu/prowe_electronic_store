import axios from 'axios';
// // import Commerce from '@chec/commerce.js';

export const STATUS_CODES = {
  SUCCESS: 200 | 201,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  SERVER_ERROR: 500,
};
export const DOMAIN = 'http://localhost:4030/api';
// export const ACCESSTOKEN =
// "sk_447082bbb5ffe0fefd23b4c17b264bec885c147cca6c8";

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
      'Content-Type': 'application/json',
      // "X-Authorization": ACCESSTOKEN,
      // "X-Chec-Agent": "commerce.js/v2",
      // "Chec-Version": "2021-10-06",
      // "Authorization": "Bearer " + localStorage.getItem(ACCESSTOKEN),
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
