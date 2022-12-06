import { TypeAddToFavorAction } from 'src/redux/consts/consts';
import { IFavor } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetFavorHTTP = (id: string) =>
  httpClient.get<IFavor>(`/favor/${id}`);

export const AddToFavorHTTP = (
  id: string,
  data: TypeAddToFavorAction['payload']['data']
) => httpClient.post(`/favor/${id}`, data);

export const RemoveToFavorHTTP = (id: string, idProduct: string) =>
  httpClient.delete<IFavor>(`/favor/${id}/items/${idProduct}`);

export const RemoveAllFavorHTTP = (id: string) =>
  httpClient.delete<IFavor>(`/favor/${id}/items`);
