import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ACCESSTOKEN, REFRESHTOKEN, STATUS_CODES } from 'src/services/settings';
import {
  GetMyUserHTTP,
  LoginUserHTTP,
  LogoutUserHTTP,
  RefreshTokenUserHTTP,
  RegisterUserHTTP,
} from 'src/services/UserService';
import { IAuth, IUser } from 'src/types/GeneralTypes';
import {
  GET_CART_SAGA,
  GET_COMPARISON_SAGA,
  GET_FAVOR_SAGA,
  GET_MY_USER_SAGA,
  LOGIN_USER_SAGA,
  LOGOUT_USER_SAGA,
  REFRESH_TOKEN_USER_SAGA,
  REGISTER_USER_SAGA,
  TypeLoginUserAction,
  TypeLogoutUserAction,
  TypeRefreshTokenUserAction,
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

      // When register success --> auto login
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
      window.location.replace('/register/register-success');
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    yield put(
      toggleNotification({
        isNotification: true,
        severity: 'error',
        message: `${((err as AxiosError).response?.data as any)?.error}`,
      })
    );
    console.log((err as AxiosError).message);
  }
}
export function* followRegisterUserSaga() {
  yield takeLatest(REGISTER_USER_SAGA, registerUserSaga);
}

function* loginUserSaga(action: TypeLoginUserAction) {
  try {
    const { userData, location, navigate } = action.payload;
    const { status, data }: AxiosResponse<IAuth> = yield call(() =>
      LoginUserHTTP(userData)
    );

    if (status === STATUS_CODES.SUCCESS) {
      localStorage.setItem(ACCESSTOKEN, JSON.stringify(data.accessToken));
      localStorage.setItem(REFRESHTOKEN, JSON.stringify(data.refreshToken));

      yield put(
        toggleNotification({
          isNotification: true,
          severity: 'success',
          message: 'Login is success',
        })
      );

      location.key === 'default' ? navigate('/') : navigate(-1);
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

function* getMyUserSaga() {
  try {
    const { status, data }: AxiosResponse<IUser> = yield call(() =>
      GetMyUserHTTP()
    );

    if (status === STATUS_CODES.SUCCESS) {
      yield put(getMyInfo(data));
      yield put({
        type: GET_COMPARISON_SAGA,
        payload: data._id,
      });
      yield put({
        type: GET_CART_SAGA,
        payload: data.idCart,
      });
      yield put({
        type: GET_FAVOR_SAGA,
        payload: data.idFavor,
      });
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    console.log((err as AxiosError).message);
  }
}
export function* followGetMyUserSaga() {
  yield takeLatest(GET_MY_USER_SAGA, getMyUserSaga);
}

function* logoutUserSaga(action: TypeLogoutUserAction) {
  try {
    const { status }: AxiosResponse = yield call(() =>
      LogoutUserHTTP(action.payload)
    );

    if (status === STATUS_CODES.SUCCESS) {
      localStorage.clear();

      window.location.replace('/login');
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    console.log((err as AxiosError).message);
  }
}
export function* followLogoutUserSaga() {
  yield takeLatest(LOGOUT_USER_SAGA, logoutUserSaga);
}

function* refreshTokenUserSaga(action: TypeRefreshTokenUserAction) {
  try {
    const { status, data }: AxiosResponse<IAuth> = yield call(() =>
      RefreshTokenUserHTTP(action.payload)
    );

    if (status === STATUS_CODES.SUCCESS) {
      localStorage.setItem(ACCESSTOKEN, JSON.stringify(data.accessToken));
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    console.log((err as AxiosError).message);
  }
}
export function* followRefreshTokenUserSaga() {
  yield takeLatest(REFRESH_TOKEN_USER_SAGA, refreshTokenUserSaga);
}
