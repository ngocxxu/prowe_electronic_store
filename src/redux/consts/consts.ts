import { NavigateFunction } from 'react-router-dom';
import { IUser } from 'src/types/GeneralTypes';

export const SORT_PRODUCT = 'SORT_PRODUCT';
export const GET_ALL_PRODUCTS_SAGA = 'GET_ALL_PRODUCTS_SAGA';
export const REGISTER_USER_SAGA = 'REGISTER_USER_SAGA';
export const LOGIN_USER_SAGA = 'LOGIN_USER_SAGA';
export const LOGOUT_USER_SAGA = 'LOGOUT_USER_SAGA';
export const GET_MY_USER_SAGA = 'GET_MY_USER_SAGA';
export const REFRESH_TOKEN_USER_SAGA = 'REFRESH_TOKEN_USER_SAGA';

export interface TypeRegisterUserAction {
  type: typeof REGISTER_USER_SAGA;
  payload: {
    data: IUser;
    navigate: NavigateFunction;
  };
}

export interface TypeLoginUserAction {
  type: typeof LOGIN_USER_SAGA;
  payload: {
    data: IUser;
    navigate: NavigateFunction;
  };
}

export interface TypeLogoutUserAction {
  type: typeof LOGOUT_USER_SAGA;
  payload: {
    token: string;
    navigate: NavigateFunction;
  };
}

export interface TypeGetMyUserAction {
  type: typeof GET_MY_USER_SAGA;
  payload: IUser;
}

export interface TypeRefreshTokenUserAction {
  type: typeof REFRESH_TOKEN_USER_SAGA;
  payload: {
    token: string;
  };
}
