import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import shopReducer from './reducers/shopReducer';
// import otherReducer from './reducers/otherReducer';
import { rootSaga } from './saga/rootSaga';

const middleWareSaga = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), middleWareSaga];

export const store = configureStore({
  reducer: {
    shopReducer: shopReducer,
    // otherReducer: otherReducer,
  },
  middleware,
});

// Run saga
middleWareSaga.run(rootSaga);
