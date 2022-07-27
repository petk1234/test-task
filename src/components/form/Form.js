import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState(1);
  const [photo, setImage] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.usersInfo.token);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
    console.log(e.target.value);
  };
  const handleImgFile = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    let position_id = 0;
    if (position === "frontend developer") {
      position_id = 1;
    }
    if (position === "backend developer") {
      position_id = 2;
    }
    if (position === "designer") {
      position_id = 3;
    }
    if (position === "QA") {
      position_id = 4;
    }
    console.log(photo);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", position_id);
    formData.append("photo", photo);
    dispatch(authOperations.setUser(token, formData));
  };
  return (
    <>
      <h1>Working with POST request</h1>
      <form action="/users" method="post" onSubmit={handleAddUser}>
        <input
          type="text"
          onChange={handleName}
          placeholder="Your name"
        ></input>
        <input type="text" onChange={handleEmail} placeholder="Email"></input>
        <input type="text" onChange={handlePhone} placeholder="Phone"></input>

        <input
          type="radio"
          value="frontend developer"
          onChange={handlePosition}
          checked={position === "frontend developer"}
        />
        <label>Frontend developer</label>

        <input
          type="radio"
          value="backend developer"
          onChange={handlePosition}
          checked={position === "backend developer"}
        />
        <label>Backend developer</label>

        <input
          type="radio"
          value="designer"
          onChange={handlePosition}
          checked={position === "designer"}
        />
        <label>Designer</label>

        <input
          type="radio"
          value="QA"
          onChange={handlePosition}
          checked={position === "QA"}
        />
        <label>QA</label>

        <button type="submit">Submit</button>
        <div>
          <textarea type="file"></textarea>
          <input type="file" onChange={handleImgFile} name="title"></input>
        </div>
      </form>
    </>
  );
}
export default Form;
