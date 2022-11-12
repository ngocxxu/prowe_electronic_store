import { all } from 'redux-saga/effects';
import * as ProductSaga from './ProductSaga';
import * as UserSaga from './UserSaga';
import * as CartSaga from './CartSaga';

export function* rootSaga() {
  // follow all action
  yield all([
    ProductSaga.followGetAllProductsSaga(),
    ProductSaga.followGetProductSaga(),
    UserSaga.followRegisterUserSaga(),
    UserSaga.followLoginUserSaga(),
    UserSaga.followGetMyUserSaga(),
    UserSaga.followLogoutUserSaga(),
    UserSaga.followRefreshTokenUserSaga(),
    CartSaga.followGetCartSaga(),
    CartSaga.followAddToCartSaga(),
    CartSaga.followUpdateToCartSaga(),
    CartSaga.followRemoveToCartSaga(),
    CartSaga.followRemoveAllCartSaga(),
  ]);
}
