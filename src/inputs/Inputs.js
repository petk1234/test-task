import styles from "./inputsStyles.module.scss";
function Inputs({ placeholderArr, onHandleInput }) {
  const handleChange = (e) => {
    onHandleInput(e.target.value, e.target.placeholder);
  };
  return (
    <>
      <div className={styles.signUpSection__inputsContainer}>
        {placeholderArr.map((placeholder) => (
          <input
            className={styles.signUpSection__input}
            key={placeholder}
            type="text"
            onChange={handleChange}
            placeholder={placeholder}
            required
          />
        ))}
      </div>
      <p className={styles.signUpSection__phoneTemplate}>
        +38 (XXX) XXX - XX - XX
      </p>
    </>
  );
}
export default Inputs;
