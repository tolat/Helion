import styles from "./ContactBanner.module.scss";
import { useState, useEffect } from "react";
import { handleToggleModal } from "../../utils";

const ContactBanner = (props) => {
  const [bannerTop, setBannerTop] = useState("-4rem");

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 100 ? setBannerTop("-1rem") : setBannerTop("-4rem");
    };
  }, []);

  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
  };

  const onQuoteButtonClick = () => {
    handleToggleModal(props.setQuoteModalVis);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container} style={{ top: bannerTop }}>
        Interested in Solar? &nbsp;
        <div className={styles.contactButton} onClick={onContactButtonClick}>
          Contact Us
        </div>
        <div className={styles.quoteButton} onClick={onQuoteButtonClick}>
          Request Quote
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
