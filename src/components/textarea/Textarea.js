import { useState } from "react";
import TextareaErrors from "./TextareaErrors";
import styles from "./textAreaStyles.module.scss";
function Textarea({ onImgFile, inp, onBlurPhoto }) {
  const [imgName, setImgName] = useState();
  const { imgEmpty, imgSize, isDirtyPhoto } = inp;
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
    <>
      <div className={styles.signUpSection__fileContainer}>
        <input
          className={styles.signUpSection__fileInput}
          type="file"
          accept="image/jpeg, image/jpg"
          onChange={handleImgFile}
          name="title"
          onBlur={() => onBlurPhoto()}
          required
        />
        <button
          className={
            (!isDirtyPhoto && imgSize) || (isDirtyPhoto && !imgEmpty && imgSize)
              ? styles.signUpSection__button
              : `${styles.signUpSection__redBorderButton} ${styles.signUpSection__button}`
          }
        >
          Upload
        </button>
        <textarea
          className={
            (!isDirtyPhoto && imgSize) || (isDirtyPhoto && !imgEmpty && imgSize)
              ? styles.signUpSection__textarea
              : `${styles.signUpSection__redBorderTextarea} ${styles.signUpSection__textarea}`
          }
          value={imgName}
          placeholder="Upload your photo"
          disabled
        />
      </div>
      <TextareaErrors inp={inp} />
    </>
  );
}
export default Textarea;
