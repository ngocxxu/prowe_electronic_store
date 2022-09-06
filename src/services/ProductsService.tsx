import { IProductAPI } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetAllProductHTTP = () =>
  httpClient.get<IProductAPI[]>('/products');

export const GetProductHTTP = (id: string) =>
  httpClient.get<IProductAPI>(`/products/${id}`);
