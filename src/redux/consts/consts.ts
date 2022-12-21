import { IUser } from 'src/types/GeneralTypes';

export const SORT_PRODUCT = 'SORT_PRODUCT';
export const GET_ALL_PRODUCTS_SAGA = 'GET_ALL_PRODUCTS_SAGA';
export const GET_ALL_PRODUCTS_QUERY_SAGA = 'GET_ALL_PRODUCTS_QUERY_SAGA';
export const GET_PRODUCT_SAGA = 'GET_PRODUCT_SAGA';
export const REGISTER_USER_SAGA = 'REGISTER_USER_SAGA';
export const LOGIN_USER_SAGA = 'LOGIN_USER_SAGA';
export const LOGOUT_USER_SAGA = 'LOGOUT_USER_SAGA';
export const GET_MY_USER_SAGA = 'GET_MY_USER_SAGA';
export const REFRESH_TOKEN_USER_SAGA = 'REFRESH_TOKEN_USER_SAGA';
export const GET_CART_SAGA = 'GET_CART_SAGA';
export const ADD_TO_CART_SAGA = 'ADD_TO_CART_SAGA';
export const UPDATE_TO_CART_SAGA = 'UPDATE_TO_CART_SAGA';
export const REMOVE_TO_CART_SAGA = 'REMOVE_TO_CART_SAGA';
export const REMOVE_ALL_CART_SAGA = 'REMOVE_ALL_CART_SAGA';
export const GET_FAVOR_SAGA = 'GET_FAVOR_SAGA';
export const ADD_TO_FAVOR_SAGA = 'ADD_TO_FAVOR_SAGA';
export const REMOVE_TO_FAVOR_SAGA = 'REMOVE_TO_FAVOR_SAGA';
export const REMOVE_ALL_FAVOR_SAGA = 'REMOVE_ALL_FAVOR_SAGA';
export const GET_COMMENT_SAGA = 'GET_COMMENT_SAGA';
export const ADD_TO_COMMENT_SAGA = 'ADD_TO_COMMENT_SAGA';
export const REMOVE_TO_COMMENT_SAGA = 'REMOVE_TO_COMMENT_SAGA';
export const REMOVE_ALL_COMMENT_SAGA = 'REMOVE_ALL_COMMENT_SAGA';

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

export interface TypeGetAllProductsQueryAction {
  type: typeof GET_ALL_PRODUCTS_QUERY_SAGA;
  payload: { sort?: string; priceRange?: []; name?: string };
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
      price: number;
    };
  };
}

export interface TypeRemoveToCartAction {
  type: typeof REMOVE_TO_CART_SAGA;
  payload: {
    idCart: string;
    idProduct: string;
  };
}

export interface TypeRemoveAllCartAction {
  type: typeof REMOVE_ALL_CART_SAGA;
  payload: string;
}

// FAVOR
export interface TypeGetFavorAction {
  type: typeof GET_FAVOR_SAGA;
  payload: string;
}

export interface TypeAddToFavorAction {
  type: typeof ADD_TO_FAVOR_SAGA;
  payload: {
    idFavor: string;
    data: {
      idProduct: string;
    };
  };
}

export interface TypeRemoveToFavorAction {
  type: typeof REMOVE_TO_FAVOR_SAGA;
  payload: {
    idFavor: string;
    idProduct: string;
  };
}

export interface TypeRemoveAllFavorAction {
  type: typeof REMOVE_ALL_FAVOR_SAGA;
  payload: string;
}

// COMMENT
export interface TypeGetCommentAction {
  type: typeof GET_COMMENT_SAGA;
  payload: string;
}

export interface TypeAddToCommentAction {
  type: typeof ADD_TO_COMMENT_SAGA;
  payload: {
    id: string;
    idProduct: string;
    content: string;
    rate: number;
  };
}

export interface TypeRemoveToCommentAction {
  type: typeof REMOVE_TO_COMMENT_SAGA;
  payload: {
    idComment: string;
    idProduct: string;
  };
}
