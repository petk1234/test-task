import { HashLink } from "react-router-hash-link";
import styles from "./headerStyles.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <p className={styles.header__p}>TESTTASK</p>
        </div>
        <nav className={styles.header__nav}>
          <HashLink smooth to="#users">
            <button className={styles.header__button}>Users</button>
          </HashLink>
          <HashLink smooth to="#form">
            <button className={styles.header__button}>Sign up</button>
          </HashLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
