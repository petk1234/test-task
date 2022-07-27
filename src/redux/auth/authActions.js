import { createAction } from "@reduxjs/toolkit";

const requestGetToken = createAction("auth/requestGetToken");
const successGetToken = createAction("auth/successGetToken");
const failureGetToken = createAction("auth/failureGetToken");

const requestGetUsers = createAction("auth/requestGetUsers");
const successGetUsers = createAction("auth/successGetUsers");
const failureGetUsers = createAction("auth/failureGetUsers");

const requestSetUser = createAction("auth/requestSetUser");
const successSetUser = createAction("auth/successSetUser");
const failureSetUser = createAction("auth/failureSetUser");

export default {
  requestGetToken,
  successGetToken,
  failureGetToken,

  requestGetUsers,
  successGetUsers,
  failureGetUsers,

  requestSetUser,
  successSetUser,
  failureSetUser,
};
