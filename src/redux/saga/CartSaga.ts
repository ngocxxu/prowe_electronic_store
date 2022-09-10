import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AddToCartHTTP, GetCartHTTP } from 'src/services/CartsService';
import { STATUS_CODES } from 'src/services/settings';
import { ICart } from 'src/types/GeneralTypes';
import {
  ADD_TO_CART_SAGA,
  GET_CART_SAGA,
  TypeAddToCartAction,
  TypeGetCartAction
} from '../consts/consts';
import { getCartApiAction } from '../reducers/cartReducer';

function* getCartSaga(action: TypeGetCartAction) {
  try {
    if (action.payload) {
      const { status, data }: AxiosResponse<ICart> = yield call(() =>
        GetCartHTTP(action.payload)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put(getCartApiAction(data));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followGetCartSaga() {
  yield takeLatest(GET_CART_SAGA, getCartSaga);
}

function* addToCartSaga(action: TypeAddToCartAction) {
  try {
    if (action.payload) {
      const { status}: AxiosResponse<ICart> = yield call(() =>
        AddToCartHTTP(action.payload.idCart, action.payload.data)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put({
          type: GET_CART_SAGA,
          payload: action.payload.idCart,
        });
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followAddToCartSaga() {
  yield takeLatest(ADD_TO_CART_SAGA, addToCartSaga);
}
