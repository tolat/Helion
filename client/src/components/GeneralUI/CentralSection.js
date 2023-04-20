import styles from "./CentralSection.module.css";


const CentralSection = (props) => {
  return (
    <div
      className={styles.centralSectionContainer}
      id={props.id}
      style={props.containerStyle}>
      <div className={styles.centralSection} style={props.style}>
        {props.children}
      </div>
    </div>
  );
};

export default CentralSection;
