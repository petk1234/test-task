import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import Inputs from "../../inputs/Inputs";
import RadioButtons from "../radio-buttons/RadioButtons";
import Textarea from "../textarea/Textarea";
import success from "./success.svg";
import styles from "./formStyles.module.scss";
import useInput from "./useInput";
function Form() {
  const inp = useInput();

  const {
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
    // isAble,
    outsideHandleInput,
    outsideBlurInput,
    outsideHandlePosition,
    outsideHandleImgFile,
    outSideHandleAddUser,
  } = inp;

  const [token, signedUp] = useSelector((state) => [
    state.usersInfo.token,
    state.usersInfo.signedUp,
  ]);
  // const dispatch = useDispatch();
  let placeholderArr = ["Your name", "Email", "Phone"];

  const handleAddUser = (e) => {
    outSideHandleAddUser(e, token);
    // e.preventDefault();
    // console.log(photo);
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("phone", phone);
    // formData.append("position_id", position.id);
    // formData.append("photo", photo);
    // dispatch(authOperations.setUser(token, formData));
  };

  return (
    <section className={styles.signUpSection} id="form">
      {!signedUp ? (
        <>
          <h1 className={styles.signUpSection__title}>
            Working with POST request
          </h1>
          <form className={styles.signUpSection__form} onSubmit={handleAddUser}>
            <Inputs
              placeholderArr={placeholderArr}
              onHandleInput={outsideHandleInput}
              onBlurInput={outsideBlurInput}
              inp={inp}
            />
            <RadioButtons outsideOnPosition={outsideHandlePosition} />

            <Textarea onImgFile={outsideHandleImgFile} inp={inp} />
            <button
              className={styles.signUpSection__button}
              type="submit"
              // disabled={isAble ? false : true}
              disabled={
                name !== "" &&
                minName === false &&
                maxName === false &&
                email !== "" &&
                isEmail === true &&
                minEmail === false &&
                maxEmail === false &&
                isPhone === true &&
                phone !== "" &&
                position !== undefined &&
                photo !== -1 &&
                imgSize === true &&
                imgEmpty === false
                  ? false
                  : true
              }
              onClick={() => console.log("loxloxlox")}
            >
              Sign up
            </button>
          </form>
        </>
      ) : (
        <div className={styles.signUpSection__formPosted}>
          <h1 className={styles.signUpSection__title}>
            User successfully registered
          </h1>
          <img className={styles.signUpSection__img} src={success} alt="" />
        </div>
      )}
    </section>
  );
}
export default Form;
