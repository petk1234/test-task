import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import Inputs from "../../inputs/Inputs";
import RadioButtons from "../radio-buttons/RadioButtons";
import Textarea from "../textarea/Textarea";
import success from "./success.svg";
function Form() {
  const [position, setPosition] = useState();
  const [photo, setImage] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [token, signedUp] = useSelector((state) => [
    state.usersInfo.token,
    state.usersInfo.signedUp,
  ]);
  const dispatch = useDispatch();
  let placeholderArr = ["Your name", "Email", "Phone"];

  const outsideHandleInput = (input, placeholder) => {
    if (placeholder === "Your name") {
      setName(input);
    }
    if (placeholder === "Email") {
      setEmail(input);
    }
    if (placeholder === "Phone") {
      setPhone(input);
    }
  };

  const outsideHandlePosition = (id, position) => {
    setPosition({ id, position });
  };

  const outsideHandleImgFile = (img) => {
    setImage(img);
    console.log(img);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    console.log(photo);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", position.id);
    formData.append("photo", photo);
    dispatch(authOperations.setUser(token, formData));
  };

  return (
    <div id="form">
      {!signedUp ? (
        <>
          <h1>Working with POST request</h1>
          <form action="/users" method="post" onSubmit={handleAddUser}>
            <Inputs
              placeholderArr={placeholderArr}
              onHandleInput={outsideHandleInput}
            />

            <RadioButtons outsideOnPosition={outsideHandlePosition} />

            <Textarea onImgFile={outsideHandleImgFile} />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <div>
          <h1>User successfully registered</h1>
          <img src={success} alt="" />
        </div>
      )}
    </div>
  );
}
export default Form;
