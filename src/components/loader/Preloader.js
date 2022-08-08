import Spinner from "react-bootstrap/Spinner";
import styles from "./loaderStyles.module.scss";
function Preloader() {
  return (
    <div className={styles.loaderContainer}>
      <Spinner animation="border" variant="info" className={styles.loader} />
    </div>
  );
}
export default Preloader;
