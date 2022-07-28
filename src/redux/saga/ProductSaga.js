// import { call, put, takeLatest } from 'redux-saga/effects';

// function* getAllCommentSaga(action) {
//   try {
//     const { status, data } = yield call(() =>
//     jiraService.getCommentDetail(action.taskIdCmt)
//     );

//     if (status === STATUS_CODE.SUCCESS) {
//     yield put(getProductApiAction(data));

//     } else {
//       console.log("error");
//     }

//   } catch (err) {
//     console.log('errorAllCommentSaga',err.response.data);
//   }
// }

// export function* theoDoiGetAllCommentSaga() {
//   yield takeLatest(GET_ALL_COMMENT_SAGA, getAllCommentSaga);
// }

// cách gọi SAGA bên JSX (file khac)
// dispatch({
//   type: GET_ALL_COMMENT_SAGA,
//   taskIdCmt: taskDetailModal.taskId
// });
