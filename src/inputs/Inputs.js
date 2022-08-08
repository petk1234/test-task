import { Fragment } from "react";
import InputErrors from "./InputErrors";
import styles from "./inputsStyles.module.scss";
function Inputs({ placeholderArr, onHandleInput, onBlurInput, inp }) {
  console.log(inp);
  const {
    isDirtyName,

    isDirtyEmail,

    isDirtyPhone,

    borderColorName,
    borderColorEmail,
    borderColorPhone,
  } = inp;
  return (
    <>
      <ul className={styles.signUpSection__inputsContainer}>
        {placeholderArr.map((placeholder) => (
          <Fragment key={placeholder}>
            <li className={styles.signUpSection__inputContainer}>
              <input
                className={
                  (borderColorName === "" && placeholder === isDirtyName) ||
                  (isDirtyName !== "Your name" &&
                    placeholder === "Your name") ||
                  (borderColorEmail === "" && placeholder === isDirtyEmail) ||
                  (isDirtyEmail !== "Email" && placeholder === "Email") ||
                  (borderColorPhone === "" && placeholder === isDirtyPhone) ||
                  (isDirtyPhone !== "Phone" && placeholder === "Phone")
                    ? styles.signUpSection__input
                    : `${styles.redBorder} ${styles.signUpSection__input}`
                }
                key={placeholder}
                type={placeholder !== "Phone" ? "text" : "tel"}
                onChange={(e) =>
                  onHandleInput(e.target.value, e.target.placeholder)
                }
                onBlur={(e) => onBlurInput(e.target.placeholder)}
                placeholder={placeholder}
                required
              />
              <p
                className={
                  (borderColorName === "" && placeholder === isDirtyName) ||
                  (isDirtyName !== "Your name" &&
                    placeholder === "Your name") ||
                  (borderColorEmail === "" && placeholder === isDirtyEmail) ||
                  (isDirtyEmail !== "Email" && placeholder === "Email") ||
                  (borderColorPhone === "" && placeholder === isDirtyPhone) ||
                  (isDirtyPhone !== "Phone" && placeholder === "Phone")
                    ? styles.signUpSection__inputTitle
                    : `${styles.redTitle} ${styles.signUpSection__inputTitle}`
                }
              >
                {placeholder}
              </p>
              <InputErrors inp={inp} placeholder={placeholder} input="error" />
            </li>
          </Fragment>
        ))}
      </ul>
      <p className={styles.signUpSection__phoneTemplate}>
        +38 (XXX) XXX - XX - XX
      </p>
    </>
  );
}
export default Inputs;
