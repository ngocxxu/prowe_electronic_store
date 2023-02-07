import { TypeAddToComparisonAction } from 'src/redux/consts/consts';
import { IComparison } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetComparisonHTTP = (id: string) =>
  httpClient.get<IComparison>(`/comparison/${id}`);

export const AddToComparisonHTTP = (
  data: TypeAddToComparisonAction['payload']['data']
) => httpClient.post(`/comparison`, data);

export const RemoveToComparisonHTTP = (id: string, idProduct: string) =>
  httpClient.delete<IComparison>(`/comparison/${id}/items/${idProduct}`);
