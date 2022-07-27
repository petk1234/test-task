import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";
const token = createReducer("", {
  [authActions.successGetToken]: (state, { type, payload }) => payload,
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
const rootReducer = combineReducers({
  token: token,
  users: users,
  page: page,
});
export default rootReducer;
