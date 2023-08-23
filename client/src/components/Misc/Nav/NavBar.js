import styles from "./NavBar.module.css";
import NavButton from "./NavButton";
import logo from "../../../images/Helion_logo_nobg_light.png";
import {
  selectTSML,
  handleToggleModal,
  toggleNavDrawer,
} from "../../../utils";
import React from "react";
import { useWindowSize } from "usehooks-ts";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

const NavBar = (props) => {
  const { width } = useWindowSize();
  const barHeight = selectTSML(width, "6rem", "9rem", "9rem", "9rem");
  const burgerMenuDisplay = selectTSML(width, "flex");
  const buttonsDisplay = selectTSML(width, "none");
  const [isOpen, setOpen] = useState(false);
  const logoHeight = selectTSML(width, "7rem", "12rem", "12rem", "12rem")
  const logoMargin = selectTSML(width, "1rem 0 0rem 1rem", "5rem 0 0 2rem", "5rem 0 0 1rem", "5rem 0 0 1rem")

  const onQuoteButtonClick = () => {
    handleToggleModal(props.setQuoteModalVis);
  };

  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
  };

  const onFAQButtonClick = () => {
    let offsetPosition =
      document.getElementById("FAQsection").getBoundingClientRect().top - 130;

      setTimeout(()=>{
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100)
    
  };


  const goHome = () =>{
    window.scroll(0,0)
  }
  
  return (
    <div style={{zoom: props.zoom}}>

    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.navbar} style={{ height: barHeight }} onClick={goHome}>
          <img style={{height: logoHeight, margin: logoMargin}} className={styles.navbarLogo} src={logo} alt="company logo" />
          <div
            className={styles.buttonContainer}
            style={{ display: buttonsDisplay }}>
            <NavButton style={{marginRight: "2rem"}} text="Contact" onClick={onContactButtonClick} />
            <NavButton style={{marginRight: "2rem"}} text="FAQ" onClick={onFAQButtonClick} />
            <NavButton
              text="Free Quote"
              onClick={onQuoteButtonClick}
              black={true}
              style={{ padding: "0.8rem", fontWeight: "bold" }}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.burgerButton} invertFilter`}
        style={{ height: barHeight, display: burgerMenuDisplay }}
        onClick={toggleNavDrawer}
        id="burgerMenu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </React.Fragment>
    </div>
  );
};

export default NavBar;
