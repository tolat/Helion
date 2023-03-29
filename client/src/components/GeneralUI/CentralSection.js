import styles from "./CentralSection.module.css";
import { selectTSML } from "../../utils";
import { useWindowSize } from "usehooks-ts";

const CentralSection = (props) => {
  const { width } = useWindowSize();
  const padding = selectTSML(width, "1rem", "2rem", "2rem", "2rem");
  return (
    <div
      className={styles.centralSectionContainer}
      id={props.id}
      style={{ padding: padding }}>
      <div className={styles.centralSection} style={props.style}>
        {props.children}
      </div>
    </div>
  );
};

export default CentralSection;
