import { IUser } from 'src/types/GeneralTypes';

export const SORT_PRODUCT = 'SORT_PRODUCT';
export const GET_ALL_PRODUCTS_SAGA = 'GET_ALL_PRODUCTS_SAGA';
export const REGISTER_USER_SAGA = 'REGISTER_USER_SAGA';
export const LOGIN_USER_SAGA = 'LOGIN_USER_SAGA';

export interface TypeRegisterUserAction {
  type: typeof REGISTER_USER_SAGA;
  payload: {
    data: IUser;
    navigate: () => void;
  };
}

export interface TypeLoginUserAction {
  type: typeof LOGIN_USER_SAGA;
  payload: {
    data: IUser;
    navigate: () => void;
  };
}
