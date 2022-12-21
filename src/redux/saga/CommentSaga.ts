import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  AddToCommentHTTP,
  GetCommentHTTP,
  RemoveToCommentHTTP,
} from 'src/services/CommentService';
import { STATUS_CODES } from 'src/services/settings';
import { IComment } from 'src/types/GeneralTypes';
import {
  ADD_TO_COMMENT_SAGA,
  GET_COMMENT_SAGA,
  REMOVE_TO_COMMENT_SAGA,
  TypeAddToCommentAction,
  TypeGetCommentAction,
  TypeRemoveToCommentAction,
} from '../consts/consts';
import { getCommentApiAction } from '../reducers/commentReducer';

function* getCommentSaga(action: TypeGetCommentAction) {
  try {
    if (action.payload) {
      const { status, data }: AxiosResponse<IComment[]> = yield call(() =>
        GetCommentHTTP(action.payload)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put(getCommentApiAction(data));
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followGetCommentSaga() {
  yield takeLatest(GET_COMMENT_SAGA, getCommentSaga);
}

function* addToCommentSaga(action: TypeAddToCommentAction) {
  try {
    if (action.payload) {
      const { status }: AxiosResponse<IComment> = yield call(() =>
        AddToCommentHTTP(action.payload)
      );

      if (status === STATUS_CODES.SUCCESS) {
        yield put({
          type: GET_COMMENT_SAGA,
          payload: action.payload.idProduct,
        });
      } else {
        console.log('error');
      }
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followAddToCommentSaga() {
  yield takeLatest(ADD_TO_COMMENT_SAGA, addToCommentSaga);
}

function* removeToCommentSaga(action: TypeRemoveToCommentAction) {
  try {
    const { status }: AxiosResponse<IComment> = yield call(() =>
      RemoveToCommentHTTP(action.payload.idComment, action.payload.idProduct)
    );

    if (status === STATUS_CODES.SUCCESS) {
      yield put({
        type: GET_COMMENT_SAGA,
        payload: action.payload.idComment,
      });
    } else {
      console.log('error');
    }
  } catch (err: unknown) {
    console.log((err as Error).message);
  }
}

export function* followRemoveToCommentSaga() {
  yield takeLatest(REMOVE_TO_COMMENT_SAGA, removeToCommentSaga);
}
