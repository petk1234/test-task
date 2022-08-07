import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";
const token = createReducer("", {
  [authActions.successGetToken]: (state, { type, payload }) => payload,
});
const signedUp = createReducer(false, {
  [authActions.successSetUser]: () => true,
});
const positions = createReducer([], {
  [authActions.successGetPositions]: (state, { type, payload }) => payload,
});
const users = createReducer([], {
  [authActions.successGetUsers]: (state, { type, payload }) => [
    ...state,
    ...payload.users,
  ],
  [authActions.successSetUser]: (state, { type, payload }) => [],
});
const page = createReducer(1, {
  [authActions.successGetUsers]: (state, { type, payload }) => {
    let state_ = state + 1;
    if (state_ <= payload.total_pages) {
      return state_;
    } else {
      return 0;
    }
  },
  [authActions.successSetUser]: (state, { type, payload }) => 1,
});
const error = createReducer("", {
  [authActions.failureSetUser]: (state, { type, payload }) => {
    console.log(payload);
    return payload;
  },
  [authActions.successSetUser]: () => "",
});
const rootReducer = combineReducers({
  token: token,
  signedUp: signedUp,
  positions: positions,
  users: users,
  page: page,
  error: error,
});
export default rootReducer;
