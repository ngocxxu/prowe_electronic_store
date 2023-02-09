import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  AddToCartHTTP,
  GetCartHTTP,
  RemoveAllCartHTTP,
  RemoveToCartHTTP,
  UpdateToCartHTTP,
} from 'src/services/CartsService';
import { STATUS_CODES } from 'src/services/settings';
import { ICart } from 'src/types/GeneralTypes';
import {
  ADD_TO_CART_SAGA,
  GET_CART_SAGA,
  REMOVE_ALL_CART_SAGA,
  REMOVE_TO_CART_SAGA,
  TypeAddToCartAction,
  TypeGetCartAction,
  TypeRemoveAllCartAction,
  TypeRemoveToCartAction,
  UPDATE_TO_CART_SAGA,
} from '../consts/consts';
import {
  getCartApiAction,
  setProductId,
  toggleClearAllCart,
  toggleLoadingButton,
} from '../reducers/cartReducer';
import { toggleNotification } from '../reducers/otherReducer';

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
      // yield put(setProductId(action.payload.data))
      yield put(toggleLoadingButton(true));
      const { status }: AxiosResponse<ICart> = yield call(() =>
        AddToCartHTTP(action.payload.idCart, action.payload.data)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put(
          toggleNotification({
            isNotification: true,
            severity: 'info',
            message: 'Product added to cart successfully',
            vertical: 'bottom',
            horizontal: 'left'
          })
        );
        yield put({
          type: GET_CART_SAGA,
          payload: action.payload.idCart,
        });
        yield put(toggleLoadingButton(false));
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

function* updateToCartSaga(action: TypeAddToCartAction) {
  try {
    if (action.payload) {
      const { status }: AxiosResponse<ICart> = yield call(() =>
        UpdateToCartHTTP(action.payload.idCart, action.payload.data)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put({
          type: GET_CART_SAGA,
          payload: action.payload.idCart,
        });
        yield put(setProductId(''));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followUpdateToCartSaga() {
  yield takeLatest(UPDATE_TO_CART_SAGA, updateToCartSaga);
}

function* removeToCartSaga(action: TypeRemoveToCartAction) {
  try {
    if (action.payload) {
      const { status }: AxiosResponse<ICart> = yield call(() =>
        RemoveToCartHTTP(action.payload.idCart, action.payload.idProduct)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put({
          type: GET_CART_SAGA,
          payload: action.payload.idCart,
        });
        yield put(setProductId(''));
      }
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followRemoveToCartSaga() {
  yield takeLatest(REMOVE_TO_CART_SAGA, removeToCartSaga);
}

function* removeAllCartSaga(action: TypeRemoveAllCartAction) {
  try {
    if (action.payload) {
      yield put(toggleClearAllCart(true));
      const { status }: AxiosResponse<ICart> = yield call(() =>
        RemoveAllCartHTTP(action.payload)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put({
          type: GET_CART_SAGA,
          payload: action.payload,
        });
        yield put(toggleClearAllCart(false));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followRemoveAllCartSaga() {
  yield takeLatest(REMOVE_ALL_CART_SAGA, removeAllCartSaga);
}
