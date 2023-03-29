import styles from "./CentralTile.module.css";

const CentralTile = (props) => {
  return (
    <div className={styles.centralTile} style={props.style}>
      {props.children}
    </div>
  );
};

export default CentralTile;
