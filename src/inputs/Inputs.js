import { Fragment } from "react";
import styles from "./inputsStyles.module.scss";
function Inputs({ placeholderArr, onHandleInput, onBlurInput, inp }) {
  const handleChange = (e) => {
    onHandleInput(e.target.value, e.target.placeholder);
  };
  const handleBlur = (e) => {
    onBlurInput(e.target.placeholder);
  };
  console.log(inp);
  return (
    <>
      <div className={styles.signUpSection__inputsContainer}>
        {placeholderArr.map((placeholder) => (
          <Fragment key={placeholder}>
            <input
              className={styles.signUpSection__input}
              key={placeholder}
              type={placeholder !== "Phone" ? "text" : "tel"}
              // type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={placeholder}
              required
            />
            {/* {inp.isDirtyName === placeholder && inp.isEmptyName && (
              <p>Can't be empty</p>
            )} */}
            {(inp.isDirtyName === placeholder && inp.minName && (
              <p>input is too short</p>
            )) ||
              (inp.isDirtyName === placeholder && inp.maxName && (
                <p>input is too long</p>
              ))}

            {/* {inp.isDirtyEmail === placeholder && inp.isEmptyEmail && (
              <p>Can't be empty</p>
            )} */}
            {inp.isDirtyEmail === placeholder && inp.isEmail === false && (
              <p>Not valid email</p>
            )}
            {(inp.isDirtyEmail === placeholder && inp.minEmail && (
              <p>input is too short</p>
            )) ||
              (inp.isDirtyEmail === placeholder && inp.maxEmail && (
                <p>input is too long</p>
              ))}
            {(inp.isDirtyEmail === placeholder ||
              inp.isDirtyPhone === placeholder) &&
              inp.serverError !== "" && <p>{inp.serverError}</p>}
            {/* {inp.isDirtyPhone === placeholder && inp.isEmptyPhone && (
              <p>Can't be empty</p>
            )} */}
            {inp.isDirtyPhone === placeholder && inp.isPhone === false && (
              <p>Not valid phone, enter +380</p>
            )}
            {inp.isDirtyPhone === placeholder &&
              inp.isPhone === true &&
              inp.phoneLength && <p>must contain 13 symbols</p>}
          </Fragment>
        ))}
      </div>
      <p className={styles.signUpSection__phoneTemplate}>
        +38 (XXX) XXX - XX - XX
      </p>
    </>
  );
}
export default Inputs;

{
  /* {((inp.isDirtyName === placeholder && inp.isEmptyName) ||
  (inp.isDirtyEmail === placeholder && inp.isEmptyEmail) ||
  (inp.isDirtyPhone === placeholder && inp.isEmptyPhone)) && (
  <p>Can't be empty</p>
)} */
}

{
  /* {inp.isDirtyName === placeholder && inp.isEmptyName && (
              <p>Can't be empty</p>
            )} */
}
// {(inp.isDirtyName === placeholder && inp.minName && (
//   <p>input is too short</p>
// )) ||
//   (inp.isDirtyName === placeholder && inp.maxName && (
//     <p>input is too long</p>
//   ))}

// {/* {inp.isDirtyEmail === placeholder && inp.isEmptyEmail && (
//   <p>Can't be empty</p>
// )} */}
// {inp.isDirtyEmail === placeholder &&
//   inp.isEmail === false &&
//   inp.isEmptyEmail === false && <p>Not valid email</p>}
// {(inp.isDirtyEmail === placeholder && inp.minEmail && (
//   <p>input is too short</p>
// )) ||
//   (inp.isDirtyEmail === placeholder && inp.maxEmail && (
//     <p>input is too long</p>
//   ))}
// {(inp.isDirtyEmail === placeholder ||
//   inp.isDirtyPhone === placeholder) &&
//   inp.serverError !== "" && <p>{inp.serverError}</p>}
// {inp.isDirtyPhone === placeholder && inp.isEmptyPhone && (
//   <p>Can't be empty</p>
// )}
// {inp.isDirtyPhone === placeholder &&
//   inp.isEmptyPhone === false &&
//   inp.isPhone === false && <p>Not valid phone, enter +380</p>}
// {inp.isDirtyPhone === placeholder &&
//   inp.isEmptyPhone === false &&
//   inp.isPhone === true &&
//   inp.phoneLength && <p>must contain 13 symbols</p>}
