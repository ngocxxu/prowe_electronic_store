import { all } from 'redux-saga/effects';
import * as ProductSaga from './ProductSaga'
import * as UserSaga from './UserSaga'

export function* rootSaga() {
  // follow all action
  yield all([
    ProductSaga.followGetAllProductsSaga(),
    UserSaga.followRegisterUserSaga(),
    UserSaga.followLoginUserSaga(),
  ]);
}
