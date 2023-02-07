import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  AddToComparisonHTTP,
  GetComparisonHTTP,
  RemoveToComparisonHTTP,
} from 'src/services/ComparisonService';
import { STATUS_CODES } from 'src/services/settings';
import { IComparison } from 'src/types/GeneralTypes';
import {
  ADD_TO_COMPARISON_SAGA,
  GET_COMPARISON_SAGA,
  REMOVE_TO_COMPARISON_SAGA,
  TypeAddToComparisonAction,
  TypeGetComparisonAction,
  TypeRemoveToComparisonAction,
} from '../consts/consts';
import {
  getComparisonApiAction,
  setComparisonId,
  toggleLoadingComparisonButton,
} from '../reducers/comparisonReducer';

function* getComparisonSaga(action: TypeGetComparisonAction) {
  try {
    if (action.payload) {
      const { status, data }: AxiosResponse<IComparison> = yield call(() =>
        GetComparisonHTTP(action.payload)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put(getComparisonApiAction(data));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followGetComparisonSaga() {
  yield takeLatest(GET_COMPARISON_SAGA, getComparisonSaga);
}

function* addToComparisonSaga(action: TypeAddToComparisonAction) {
  try {
    if (action.payload) {
      yield put(toggleLoadingComparisonButton(true));
      const { status }: AxiosResponse<IComparison> = yield call(() =>
        AddToComparisonHTTP(action.payload.data)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put({
          type: GET_COMPARISON_SAGA,
          payload: action.payload.data.id,
        });
        yield put(toggleLoadingComparisonButton(false));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followAddToComparisonSaga() {
  yield takeLatest(ADD_TO_COMPARISON_SAGA, addToComparisonSaga);
}

function* removeToComparisonSaga(action: TypeRemoveToComparisonAction) {
  try {
    if (action.payload) {
      yield put(toggleLoadingComparisonButton(true));
      const { status }: AxiosResponse<IComparison> = yield call(() =>
        RemoveToComparisonHTTP(action.payload.id, action.payload.idProduct)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put({
          type: GET_COMPARISON_SAGA,
          payload: action.payload.id,
        });
        yield put(setComparisonId(''));
        yield put(toggleLoadingComparisonButton(false));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followRemoveToComparisonSaga() {
  yield takeLatest(REMOVE_TO_COMPARISON_SAGA, removeToComparisonSaga);
}
