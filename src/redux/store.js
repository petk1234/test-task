import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import rootReducer from "./auth/authReducers";
const baseReducer = (state = {}, action) => state;
// const rootReducer = combineReducers({
//   timer: baseReducer,
// });
const store = configureStore({
  reducer: { usersInfo: rootReducer },
});
export default store;
