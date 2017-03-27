/* @flow */
/*global setTimeout*/
import configureStore from "../store/configure-store";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const GOTO_FIRST = "GOTO_FIRST";

export const requestData = (): Object => {
  return {
    type: REQUEST_DATA
  };
};

export const receiveData = (data: Object): Object => {
  return {
    type: RECEIVE_DATA,
    data
  };
};

export const fetchData = (): Function => {
  return (dispatch) => {
    dispatch(requestData());
    return setTimeout(() => {
      const data = {message: "Hello"};
      dispatch(receiveData(data));
    }, 300);
  };
};



export function gotoFirst() {
    const store = configureStore;
    const action = type => store.dispatch({type});
    action(GOTO_FIRST);
}