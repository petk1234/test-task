import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./auth/authReducers";
const store = configureStore({
  reducer: rootReducer,
});
export default store;
