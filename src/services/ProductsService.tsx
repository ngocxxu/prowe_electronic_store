import { IProduct } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetAllProductHTTP = () =>
  httpClient.get<IProduct[]>('/products');

export const GetProductHTTP = (id: string) =>
  httpClient.get<IProduct>(`/products/${id}`);
