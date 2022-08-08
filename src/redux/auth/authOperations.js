import authActions from "./authActions";
import axios from "axios";
axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";
const tokenActions = {
  set(token) {
    axios.defaults.headers.common.Token = token;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
const getToken = () => (dispatch) => {
  dispatch(authActions.requestGetToken());
  fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.message);
      }
    })
    .then((data) => {
      tokenActions.set(data.token);
      dispatch(authActions.successGetToken(data.token));
    })
    .catch((error) => dispatch(authActions.failureGetToken()));
};

const getUsers = (page) => (dispatch) => {
  dispatch(authActions.requestGetUsers());
  fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
  )
    .then(async (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.message);
      }
    })
    .then((data) => {
      dispatch(authActions.successGetUsers(data));
    })
    .catch((error) => dispatch(authActions.failureGetUsers()));
};

const getPositions = () => (dispatch) => {
  dispatch(authActions.requestGetPositions());
  fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.message);
      }
    })
    .then((data) => {
      dispatch(authActions.successGetPositions(data.positions));
    })
    .catch((error) => {
      dispatch(authActions.failureGetPositions());
    });
};

const setUser = (token, name) => (dispatch) => {
  dispatch(authActions.requestSetUser());
  fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    method: "POST",
    body: name,
    headers: {
      Token: token,
    },
  })
    .then(async (res) => {
      if (res.ok) {
        dispatch(authActions.successSetUser());
      } else {
        const data = await res.json();
        return Promise.reject(data);
      }
    })
    .catch((error) => {
      dispatch(authActions.failureSetUser(error.message));
    });
};
export default { getToken, getUsers, setUser, getPositions };
