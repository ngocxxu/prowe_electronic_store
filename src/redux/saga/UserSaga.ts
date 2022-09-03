import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { STATUS_CODES } from 'src/services/settings';
import { LoginUserHTTP, RegisterUserHTTP } from 'src/services/UserService';
import { IAuth } from 'src/types/GeneralTypes';
import {
  LOGIN_USER_SAGA,
  REGISTER_USER_SAGA,
  TypeLoginUserAction,
  TypeRegisterUserAction,
} from '../consts/consts';
import { toggleNotification } from '../reducers/otherReducer';
import { getMyInfo } from '../reducers/userReducer';

function* registerUserSaga(action: TypeRegisterUserAction) {
  try {
    const { status, data }: AxiosResponse = yield call(() =>
      RegisterUserHTTP(action.payload.data)
    );

    if (status === STATUS_CODES.SUCCESS) {
      yield put(getMyInfo(data));

      yield put({
        type: LOGIN_USER_SAGA,
        payload: {
          data: { ...data, password: action.payload.data.password },
        },
      });

      yield put(
        toggleNotification({
          isNotification: true,
          severity: 'success',
          message: 'Register is success',
        })
      );

      // Navigate when successful register
      action.payload.navigate();
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    yield put(
      toggleNotification({
        isNotification: true,
        severity: 'error',
        message: `${((err as AxiosError).response?.data as any).error}`,
      })
    );
    console.log(((err as AxiosError).response?.data as any).error);
  }
}
export function* followRegisterUserSaga() {
  yield takeLatest(REGISTER_USER_SAGA, registerUserSaga);
}

function* loginUserSaga(action: TypeLoginUserAction) {
  try {
    const { status, data }: AxiosResponse<IAuth> = yield call(() =>
      LoginUserHTTP(action.payload.data)
    );

    if (status === STATUS_CODES.SUCCESS) {
      localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));

      yield put(getMyInfo(action.payload.data));

      yield put(
        toggleNotification({
          isNotification: true,
          severity: 'success',
          message: 'Login is success',
        })
      );

      // Navigate when successful register
      action.payload.navigate();
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    yield put(
      toggleNotification({
        isNotification: true,
        severity: 'error',
        message: `${((err as AxiosError).response?.data as any).error}`,
      })
    );
    console.log(((err as AxiosError).response?.data as any).error);
  }
}
export function* followLoginUserSaga() {
  yield takeLatest(LOGIN_USER_SAGA, loginUserSaga);
}
