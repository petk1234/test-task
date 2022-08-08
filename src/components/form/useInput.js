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
  const { minLength: minName, maxLength: maxName } = useValidate([name], {
    minLength: 2,
    maxLength: 60,
  });

  const [email, setEmail] = useState("");
  const [isDirtyEmail, setDirtyEmail] = useState("");
  const {
    minLength: minEmail,
    maxLength: maxEmail,
    isEmail,
  } = useValidate([email], {
    minLength: 2,
    maxLength: 100,
    isEmail: "",
    serverError: serverError,
  });

  const [phone, setPhone] = useState("");
  const [isDirtyPhone, setDirtyPhone] = useState("");
  const { isPhone } = useValidate([phone], {
    isPhone: "",
  });

  const [position, setPosition] = useState();
  const [photo, setImage] = useState();
  const [isDirtyPhoto, setDirtyPhoto] = useState(false);
  const { imgSize, imgEmpty } = useValidate([photo], {
    imgSize: "",
    imgEmpty: {},
  });

  const { isAble } = useValidate([
    name,
    minName,
    maxName,
    email,
    isEmail,
    minEmail,
    maxEmail,
    isPhone,
    phone,
    position,
    photo,
    imgSize,
    imgEmpty,
  ]);

  const { borderColorName } = useValidate([name, minName, maxName]);
  const { borderColorEmail } = useValidate([
    email,
    isEmail,
    minEmail,
    maxEmail,
  ]);
  const { borderColorPhone } = useValidate([isPhone, phone]);

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

  const outsideBlurInput = (placeholder) => {
    if (placeholder === "Your name") {
      setDirtyName("Your name");
    }
    if (placeholder === "Email") {
      setDirtyEmail("Email");
    }
    if (placeholder === "Phone") {
      setDirtyPhone("Phone");
    }
  };

  const outsideHandlePosition = (id, position) => {
    setPosition({ id, position });
  };
  const outsideHandleImgFile = (img) => {
    setImage(img);
  };
  const outsideBlurPhoto = () => {
    setDirtyPhoto(true);
  };

  const outSideHandleAddUser = (e, token) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", position.id);
    formData.append("photo", photo);

    setName("");
    setEmail("");
    setPhone("");
    setPosition({});
    setImage({});
    dispatch(authOperations.setUser(token, formData));
  };

  return {
    name,
    isDirtyName,
    minName,
    maxName,

    email,
    isDirtyEmail,
    minEmail,
    maxEmail,
    isEmail,

    serverError,

    isDirtyPhone,
    isPhone,
    phone,

    position,

    photo,
    isDirtyPhoto,
    imgSize,
    imgEmpty,

    isAble,
    borderColorName,
    borderColorEmail,
    borderColorPhone,
    outsideHandleInput,
    outsideBlurInput,
    outsideHandlePosition,
    outsideHandleImgFile,
    outSideHandleAddUser,
    outsideBlurPhoto,
  };
}
export default useInput;
