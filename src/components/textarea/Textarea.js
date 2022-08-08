import { useState } from "react";
import styles from "./textAreaStyles.module.scss";
function Textarea({ onImgFile, inp, onBlurPhoto }) {
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
            (!inp.isDirtyPhoto && inp.imgSize) ||
            (inp.isDirtyPhoto && !inp.imgEmpty && inp.imgSize)
              ? styles.signUpSection__button
              : `${styles.red} ${styles.signUpSection__button}`
          }
        >
          Upload
        </button>
        <textarea
          className={
            (!inp.isDirtyPhoto && inp.imgSize) ||
            (inp.isDirtyPhoto && !inp.imgEmpty && inp.imgSize)
              ? styles.signUpSection__textarea
              : `${styles.red} ${styles.signUpSection__textarea}`
          }
          value={imgName}
          placeholder="Upload your photo"
          disabled
        />
        {/* {(inp.imgSize === false && <p>too big size of the image</p>) ||
        (inp.imgEmpty && inp.isDirtyPhoto && <div>there is no image</div>)} */}
      </div>
      {(inp.imgSize === false && <p>too big size of the image</p>) ||
        (inp.imgEmpty && inp.isDirtyPhoto && <div>there is no image</div>)}
    </>
  );
}
export default Textarea;
