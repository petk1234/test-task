import { useEffect, useState } from "react";

function useValidate(values, validations) {
  const [minLength, setMinLength] = useState(true);
  const [maxLength, setMaxLength] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [imgSize, setImgSize] = useState(true);
  const [imgEmpty, setImgEmpty] = useState(true);
  const [serverError, setServerError] = useState("");
  const [isAble, setIsAble] = useState(false);
  const [borderColorName, setBorderColorName] = useState("");
  const [borderColorEmail, setBorderColorEmail] = useState("");
  const [borderColorPhone, setBorderColorPhone] = useState("");
  useEffect(() => {
    if (values[0]) {
      for (let validation in validations) {
        switch (validation) {
          case validations.serverError:
            setServerError(validations.serverError);
          case "minLength":
            if (values[0].length < validations[validation]) {
              setMinLength(true);
            } else {
              setMinLength(false);
            }
          case "maxLength":
            if (values[0].length > validations[validation]) {
              setMaxLength(true);
            } else {
              setMaxLength(false);
            }
          case "isEmail":
            const reEmail =
              /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
            if (values[0].match(reEmail)) {
              setIsEmail(true);
            } else {
              setIsEmail(false);
            }

          case "isPhone":
            const rePhone = /^[\+]{0,1}380[0-9]{9}$/;
            if (rePhone.test(Number(values[0])) && values[0][0] === "+") {
              setIsPhone(true);
            } else {
              setIsPhone(false);
            }

          case "imgSize":
            if (values[0].size > 5000) {
              //1024000 * 5
              setImgSize(false);
            } else {
              setImgSize(true);
            }

          case "imgEmpty":
            if (Number(values[0]) === -1) {
              setImgEmpty(true);
            } else {
              setImgEmpty(false);
            }
        }
      }
    }
  }, [values[0]]);
  let [
    name,
    minName,
    maxName,
    email,
    isEmail_,
    minEmail,
    maxEmail,
    isPhone_,
    phone,
    position,
    photo,
    imgSize_,
    imgEmpty_,
  ] = values;
  useEffect(() => {
    if (
      name !== "" &&
      minName === false &&
      maxName === false &&
      email !== "" &&
      isEmail_ === true &&
      minEmail === false &&
      maxEmail === false &&
      isPhone_ === true &&
      phone !== "" &&
      position !== undefined &&
      photo !== -1 &&
      imgSize_ === true &&
      imgEmpty_ === false
    ) {
      console.log("able");
      setIsAble(true);
      console.log(isAble);
    } else {
      console.log("not able");
      setIsAble(false);
    }
  }, [...values]);

  useEffect(() => {
    name !== "" && minName === false && maxName === false
      ? setBorderColorName("")
      : setBorderColorName("red");

    // email !== "" &&
    // isEmail_ === true &&
    // minEmail === false &&
    // maxEmail === false
    //   ? setBorderColor("")
    //   : setBorderColor("red");

    // isPhone_ === true && phone !== ""
    //   ? setBorderColor("")
    //   : setBorderColor("red");
  }, [...values]);

  useEffect(() => {
    let [email__, isEmail__, minEmail__, maxEmail__] = values;
    // console.log(email__, isEmail__, minEmail__, maxEmail__);
    // console.log(name, minName, maxName, email);
    // values[0] !== "" &&
    // values[1] === true &&
    // values[2] === false &&
    // values[3] === false
    email__ !== "" &&
    isEmail__ === true &&
    minEmail__ === false &&
    maxEmail__ === false
      ? setBorderColorEmail("")
      : setBorderColorEmail("red");
  }, [...values]);

  useEffect(() => {
    let [isPhone__, phone__] = values;
    isPhone__ === true && phone__ !== ""
      ? setBorderColorPhone("")
      : setBorderColorPhone("red");
  }, [...values]);

  return {
    serverError,
    minLength,
    maxLength,
    isEmail,
    isPhone,
    imgSize,
    imgEmpty,
    isAble,
    borderColorName,
    borderColorEmail,
    borderColorPhone,
  };
}
export default useValidate;
