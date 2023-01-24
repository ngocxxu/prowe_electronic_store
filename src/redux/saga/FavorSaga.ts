import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  AddToFavorHTTP,
  GetFavorHTTP,
  RemoveAllFavorHTTP,
  RemoveToFavorHTTP,
} from 'src/services/FavorsService';
import { STATUS_CODES } from 'src/services/settings';
import { IFavor } from 'src/types/GeneralTypes';
import {
  ADD_TO_FAVOR_SAGA,
  GET_FAVOR_SAGA,
  REMOVE_ALL_FAVOR_SAGA,
  REMOVE_TO_FAVOR_SAGA,
  TypeAddToFavorAction,
  TypeGetFavorAction,
  TypeRemoveAllFavorAction,
  TypeRemoveToFavorAction,
} from '../consts/consts';
import {
  getFavorApiAction,
  setFavourId,
  toggleClearAllFavour,
  toggleLoadingFavourButton,
} from '../reducers/favorReducer';

function* getFavorSaga(action: TypeGetFavorAction) {
  try {
    if (action.payload) {
      const { status, data }: AxiosResponse<IFavor> = yield call(() =>
        GetFavorHTTP(action.payload)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put(getFavorApiAction(data));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followGetFavorSaga() {
  yield takeLatest(GET_FAVOR_SAGA, getFavorSaga);
}

function* addToFavorSaga(action: TypeAddToFavorAction) {
  try {
    if (action.payload) {
      yield put(toggleLoadingFavourButton(true));
      const { status }: AxiosResponse<IFavor> = yield call(() =>
        AddToFavorHTTP(action.payload.idFavor, action.payload.data)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put({
          type: GET_FAVOR_SAGA,
          payload: action.payload.idFavor,
        });
        yield put(toggleLoadingFavourButton(false));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followAddToFavorSaga() {
  yield takeLatest(ADD_TO_FAVOR_SAGA, addToFavorSaga);
}

function* removeToFavorSaga(action: TypeRemoveToFavorAction) {
  try {
    if (action.payload) {
      yield put(setFavourId(action.payload.idProduct));
      yield put(toggleLoadingFavourButton(true));
      const { status }: AxiosResponse<IFavor> = yield call(() =>
        RemoveToFavorHTTP(action.payload.idFavor, action.payload.idProduct)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put(setFavourId(''));
        yield put({
          type: GET_FAVOR_SAGA,
          payload: action.payload.idFavor,
        });
        yield put(toggleLoadingFavourButton(false));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followRemoveToFavorSaga() {
  yield takeLatest(REMOVE_TO_FAVOR_SAGA, removeToFavorSaga);
}

function* removeAllFavorSaga(action: TypeRemoveAllFavorAction) {
  try {
    if (action.payload) {
      yield put(toggleClearAllFavour(true));
      const { status }: AxiosResponse<IFavor> = yield call(() =>
        RemoveAllFavorHTTP(action.payload)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put(toggleClearAllFavour(false));
        yield put({
          type: GET_FAVOR_SAGA,
          payload: action.payload,
        });
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followRemoveAllFavorSaga() {
  yield takeLatest(REMOVE_ALL_FAVOR_SAGA, removeAllFavorSaga);
}
