import styles from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <div
      className={`${styles.navButton} ${
        props.black ? styles.navButtonBlack : ""
      }`}
      style={props.style}
      onClick={props.onClick}>
      <div>{props.text}</div>
    </div>
  );
};

export default NavButton;
