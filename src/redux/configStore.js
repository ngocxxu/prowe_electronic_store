import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleware = [ thunk ];

const rootReducer = combineReducers({
  // menuReducer: menuReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));