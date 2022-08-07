import { useState } from "react";
import styles from "./textAreaStyles.module.scss";
function Textarea({ onImgFile, inp }) {
  const [imgName, setImgName] = useState();
  const handleImgFile = (e) => {
    if (e.target.files[0]) {
      setImgName(e.target.files[0].name);
      onImgFile(e.target.files[0]);
    } else {
      setImgName("");
      onImgFile(-1);
    }
  };
  return (
    <div className={styles.signUpSection__fileContainer}>
      <input
        className={styles.signUpSection__fileInput}
        type="file"
        accept="image/jpeg, image/jpg"
        onChange={handleImgFile}
        name="title"
        required
      ></input>
      <button className={styles.signUpSection__button}>Upload</button>
      {(inp.imgSize === false && <p>too big size of the image</p>) ||
        (inp.imgEmpty && <p>there is no image</p>)}
      <textarea
        className={styles.signUpSection__textarea}
        value={imgName}
        placeholder="Upload your photo"
        disabled
      ></textarea>
    </div>
  );
}
export default Textarea;
