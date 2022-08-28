import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GetAllProductHTTP } from 'src/services/ProductsService';
import { STATUS_CODES } from 'src/services/settings';
import { IProductAPI } from 'src/types/GeneralTypes';
import { GET_ALL_PRODUCTS_SAGA } from '../consts/consts';
import { getAllProductsApiAction } from '../reducers/productReducer';

function* getAllProductsSaga() {
  try {
    const { status, data }: AxiosResponse<IProductAPI[]> = yield call(() =>
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

// cách gọi SAGA bên JSX (file khac)
// dispatch({
//   type: GET_ALL_COMMENT_SAGA,
//   taskIdCmt: taskDetailModal.taskId
// });
