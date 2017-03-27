/* @flow */

import { combineReducers } from "redux";
import * as types from "../actions";

const {routerReducer} = require('react-native-redux-router');
const data = (state = {
  isFetching: false,
  message: ""
}, action) => {
  switch (action.type) {
  case types.REQUEST_DATA:
    return Object.assign({}, state, {
      isFetching: true
    });
  case types.RECEIVE_DATA:
    return Object.assign({}, state, {
      isFetching: false,
      message: action.data.message
    });
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  data,
  routerReducer
});

export default rootReducer;
