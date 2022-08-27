import { httpClient } from './settings';

export const GetAllProductHTTP = () => httpClient.get('/products');
