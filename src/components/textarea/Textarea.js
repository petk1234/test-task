import { useState } from "react";
import styles from "./textAreaStyles.module.scss";
function Textarea(props) {
  const [imgName, setImgName] = useState();
  const handleImgFile = (e) => {
    setImgName(e.target.files[0].name);
    props.onImgFile(e.target.files[0]);
  };
  return (
    <div className={styles.signUpSection__fileContainer}>
      <input
        className={styles.signUpSection__fileInput}
        type="file"
        accept="image/jpeg, image/jpg"
        onChange={handleImgFile}
        name="title"
      ></input>
      <button className={styles.signUpSection__button}>Upload</button>
      <textarea
        className={styles.signUpSection__textarea}
        value={imgName}
        placeholder="Upload your photo"
      ></textarea>
    </div>
  );
}
export default Textarea;
