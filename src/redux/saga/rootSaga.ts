import { all } from 'redux-saga/effects';
// import * as CommentSaga from './Jira/CommentSaga'

export function* rootSaga() {
  // follow all action
  yield all([
    // CommentSaga.theoDoiGetAllCommentSaga()
  ]);
}
