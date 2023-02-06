import { TypeAddToComparisonAction } from 'src/redux/consts/consts';
import { IComparison } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetComparisonHTTP = (userId: string) =>
  httpClient.get<IComparison>(`/comparison/${userId}`);

export const AddToComparisonHTTP = (
  data: TypeAddToComparisonAction['payload']['data']
) => httpClient.post(`/comparison`, data);

export const RemoveToComparisonHTTP = (userId: string, idProduct: string) =>
  httpClient.delete<IComparison>(`/comparison/${userId}/items/${idProduct}`);
