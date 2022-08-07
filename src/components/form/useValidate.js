import { useEffect, useState } from "react";

function useValidate(value, validations) {
  //   const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLength] = useState(true);
  const [maxLength, setMaxLength] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [phoneLength, setPhoneLength] = useState(false);
  const [imgSize, setImgSize] = useState(true);
  const [imgEmpty, setImgEmpty] = useState(false);
  const [serverError, setServerError] = useState("");
  useEffect(() => {
    if (value) {
      for (let validation in validations) {
        console.log(validation);
        switch (validation) {
          case validations.serverError:
            setServerError(validations.serverError);
          //   case "isEmpty":
          //     console.log("it is IsEmtyCase");
          //     if (value.length === 0) {
          //       setEmpty(true);
          //     } else {
          //       setEmpty(false);
          //     }
          case "minLength":
            if (value.length < validations[validation]) {
              setMinLength(true);
            } else {
              setMinLength(false);
            }
          case "maxLength":
            if (value.length > validations[validation]) {
              setMaxLength(true);
            } else {
              setMaxLength(false);
            }
          case "isEmail":
            console.log(validations[validation]);
            console.log("it is IsEmailCase");
            // const reEmail =
            //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const reEmail =
              /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
            if (value.match(reEmail)) {
              setIsEmail(true);
            } else {
              setIsEmail(false);
            }

          case "isPhone":
            console.log("it is IsPhoneCase");
            // const rePhone = /[3][8][0][0-9]/;
            const rePhone = /^[\+]{0,1}380[0-9]{9}$/;
            console.log(value);
            console.log(Number(value));
            if (rePhone.test(Number(value)) && value[0] === "+") {
              console.log("lolololo");
              setIsPhone(true);
            } else {
              console.log("nonono");
              setIsPhone(false);
            }

          //   case "phoneLength":
          //     if (value.length !== 13) {
          //       setPhoneLength(true);
          //     } else {
          //       setPhoneLength(false);
          //     }

          case "imgSize":
            if (value.size > 5000) {
              //1024000 * 5
              setImgSize(false);
            } else {
              setImgSize(true);
            }

          case "imgEmpty":
            console.log("it is IsEmptyImgCase");
            console.log(value);
            if (Number(value) === -1) {
              console.log("emememememem");
              setImgEmpty(true);
            } else {
              setImgEmpty(false);
            }
        }
        // if (value.length === 0) {
        //   setEmpty(true);
        // } else {
        //   setEmpty(false);
        // }
      }
    }
  }, [value]);

  return {
    serverError,
    // isEmpty,
    minLength,
    maxLength,
    isEmail,
    isPhone,
    // phoneLength,
    imgSize,
    imgEmpty,
  };
}
export default useValidate;
