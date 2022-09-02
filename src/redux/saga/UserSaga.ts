import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { STATUS_CODES } from 'src/services/settings';
import { RegisterUserHTTP } from 'src/services/UserService';
import {
  LOGIN_USER_SAGA,
  REGISTER_USER_SAGA,
  TypeLoginUserAction,
  TypeRegisterUserAction,
} from '../consts/consts';
import { toggleNotification } from '../reducers/otherReducer';
import { getAllProductsApiAction } from '../reducers/productReducer';
import { getMyInfo } from '../reducers/userReducer';

function* registerUserSaga(action: TypeRegisterUserAction) {
  try {
    const { status, data }: AxiosResponse = yield call(() =>
      RegisterUserHTTP(action.payload.data)
    );

    if (status === STATUS_CODES.SUCCESS) {
      // Navigate when successful register
      action.payload.navigate();

      yield put(
        toggleNotification({
          isNotification: true,
          severity: 'success',
          message: 'Register',
        })
      );
      yield put(getMyInfo(data));
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    yield put(
      toggleNotification({
        isNotification: true,
        severity: 'error',
        message: 'Register',
      })
    );
    console.log((err as Error).message);
  }
}
export function* followRegisterUserSaga() {
  yield takeLatest(REGISTER_USER_SAGA, registerUserSaga);
}

function* loginUserSaga(action: TypeLoginUserAction) {
  try {
    const { status, data }: AxiosResponse = yield call(() =>
      RegisterUserHTTP(action.payload)
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
export function* followLoginUserSaga() {
  yield takeLatest(LOGIN_USER_SAGA, loginUserSaga);
}
