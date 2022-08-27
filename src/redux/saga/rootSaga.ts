import { all } from 'redux-saga/effects';
import * as ProductSaga from './ProductSaga'

export function* rootSaga() {
  // follow all action
  yield all([
    ProductSaga.followGetAllProductsSaga()
  ]);
}
