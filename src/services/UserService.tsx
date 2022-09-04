import { IUser } from 'src/types/GeneralTypes';
import { httpClient } from './settings';

export const RegisterUserHTTP = (data: IUser) =>
  httpClient.post('/auth/register', data);

export const LoginUserHTTP = (data: IUser) =>
  httpClient.post('/auth/login', data);

export const GetMyUserHTTP = () => httpClient.get('/auth/myUser');

export const LogoutUserHTTP = (data: { token: string }) =>
  httpClient.post('/auth/logout', data);

export const RefreshTokenUserHTTP = (data: { token: string }) =>
  httpClient.post('/auth/refreshToken', data);
