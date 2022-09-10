import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import otherReducer from './reducers/otherReducer';
import shopReducer from './reducers/shopReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import { rootSaga } from './saga/rootSaga';
import cartReducer from './reducers/cartReducer';

const middleWareSaga = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), middleWareSaga];

export const store = configureStore({
  reducer: {
    otherReducer: otherReducer,
    shopReducer: shopReducer,
    productReducer: productReducer,
    userReducer: userReducer,
    cartReducer: cartReducer,
  },
  middleware,
});

// Run saga
middleWareSaga.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;