import styles from "./textAreaStyles.module.scss";
function TextareaErrors({ inp }) {
  const { imgEmpty, imgSize, isDirtyPhoto } = inp;
  return (
    <>
      {(imgSize === false && (
        <div className={styles.signUpSection__errorTemplate}>
          Too big size of the image
        </div>
      )) ||
        (imgEmpty && isDirtyPhoto && (
          <div className={styles.signUpSection__errorTemplate}>
            There is no image
          </div>
        ))}
    </>
  );
}
export default TextareaErrors;
