import { useSelector } from "react-redux";
import Inputs from "../inputs/Inputs";
import RadioButtons from "../radio-buttons/RadioButtons";
import Textarea from "../textarea/Textarea";
import Preloader from "../loader/Preloader";
import GreetUser from "../afterSignedUp/GreetUser";
import styles from "./formStyles.module.scss";
import useInput from "./useInput";
function Form() {
  const inp = useInput();

  const {
    isAble,
    outsideHandleInput,
    outsideBlurInput,
    outsideHandlePosition,
    outsideHandleImgFile,
    outSideHandleAddUser,
    outsideBlurPhoto,
  } = inp;

  const [token, signedUp, isLoading] = useSelector((state) => [
    state.token,
    state.signedUp,
    state.isLoading,
  ]);

  let placeholderArr = ["Your name", "Email", "Phone"];

  return (
    <section className={styles.signUpSection} id="form">
      {signedUp === false ? (
        <>
          <h1 className={styles.signUpSection__title}>
            Working with POST request
          </h1>
          {isLoading !== "setUser" ? (
            <>
              <form
                className={styles.signUpSection__form}
                onSubmit={(e) => outSideHandleAddUser(e, token)}
              >
                <Inputs
                  placeholderArr={placeholderArr}
                  onHandleInput={outsideHandleInput}
                  onBlurInput={outsideBlurInput}
                  inp={inp}
                />
                <RadioButtons outsideOnPosition={outsideHandlePosition} />

                <Textarea
                  onImgFile={outsideHandleImgFile}
                  inp={inp}
                  onBlurPhoto={outsideBlurPhoto}
                />
                <button
                  className={styles.signUpSection__button}
                  type="submit"
                  disabled={isAble ? false : true}
                >
                  Sign up
                </button>
              </form>
            </>
          ) : (
            isLoading === "setUser" && <Preloader />
          )}
        </>
      ) : (
        <GreetUser />
      )}
    </section>
  );
}
export default Form;
