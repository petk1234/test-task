import styles from "./inputsStyles.module.scss";
function InputErrors({ inp, placeholder }) {
  const {
    email,
    phone,
    isDirtyName,
    minName,
    maxName,
    isDirtyEmail,
    minEmail,
    maxEmail,
    isEmail,
    isDirtyPhone,
    isPhone,
    serverError,
  } = inp;
  return (
    <>
      {(isDirtyName === placeholder && minName && (
        <p className={styles.signUpSection__errorTemplate}>
          Input is too short
        </p>
      )) ||
        (isDirtyName === placeholder && maxName && (
          <p className={styles.signUpSection__errorTemplate}>
            Input is too long
          </p>
        ))}

      {(isDirtyEmail === placeholder &&
        isEmail === false &&
        !minEmail &&
        !maxEmail && (
          <p className={styles.signUpSection__errorTemplate}>Not valid email</p>
        )) ||
        (isDirtyEmail === placeholder && minEmail && (
          <p className={styles.signUpSection__errorTemplate}>
            Input is too short
          </p>
        )) ||
        (isDirtyEmail === placeholder && maxEmail && (
          <p className={styles.signUpSection__errorTemplate}>
            Input is too long
          </p>
        )) ||
        ((isDirtyEmail === placeholder || isDirtyPhone === placeholder) &&
          serverError !== "" &&
          ((email === "" && isDirtyEmail === placeholder) ||
            (phone === "" && isDirtyPhone === placeholder)) && (
            <p className={styles.signUpSection__errorTemplate}>{serverError}</p>
          ))}

      {isDirtyPhone === placeholder && isPhone === false && (
        <p className={styles.signUpSection__errorTemplate}>
          Not valid phone, enter +380
        </p>
      )}
    </>
  );
}
export default InputErrors;
