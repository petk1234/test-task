import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import ListCards from "../listCards/ListCards";
import Form from "../form/Form";
import Header from "../header/Header";
import InfoSection from "../info/InfoSection";
import "../../fonts/nunito/Nunito-Regular.woff2";
import "./appStyles.module.scss";
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
