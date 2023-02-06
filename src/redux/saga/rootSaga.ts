import { all } from 'redux-saga/effects';
import * as ProductSaga from './ProductSaga';
import * as UserSaga from './UserSaga';
import * as CartSaga from './CartSaga';
import * as FavorSaga from './FavorSaga';
import * as CommentSaga from './CommentSaga';
import * as ComparisonSaga from './ComparisonSaga';

export function* rootSaga() {
  // follow all action
  yield all([
    ProductSaga.followGetAllProductsSaga(),
    ProductSaga.followGetAllProductsByQuerySaga(),
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
    FavorSaga.followGetFavorSaga(),
    FavorSaga.followAddToFavorSaga(),
    FavorSaga.followRemoveToFavorSaga(),
    FavorSaga.followRemoveAllFavorSaga(),
    CommentSaga.followGetCommentSaga(),
    CommentSaga.followAddToCommentSaga(),
    CommentSaga.followRemoveToCommentSaga(),
    ComparisonSaga.followGetComparisonSaga(),
    ComparisonSaga.followAddToComparisonSaga(),
    ComparisonSaga.followRemoveToComparisonSaga(),
  ]);
}
