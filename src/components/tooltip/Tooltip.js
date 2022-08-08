import styles from "./tooltipStyles.module.scss";
function Tooltip({ name = "", input }) {
  return (
    <div className={styles.tooltip}>
      <span
        className={
          name === "" ? styles.tooltip__visibleText : styles.tooltip__title
        }
      >
        {input}
      </span>
      <span className={styles.tooltip__hiddenText}>{input}</span>
    </div>
  );
}
export default Tooltip;
