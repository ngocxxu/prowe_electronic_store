import { TypeGetAllProductsQueryAction } from 'src/redux/consts/consts';
import { IProduct } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetAllProductHTTP = () => httpClient.get<IProduct[]>('/products');

export const GetAllProductByQueryHTTP = (
  sortQuery: TypeGetAllProductsQueryAction['payload']
) => {
  const searchParams = new URLSearchParams(sortQuery);
  httpClient.get<IProduct[]>(`/products?${searchParams}`);
};

export const GetProductHTTP = (id: string) =>
  httpClient.get<IProduct>(`/products/${id}`);
