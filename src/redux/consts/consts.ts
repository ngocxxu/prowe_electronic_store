import { IUser } from 'src/types/GeneralTypes';

export const SORT_PRODUCT = 'SORT_PRODUCT';
export const GET_ALL_PRODUCTS_SAGA = 'GET_ALL_PRODUCTS_SAGA';
export const GET_PRODUCT_SAGA = 'GET_PRODUCT_SAGA';
export const REGISTER_USER_SAGA = 'REGISTER_USER_SAGA';
export const LOGIN_USER_SAGA = 'LOGIN_USER_SAGA';
export const LOGOUT_USER_SAGA = 'LOGOUT_USER_SAGA';
export const GET_MY_USER_SAGA = 'GET_MY_USER_SAGA';
export const REFRESH_TOKEN_USER_SAGA = 'REFRESH_TOKEN_USER_SAGA';
export const GET_CART_SAGA = 'GET_CART_SAGA';
export const ADD_TO_CART_SAGA = 'ADD_TO_CART_SAGA';
export const REMOVE_TO_CART_SAGA = 'REMOVE_TO_CART_SAGA';
export const REMOVE_ALL_CART_SAGA = 'REMOVE_ALL_CART_SAGA';

// USER
export interface TypeRegisterUserAction {
  type: typeof REGISTER_USER_SAGA;
  payload: {
    data: IUser;
  };
}

export interface TypeLoginUserAction {
  type: typeof LOGIN_USER_SAGA;
  payload: {
    data: IUser;
  };
}

export interface TypeLogoutUserAction {
  type: typeof LOGOUT_USER_SAGA;
  payload: {
    token: string;
  };
}

export interface TypeGetMyUserAction {
  type: typeof GET_MY_USER_SAGA;
  payload: IUser;
}

// AUTH
export interface TypeRefreshTokenUserAction {
  type: typeof REFRESH_TOKEN_USER_SAGA;
  payload: {
    token: string;
  };
}

// PRODUCT
export interface TypeGetProductAction {
  type: typeof GET_PRODUCT_SAGA;
  payload: string;
}

// CART
export interface TypeGetCartAction {
  type: typeof GET_CART_SAGA;
  payload: string;
}

export interface TypeAddToCartAction {
  type: typeof ADD_TO_CART_SAGA;
  payload: {
    idCart: string;
    data: {
      idProduct: string;
      quantity: number;
    };
  };
}
