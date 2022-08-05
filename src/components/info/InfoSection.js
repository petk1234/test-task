import { HashLink } from "react-router-hash-link";
import styles from "./infoStyles.module.scss";
function InfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h1 className={styles.section__title}>
          Test assignment for front-end developer
        </h1>
        <p className={styles.section__textInfo}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <HashLink smooth to={"#form"}>
          <button className={styles.section__button}>Sign up</button>
        </HashLink>
      </div>
    </section>
  );
}
export default InfoSection;
