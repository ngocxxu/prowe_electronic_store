import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import otherReducer from './reducers/otherReducer';
import shopReducer from './reducers/shopReducer';
// import otherReducer from './reducers/otherReducer';
import { rootSaga } from './saga/rootSaga';

const middleWareSaga = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), middleWareSaga];

export const store = configureStore({
  reducer: {
    shopReducer: shopReducer,
    otherReducer: otherReducer,
  },
  middleware,
});

// Run saga
middleWareSaga.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;