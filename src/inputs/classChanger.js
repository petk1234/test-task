import styles from "./inputsStyles.module.scss";
function classChanger(type, inp, placeholder) {
  const {
    isDirtyName,

    isDirtyEmail,

    isDirtyPhone,

    borderColorName,
    borderColorEmail,
    borderColorPhone,
  } = inp;
  let className =
    type === "input"
      ? (borderColorName === "" && placeholder === isDirtyName) ||
        (isDirtyName !== "Your name" && placeholder === "Your name") ||
        (borderColorEmail === "" && placeholder === isDirtyEmail) ||
        (isDirtyEmail !== "Email" && placeholder === "Email") ||
        (borderColorPhone === "" && placeholder === isDirtyPhone) ||
        (isDirtyPhone !== "Phone" && placeholder === "Phone")
        ? styles.signUpSection__input
        : `${styles.signUpSection__redBorder} ${styles.signUpSection__input}`
      : type === "title" &&
        ((borderColorName === "" && placeholder === isDirtyName) ||
          (isDirtyName !== "Your name" && placeholder === "Your name") ||
          (borderColorEmail === "" && placeholder === isDirtyEmail) ||
          (isDirtyEmail !== "Email" && placeholder === "Email") ||
          (borderColorPhone === "" && placeholder === isDirtyPhone) ||
          (isDirtyPhone !== "Phone" && placeholder === "Phone"))
      ? styles.signUpSection__inputTitle
      : `${styles.signUpSection__inputTitle} ${styles.signUpSection__redTitle}`;
  return className;
}
export default classChanger;
