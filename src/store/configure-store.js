/* @flow */

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import createSagaMiddleware from 'redux-saga'
import  rootSaga  from '../sagas'

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  sagaMiddleware
)(createStore);



const configureStore = function (initialState: Object = {}): Function {
  return createStoreWithMiddleware(rootReducer, initialState);
};


const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;
