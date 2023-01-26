import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GetAllProductByQueryHTTP,
  GetAllProductHTTP,
  GetProductHTTP,
} from 'src/services/ProductsService';
import { STATUS_CODES } from 'src/services/settings';
import { IProduct } from 'src/types/GeneralTypes';
import {
  GET_ALL_PRODUCTS_QUERY_SAGA,
  GET_ALL_PRODUCTS_SAGA,
  GET_PRODUCT_SAGA,
  TypeGetAllProductsQueryAction,
  TypeGetProductAction,
} from '../consts/consts';
import {
  getAllProductsApiAction,
  getProductApiAction,
  getSearchAllProducts,
  togglePendingAllProduct,
  togglePendingProduct,
} from '../reducers/productReducer';

function* getAllProductsSaga() {
  try {
    yield put(togglePendingAllProduct(true));
    const { status, data }: AxiosResponse<IProduct[]> = yield call(() =>
      GetAllProductHTTP()
    );

    if (status === STATUS_CODES.SUCCESS) {
      yield put(getAllProductsApiAction(data));
      yield put(togglePendingAllProduct(false));
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

function* getAllProductsByQuerySaga(action: TypeGetAllProductsQueryAction) {
  try {
    yield put(togglePendingAllProduct(true));
    const { status, data }: AxiosResponse<IProduct[]> = yield call(() =>
      GetAllProductByQueryHTTP(action.payload.data)
    );

    // Filter products are be searched
    const isSearching: boolean = action.payload.isSearch ?? false;
    if (status === STATUS_CODES.SUCCESS) {
      if (isSearching) {
        yield put(getSearchAllProducts(data));
        yield put(togglePendingAllProduct(false));
        return;
      }

      yield put(getAllProductsApiAction(data));
      yield put(togglePendingAllProduct(false));
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followGetAllProductsByQuerySaga() {
  yield takeLatest(GET_ALL_PRODUCTS_QUERY_SAGA, getAllProductsByQuerySaga);
}

function* getProductSaga(action: TypeGetProductAction) {
  try {
    yield put(togglePendingProduct(true));
    const { status, data }: AxiosResponse<IProduct> = yield call(() =>
      GetProductHTTP(action.payload)
    );

    if (status === STATUS_CODES.SUCCESS) {
      yield put(getProductApiAction(data));
      yield put(togglePendingProduct(false));
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
