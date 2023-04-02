import GeneralButton from "../../GeneralUI/GeneralButton";
import GeneralInput from "../../GeneralUI/GeneralInput";
import modalStyles from "../../GeneralUI/Modal.module.css";
import styles from "./ContactModal.module.css";
import { selectTSML, sendMessage, showFlash, closeFlash, isMobile } from "../../../utils";
import React, { useState, useRef } from "react";
import Modal from "../../GeneralUI/Modal";
import Spinner from "react-bootstrap/Spinner";

import at_icon from "../../../images/at_icon.png";
import msg_icon from "../../../images/message_icon.png";
import sendmail_icon from "../../../images/sendmail_icon.png";
import { useWindowSize } from "usehooks-ts";

const ContactModal = (props) => {
  const w = props.viewportWidth;
  const inputDisplay = selectTSML(w, "column");
  const inputWidth = selectTSML(w, "100%", "30%", "30%", "30%");
  const textAreaBottMarg = selectTSML(w, "2rem");
  const scrollMaskImage = selectTSML(w, "", "none", "none", "none");
  const quoteModalWidth = selectTSML(w, "100%", "", "", "");
  const quoteModalHeight = selectTSML(w, "100%", "", "", "");
  const quoteModalMaxHeight = selectTSML(w, "", "80%", "80%", "80%");
  const buttonFontSize = selectTSML(w, "1.4rem", "", "", "");

  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");

  const userEmailRef = useRef();
  const userNameRef = useRef();
  const userPhoneRef = useRef();
  const userMessageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      document.getElementById("contactModalSpinner").style.display == "block"
    ) {
      return;
    }

    const formData = {
      name: userNameRef.current.value,
      phone: userPhoneRef.current.value,
      email: userEmailRef.current.value,
      message: userMessageRef.current.value,
    };

    const resetSuccess = () => {
      userEmailRef.current.value = "";
      userNameRef.current.value = "";
      userPhoneRef.current.value = "";
      userMessageRef.current.value = "";

      setSpinnerDisplay("none");
      setIconDisplay("block");

      showFlash(
        "appFlash",
        "Message successfully sent!",
        "Thanks for getting in touch. We will do our best to respond to your inquiry within 3 business days.",
        "rgb(55,55,55)",
        "white",
        "white"
      );

      setTimeout(() => {
        closeFlash("appFlash");
      }, 5000);
    };

    const resetFailure = (error) => {
      setSpinnerDisplay("none");
      setIconDisplay("block");

      showFlash(
        "appFlash",
        "There was an error sending your message.",
        error.message,
        "rgb(231,164,164)"
      );
    };

    setSpinnerDisplay("block");
    setIconDisplay("none");

    try {
      sendMessage(formData, "/quote", resetSuccess, resetFailure);
    } catch (e) {
      resetFailure(e);
    }
  };

  return (
   

    <Modal
      viewportWidth={props.viewportWidth}
      modalVis={props.modalVis}
      setModalVis={props.setModalVis}
      modalWidth={quoteModalWidth}
      modalHeight={quoteModalHeight}
      modalMaxHeight={quoteModalMaxHeight}
      side>
      <form className={styles.form} style={props.style} onSubmit={handleSubmit}>
        <div
          className={`${styles.nonButtonContainer} noscroll`}
          style={{
            maskImage: scrollMaskImage,
            WebkitMaskImage: scrollMaskImage,
            zoom: props.zoom
          }}>
          <div className={modalStyles.sectionContainer}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={modalStyles.inputIcon}
                src={at_icon}
                alt="at icon"
              />{" "}
              <div>Contact Information</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: inputDisplay,
                justifyContent: "space-between",
              }}>
              <GeneralInput
                label="Full Name"
                type="text"
                style={{ maxWidth: inputWidth }}
                placeholder="Name"
                inputRef={userNameRef}
                required={true}
              />
              <GeneralInput
                label="Phone Number"
                type="text"
                style={{ maxWidth: inputWidth }}
                placeholder="Number"
                inputRef={userPhoneRef}
              />
              <GeneralInput
                label="Email Address"
                type="email"
                style={{ maxWidth: inputWidth }}
                placeholder="Email"
                inputRef={userEmailRef}
                required={true}
              />
            </div>
          </div>
          <div
            className={modalStyles.sectionContainer}
            style={{ marginBottom: textAreaBottMarg }}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={modalStyles.inputIcon}
                src={msg_icon}
                alt="msg icon"
              />{" "}
              <div>Message</div>
            </div>
            <textarea
              ref={userMessageRef}
              className={styles.textArea}
              rows="8"
              required
            />
          </div>
          {isMobile(w)?<SubmitButton buttonFontSize={buttonFontSize} iconDisplay={iconDisplay} spinnerDisplay={spinnerDisplay}/>:null }       
        </div>
            {!isMobile(w)?<SubmitButton buttonFontSize={buttonFontSize} iconDisplay={iconDisplay} spinnerDisplay={spinnerDisplay}/>:null }       
      </form>
    </Modal>
  
  );
};

const SubmitButton = props =>{
  const {width} = useWindowSize()
  const marginBottom = selectTSML(width, "18rem")
  return(
    <GeneralButton
  style={{
    backgroundColor: "transparent",
    boxShadow: "none",
    fontSize: "1.6rem",
    width: "100%",
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: marginBottom
  }}>
  <div style={{ fontSize: props.buttonFontSize }}>Send Message</div>

  <img
    style={{
      marginLeft: "0.6rem",
      height: "2.3rem",
      display: props.iconDisplay,
    }}
    src={sendmail_icon}
    alt="send icon"
  />
  <div
    id="contactModalSpinner"
    style={{ marginLeft: "2rem", display: props.spinnerDisplay }}>
    <Spinner animation="border" role="status" />
  </div>
</GeneralButton>
  )
  

}

export default ContactModal;
