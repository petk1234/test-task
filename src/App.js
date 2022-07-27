import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import ListCards from "./components/listCards/ListCards";
import Form from "./components/form/Form";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getToken());
  }, []);
  return (
    <>
      <p>Hi!</p>
      <ListCards />
      <Form />
    </>
  );
}

export default App;
