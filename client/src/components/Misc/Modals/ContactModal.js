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
  const inputDisplay = selectTSML(w, "column", "row", "row", "row");
  const textAreaBottMarg = selectTSML(w, "2rem");
  const scrollMaskImage = selectTSML(w, "", "none", "none", "none");
  const quoteModalWidth = selectTSML(w, "100%", "", "", "");
  const quoteModalHeight = selectTSML(w, "100%", "", "", "");
  const quoteModalMaxHeight = selectTSML(w, "", "80%", "80%", "80%");
  const buttonFontSize = selectTSML(w, "1.4rem", "", "", "");
  const formPadding = selectTSML(w, "3rem 1rem 3rem 1rem")


  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");

  const userEmailRef = useRef();
  const userFirstNameRef = useRef();
  const userLastNameRef = useRef();
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
      firstName: userFirstNameRef.current.value,
      lastName: userLastNameRef.current.value,
      phone: userPhoneRef.current.value,
      email: userEmailRef.current.value,
      message: userMessageRef.current.value,
    };

    const resetSuccess = () => {
      userEmailRef.current.value = "";
      userFirstNameRef.current.value = "";
      userLastNameRef.current.value="";
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
      sendMessage(formData, "/message", resetSuccess, resetFailure);
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
      <form className={styles.form} style={{padding: formPadding}} onSubmit={handleSubmit}>
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
                label="First Name *"
                type="text"
                style={{ maxWidth: "100%" }}
                inputRef={userFirstNameRef}
                required={true}
              />
              <GeneralInput
                label="Last Name *"
                type="text"
                style={{ maxWidth: "100%" }}
                inputRef={userLastNameRef}
                required={true}
              />
              
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: inputDisplay,
                justifyContent: "space-between",
              }}>
                <GeneralInput
                label="Phone"
                type="text"
                style={{ maxWidth: "100%" }}
                inputRef={userPhoneRef}
              />
              <GeneralInput
                label="Email *"
                type="email"
                style={{ maxWidth: "100%" }}
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
              rows="5"
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
    fontSize: "1.3rem",
    width: "100%",
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: marginBottom
  }}>
    <div className={styles.submitButtonContainer}>
    <div style={{ fontSize: props.buttonFontSize }}>Send Message</div>

<img
  style={{
    marginLeft: "0.6rem",
    height: "2rem",
    display: props.iconDisplay,
    filter: "invert(1)"
  }}
  src={sendmail_icon}
  alt="send icon"
/>
<div
  id="contactModalSpinner"
  style={{ marginLeft: "2rem", display: props.spinnerDisplay }}>
  <Spinner animation="border" role="status" />
</div>
    </div>
 
</GeneralButton>
  )
  

}

export default ContactModal;
