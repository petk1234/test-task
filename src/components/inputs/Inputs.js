import { Fragment } from "react";
import InputErrors from "./InputErrors";
import styles from "./inputsStyles.module.scss";
import classChanger from "./classChanger";
function Inputs({ placeholderArr, onHandleInput, onBlurInput, inp }) {
  return (
    <>
      <ul className={styles.signUpSection__inputsContainer}>
        {placeholderArr.map((placeholder) => (
          <Fragment key={placeholder}>
            <li className={styles.signUpSection__inputContainer}>
              <input
                className={classChanger("input", inp, placeholder)}
                key={placeholder}
                type={placeholder !== "Phone" ? "text" : "tel"}
                onChange={(e) =>
                  onHandleInput(e.target.value, e.target.placeholder)
                }
                onBlur={(e) => onBlurInput(e.target.placeholder)}
                placeholder={placeholder}
                required
              />
              <p className={classChanger("title", inp, placeholder)}>
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
