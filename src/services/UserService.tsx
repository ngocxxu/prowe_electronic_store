import { IUser } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const RegisterUserHTTP = (data: IUser) =>
  httpClient.post('/auth/register', data);
