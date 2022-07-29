import { useState } from "react";
import { Routes, Route } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import ListCards from "./components/listCards/ListCards";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import InfoSection from "./components/info/InfoSection";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getToken());
  }, []);
  return (
    <>
      <Header />
      <InfoSection />
      <ListCards />
      <Form />
    </>
  );
}

export default App;
