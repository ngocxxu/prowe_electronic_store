import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GetAllProductHTTP,
  GetProductHTTP,
} from 'src/services/ProductsService';
import { STATUS_CODES } from 'src/services/settings';
import { IProduct } from 'src/types/GeneralTypes';
import { GET_ALL_PRODUCTS_SAGA, GET_PRODUCT_SAGA, TypeGetProductAction } from '../consts/consts';
import {
  getAllProductsApiAction,
  getProductApiAction,
} from '../reducers/productReducer';

function* getAllProductsSaga() {
  try {
    const { status, data }: AxiosResponse<IProduct[]> = yield call(() =>
      GetAllProductHTTP()
    );

    if (status === STATUS_CODES.SUCCESS) {
      yield put(getAllProductsApiAction(data));
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followGetAllProductsSaga() {
  yield takeLatest(GET_ALL_PRODUCTS_SAGA, getAllProductsSaga);
}

function* getProductSaga(action: TypeGetProductAction) {
  try {
    const { status, data }: AxiosResponse<IProduct> = yield call(() =>
      GetProductHTTP(action.payload)
    );

    if (status === STATUS_CODES.SUCCESS) {
      yield put(getProductApiAction(data));
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followGetProductSaga() {
  yield takeLatest(GET_PRODUCT_SAGA, getProductSaga);
}

// cách gọi SAGA bên JSX (file khac)
// dispatch({
//   type: GET_ALL_COMMENT_SAGA,
//   taskIdCmt: taskDetailModal.taskId
// });
