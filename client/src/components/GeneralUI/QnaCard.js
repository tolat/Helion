import styles from "./QnaCard.module.css";

const QnaCard = (props) => {
  return (
    <div className={styles.container} style={props.style}>
      <div className={styles.qContainer}>
        <div className={styles.q}>Q:</div>
        <div className={styles.question} style={props.qaStyle}>{props.question}</div>
      </div>
      <div className={styles.aContainer}>
        <div className={styles.a}>A:</div>
        <div className={styles.answer} style={props.textStyle}>{props.answer}</div>
      </div>
    </div>
  );
};

export default QnaCard;
