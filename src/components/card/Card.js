import Tooltip from "../tooltip/Tooltip";
import styles from "./cardStyles.module.scss";
function Card({ user }) {
  let { photo, name, position, email, phone } = user;
  return (
    <li className={styles.usersSection__card}>
      <img className={styles.usersSection__img} src={photo} alt="" />
      <Tooltip name={name} input={name} />
      <Tooltip input={position} />
      <Tooltip input={email} />
      <Tooltip input={phone} />
    </li>
  );
}
export default Card;
