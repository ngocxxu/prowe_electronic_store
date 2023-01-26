import { TypeGetAllProductsQueryAction } from 'src/redux/consts/consts';
import { IProduct } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetAllProductHTTP = () => httpClient.get<IProduct[]>('/products');

export const GetAllProductByQueryHTTP = (
  query: TypeGetAllProductsQueryAction['payload']['data']
) => {
  let searchParams = '';
  let stringParams;
  for (const [key, value] of Object.entries(query)) {
    if (Array.isArray(value)) {
      let params = new URLSearchParams();

      value.forEach((element) => {
        params.append(`${[key]}`, element);
      });

      stringParams = params.toString();
    } else {
      stringParams = new URLSearchParams({ [key]: value });
    }
    searchParams += stringParams;
  }

  return httpClient.get<IProduct[]>(`/products?${searchParams}`);
};

export const GetProductHTTP = (id: string) =>
  httpClient.get<IProduct>(`/products/${id}`);
