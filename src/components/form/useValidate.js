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
            values[0].length < validations[validation]
              ? setMinLength(true)
              : setMinLength(false);

          case "maxLength":
            values[0].length > validations[validation]
              ? setMaxLength(true)
              : setMaxLength(false);

          case "isEmail":
            const reEmail =
              /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
            values[0].match(reEmail) ? setIsEmail(true) : setIsEmail(false);

          case "isPhone":
            const rePhone = /^[\+]{0,1}380[0-9]{9}$/;
            rePhone.test(Number(values[0])) && values[0][0] === "+"
              ? setIsPhone(true)
              : setIsPhone(false);

          case "imgSize":
            values[0].size > 1024000 * 5 ? setImgSize(false) : setImgSize(true);

          case "imgEmpty":
            Number(values[0]) === -1 ? setImgEmpty(true) : setImgEmpty(false);
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
      ? setIsAble(true)
      : setIsAble(false);
  }, [...values]);

  useEffect(() => {
    name !== "" && minName === false && maxName === false
      ? setBorderColorName("")
      : setBorderColorName("red");
  }, [...values]);

  useEffect(() => {
    let [email__, isEmail__, minEmail__, maxEmail__] = values;
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
