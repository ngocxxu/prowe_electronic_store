import { TypeAddToCartAction } from 'src/redux/consts/consts';
import { ICart } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetCartHTTP = (id: string) => httpClient.get<ICart>(`/cart/${id}`);

export const AddToCartHTTP = (
  id: string,
  data: TypeAddToCartAction['payload']['data']
) => httpClient.post(`/cart/${id}`, data);

export const RemoveToCartHTTP = (id: string, idProduct: string) =>
  httpClient.delete<ICart>(`/cart/${id}/items/${idProduct}`);

export const RemoveAllCartHTTP = (id: string) =>
  httpClient.delete<ICart>(`/cart/${id}/items`);
