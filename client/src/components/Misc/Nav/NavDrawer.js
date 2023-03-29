import styles from "./NavDrawer.module.css";
import NavButton from "./NavButton";
import { handleToggleModal, clickBurgerMenuIcon } from "../../../utils";

const NavDrawer = (props) => {
  const onQuoteButtonClick = () => {
    handleToggleModal(props.setQuoteModalVis);
    clickBurgerMenuIcon(true);
  };

  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
    clickBurgerMenuIcon(true);
  };

  const onFAQButtonClick = () => {
    const offsetPosition =
      document.getElementById("FAQsection").getBoundingClientRect().top - 60;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    clickBurgerMenuIcon(true);
  };

  return (
    <div id="navDrawer" className={styles.container}>
      <div className={styles.dropdownButtons}>
        <NavButton text="Contact" onClick={onContactButtonClick} />
        <NavButton text="FAQ" onClick={onFAQButtonClick} />
        <NavButton text="Free Quote" onClick={onQuoteButtonClick} />
      </div>
    </div>
  );
};

export default NavDrawer;
