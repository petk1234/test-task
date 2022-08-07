import { useState } from "react";
import { useSelector } from "react-redux";
import useValidate from "./useValidate";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
function useInput() {
  const serverError = useSelector((state) => state.usersInfo.error);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [isDirtyName, setDirtyName] = useState("");
  const {
    // isEmpty: isEmptyName,
    minLength: minName,
    maxLength: maxName,
  } = useValidate(name, {
    // isEmpty: "",
    minLength: 2,
    maxLength: 60,
  });

  const [email, setEmail] = useState("");
  const [isDirtyEmail, setDirtyEmail] = useState("");
  const {
    // isEmpty: isEmptyEmail,
    minLength: minEmail,
    maxLength: maxEmail,
    isEmail,
  } = useValidate(email, {
    // isEmpty: 3,
    minLength: 2,
    maxLength: 100,
    isEmail: "",
    serverError: serverError,
  });

  const [phone, setPhone] = useState("");
  const [isDirtyPhone, setDirtyPhone] = useState("");
  const {
    // isEmpty: isEmptyPhone,
    isPhone,
    // phoneLength,
  } = useValidate(phone, {
    // isEmpty: "",
    isPhone: "",
    // phoneLength: "",
  });

  const [position, setPosition] = useState();
  const [photo, setImage] = useState();
  const { imgSize, imgEmpty } = useValidate(photo, {
    imgSize: "",
    imgEmpty: {},
  });

  // const {isAble} = useValidate(valuefalse);
  const outsideHandleInput = (input, placeholder) => {
    if (placeholder === "Your name") {
      setName(input);
    }
    if (placeholder === "Email") {
      console.log("accepted");
      setEmail(input);
    }
    if (placeholder === "Phone") {
      setPhone(input);
    }
  };

  const outsideBlurInput = (placeholder) => {
    if (placeholder === "Your name") {
      setDirtyName("Your name");
      console.log("accepted blur name");
    }
    if (placeholder === "Email") {
      setDirtyEmail("Email");
      console.log("accepted blur email");
    }
    if (placeholder === "Phone") {
      setDirtyPhone("Phone");
      console.log("accepted blur phone");
    }
  };

  const outsideHandlePosition = (id, position) => {
    setPosition({ id, position });
  };
  const outsideHandleImgFile = (img) => {
    console.log(img);
    console.log(typeof img);
    setImage(img);
    console.log(img);
  };

  // const readyToSubmit = () => {

  // if (
  //   name !== "" &&
  //   minName === false &&
  //   maxName === false &&
  //   email !== "" &&
  //   isEmail === true &&
  //   minEmail === false &&
  //   maxEmail === false &&
  //   isPhone === true &&
  //   phone !== "" &&
  //   position !== undefined &&
  //   photo !== -1 &&
  //   imgSize === true &&
  //   imgEmpty === false
  // ) {
  //   setIsAble(true);
  // } else {
  //   setIsAble(false);
  // }
  // };

  const outSideHandleAddUser = (e, token) => {
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

  return {
    name,
    isDirtyName,
    // isEmptyName,
    minName,
    maxName,
    email,
    isDirtyEmail,
    // isEmptyEmail,
    minEmail,
    maxEmail,
    isEmail,
    serverError,
    isDirtyPhone,
    // isEmptyPhone,
    isPhone,
    // phoneLength,
    phone,
    position,
    photo,
    imgSize,
    imgEmpty,
    // isAble,
    outsideHandleInput,
    outsideBlurInput,

    outsideHandlePosition,
    outsideHandleImgFile,
    outSideHandleAddUser,
  };
}
export default useInput;
