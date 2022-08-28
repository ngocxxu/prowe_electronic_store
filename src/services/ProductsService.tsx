import { IProductAPI } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetAllProductHTTP = () =>
  httpClient.get<IProductAPI[]>('/products');
