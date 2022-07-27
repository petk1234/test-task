import authActions from "./authActions";
import axios from "axios";
axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";
const tokenActions = {
  set(token) {
    axios.defaults.headers.common.Token = token;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // return token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
const getToken = () => (dispatch) => {
  dispatch(authActions.requestGetToken());
  axios
    .get("/token")
    .then((data) => {
      console.log(data.data.token);
      tokenActions.set(data.data.token);
      console.log(axios.defaults.headers.common.Authorization);
      console.log(data);
      dispatch(authActions.successGetToken(data.data.token));
    })
    .catch((error) => dispatch(authActions.failureGetToken()));
};

const getUsers = (page) => (dispatch) => {
  dispatch(authActions.requestGetUsers());
  axios
    .get(`/users?page=${page}&count=5`)
    .then((data) => {
      console.log(data);
      dispatch(authActions.successGetUsers(data.data));
    })
    .catch((error) => dispatch(authActions.failureGetUsers()));
};

// getButtons;

// const setUser = (name, email, phone, position_id, photo) => (dispatch) => {
//   // let res = await axios.get(
//   //   "https://frontend-test-assignment-api.abz.agency/api/v1/token"
//   // );
//   // console.log(res.data.token);
//   // tokenActions.set(res.data.token);
//   console.log(name);
//   // const formData = { name, email, phone, position_id, photo };
//   // const formData = new FormData();
//   // formData.append("name", "John");
//   // formData.append("name", name);
//   // formData.append("email", email);
//   // formData.append("phone", phone);
//   // formData.append("position_id", position_id);
//   // formData.append("photo", photo);
//   const config = {
//     headers: {
//       "Content-type": "multipart/form-data",
//     },
//     body: name,
//   };
//   // console.log(Array.from(formData));
//   dispatch(authActions.requestSetUser());
//   console.log(axios.defaults.headers.common.Authorization);
//   axios("/users", name, {
//     method: "post",
//     body: name,
//     headers: {
//       "Content-type": "multipart/form-data",
//     },
//   }).then((data) => console.log(data));
// };

const setUser =
  (token, name, email, phone, position_id, photo) => (dispatch) => {
    console.log(name);
    // const config = {
    //   headers: {
    //     "Content-type": "multipart/form-data",
    //   },
    //   body: name,
    // };
    // console.log(Array.from(formData));
    // dispatch(authActions.requestSetUser());
    // console.log(axios.defaults.headers.common.Authorization);
    // fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    //   method: "POST",
    //   body: name,
    //   headers: {
    //     // "Content-type": "multipart/form-data",
    //     Token: token,
    //   },
    // }).then((data) => {
    //   console.log(data);
    //   dispatch(authActions.successSetUser());
    // });

    dispatch(authActions.requestSetUser());
    console.log(axios.defaults.headers.common.Authorization);
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      method: "POST",
      body: name,
      headers: {
        Token: token,
      },
    }).then((res) => {
      if (res.ok) {
        console.log("ok");
        dispatch(authActions.successSetUser());
      } else {
        dispatch(authActions.failureSetUser());
      }
    });
  };
export default { getToken, getUsers, setUser };
