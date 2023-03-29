import styles from "./ProductTile.module.css";

const ProductTile = (props) => {
  return (
    <div className={styles.tile} style={props.style}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${props.img})`,
          height: props.imgHeight,
        }}
        alt="string inverter icon"
      />
      <div className={styles.header}>{props.header}</div>
      <div className={styles.text} style={props.textStyles}>
        {props.text}
      </div>
    </div>
  );
};

export default ProductTile;
