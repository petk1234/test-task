import styles from "./tooltipStyles.module.scss";
function Tooltip({ name = "", input }) {
  console.log(name);
  return (
    // <div className={styles.tooltip}>
    //   <span
    //     className={
    //       name === "" ? styles.tooltip__visibleText : styles.tooltip__title
    //     }
    //   >
    //     {input.length <= 35 ? input : `${input.substring(0, 35)}...`}
    //   </span>
    //   <span className={styles.tooltip__hiddenText}>{input}</span>
    // </div>

    <div className={styles.tooltip}>
      <span
        className={
          name === "" ? styles.tooltip__visibleText : styles.tooltip__title
        }
      >
        {/* {input.length <= 35 ? input : `${input.substring(0, 35)}...`} */}
        {input}
      </span>
      <span className={styles.tooltip__hiddenText}>{input}</span>
    </div>

    // <p>djd</p>
  );
}
export default Tooltip;
