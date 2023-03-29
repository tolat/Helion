import { useWindowSize } from "usehooks-ts";
import expand from "../../images/expand.svg";
import { scrollToId } from "../../utils";
import styles from "./ExpandButton.module.css";

const ExpandButton = (props) => {
  const { width } = useWindowSize();
  const onExpand = () => {
    scrollToId(props.scrollToId, width);
  };

  return (
    <div
      style={props.style}
      className={`${styles.expandButton} invertFilter`}
      onClick={onExpand}>
      <img className={styles.expandButtonImg} src={expand} alt="expand" />
    </div>
  );
};

export default ExpandButton;
