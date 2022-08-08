import styles from "../form/formStyles.module.scss";
import success from "./success.svg";
function GreetUser() {
  return (
    <div className={styles.signUpSection__formPosted}>
      <h1 className={styles.signUpSection__title}>
        User successfully registered
      </h1>
      <img className={styles.signUpSection__img} src={success} alt="" />
    </div>
  );
}
export default GreetUser;
