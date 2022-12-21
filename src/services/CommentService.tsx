import { TypeAddToCommentAction } from 'src/redux/consts/consts';
import { IComment } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const GetCommentHTTP = (id: string) =>
  httpClient.get<IComment>(`/comment/${id}`);

export const AddToCommentHTTP = (data: TypeAddToCommentAction['payload']) =>
  httpClient.post('/comment', data);

export const RemoveToCommentHTTP = (id: string, idProduct: string) =>
  httpClient.delete<IComment>(`/comment/${id}/items/${idProduct}`);
