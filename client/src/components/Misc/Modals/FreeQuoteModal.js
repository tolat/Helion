import Modal from "../../GeneralUI/Modal";
import styles from "./FreeQuoteModal.module.css";
import GeneralInput from "../../GeneralUI/GeneralInput";
import GeneralButton from "../../GeneralUI/GeneralButton";
import { selectTSML, showFlash, closeFlash, sendMessage, isMobile } from "../../../utils";
import modalStyles from "../../GeneralUI/Modal.module.css";
import Spinner from "react-bootstrap/Spinner";

import energy_icon from "../../../images/energy_icon.png";
import roof_icon from "../../../images/roof_icon.png";
import at_icon from "../../../images/at_icon.png";
import solar_icon from "../../../images/solar_icon.png";
import sendmail_icon from "../../../images/sendmail_icon.png";
import { useState, useRef } from "react";
import { useWindowSize } from "usehooks-ts";

const FreeQuoteModal = (props) => {
  const w = props.viewportWidth;
  const col = "column";
  const lowerSectionFlexDirection = selectTSML(w, "column", "", "", "");
  const lowerSectionInputsFlexDirection = selectTSML(w, col, col, col, col);
  const upperFlexDirection = selectTSML(w, "column", "row", "row", "row");
  const quoteModalWidth = selectTSML(w, "100%");
  const quoteModalHeight = selectTSML(w, "100%");
  const quoteModalMaxHeight = selectTSML(w, "", "80%", "80%", "80%");
  const scrollMaskImage = selectTSML(w, "", "none", "none", "none");
  const equipPrefMarginBottom = selectTSML(w, "2rem", "", "", "");
  const buttonFontSize = selectTSML(w, "1.4rem", "", "", "");

  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");

  const formFields = [
    "userAddress",
    "userEmail",
    "userPhone",
    "userName",
    "roofMaterial",
    "roofAge",
    "roofPitch",
    "targetOffset",
    "averageBill",
    "billingCycle",
    "systemType",
    "batteryBackup",
    "budget",
  ];

  const formRefs = {};
  for (let field of formFields) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    formRefs[field] = useRef();
  }

  const clearModal = () => {
    for (let field of formFields) {
      formRefs[field].current.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (document.getElementById("quoteModalSpinner").style.display == "block") {
      return;
    }

    const formData = {};
    for (let field of formFields) {
      formData[field] = formRefs[field].current.value;
    }

    const resetSuccess = () => {
      clearModal();

      setSpinnerDisplay("none");
      setIconDisplay("block");

      showFlash(
        "appFlash",
        "Quote sent successfully!",
        "Thank you for your request. We will get in touch with you if we have any questions, otherwise you can expect a quote within 3 business days.",
        "rgb(55,55,55)",
        "white",
        "white"
      );

      setTimeout(() => {
        closeFlash("appFlash");
      }, 20000);
    };

    const resetFailure = (error) => {
      setSpinnerDisplay("none");
      setIconDisplay("block");

      showFlash(
        "appFlash",
        "There was an error sending your request.",
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
      setModalVis={props.setModalVis}
      modalVis={props.modalVis}
      modalWidth={quoteModalWidth}
      modalHeight={quoteModalHeight}
      modalMaxHeight={quoteModalMaxHeight}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
                alt="roof icon"
              />{" "}
              <div>Contact Information</div>
            </div>
            <GeneralInput
              label="project address"
              type="text"
              style={{ maxWidth: "100%" }}
              placeholder="Address"
              inputRef={formRefs.userAddress}
              required={true}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: upperFlexDirection,
              }}>
              <GeneralInput
                label="your name"
                type="text"
                placeholder="Name"
                inputRef={formRefs.userName}
                required={true}
              />
              <GeneralInput
                label="phone number"
                type="number"
                placeholder="Phone"
                inputRef={formRefs.userPhone}
                required={true}
              />
              <GeneralInput
                label="email address"
                type="email"
                placeholder="Email"
                inputRef={formRefs.userEmail}
                required={true}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: lowerSectionFlexDirection,
              width: "100%",
              justifyContent: "space-between",
            }}>
            <div className={modalStyles.sectionContainer}>
              <div className={modalStyles.sectionHeader}>
                <img
                  className={modalStyles.inputIcon}
                  src={roof_icon}
                  alt="roof icon"
                />{" "}
                <div>Roof Details</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: lowerSectionInputsFlexDirection,
                }}>
                <GeneralInput
                  label="Roof Material"
                  type="text"
                  style={{ maxWidth: "100%" }}
                  placeholder="Asphalt, Metal, etc. "
                  inputRef={formRefs.roofMaterial}
                  required={true}
                />
                <GeneralInput
                  label="Roof Age"
                  type="text"
                  placeholder="Num. Years"
                  inputRef={formRefs.roofAge}
                  required={true}
                />
                <GeneralInput
                  label="Roof Pitch"
                  type="text"
                  placeholder="Flat, Mid, Steep?"
                  inputRef={formRefs.roofPitch}
                  required={true}
                />
              </div>
            </div>
            <div className={modalStyles.sectionContainer}>
              <div className={modalStyles.sectionHeader}>
                <img
                  className={modalStyles.inputIcon}
                  src={energy_icon}
                  alt="energy icon"
                />{" "}
                <div>Energy Details</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: lowerSectionInputsFlexDirection,
                }}>
                <GeneralInput
                  label="Target Energy Offset"
                  type="text"
                  style={{ maxWidth: "100%" }}
                  placeholder="0%-100% "
                  inputRef={formRefs.targetOffset}
                  required={true}
                />
                <GeneralInput
                  label="Average Hydro Bill"
                  type="text"
                  style={{ maxWidth: "100%" }}
                  placeholder="Dollar Amount"
                  inputRef={formRefs.averageBill}
                  required={true}
                />
                <GeneralInput
                  label="Billing Cycle"
                  type="text"
                  style={{ maxWidth: "100%" }}
                  placeholder="1 mo, 2 mo, etc."
                  inputRef={formRefs.billingCycle}
                  required={true}
                />
              </div>
            </div>
            <div
              className={modalStyles.sectionContainer}
              style={{ marginBottom: equipPrefMarginBottom }}>
              <div className={modalStyles.sectionHeader}>
                <img
                  className={modalStyles.inputIcon}
                  src={solar_icon}
                  alt="energy icon"
                />{" "}
                <div>Equipment Preference</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: lowerSectionInputsFlexDirection,
                }}>
                <GeneralInput
                  label="System Type"
                  type="text"
                  style={{ maxWidth: "100%" }}
                  placeholder="Off-Grid or Grid-Tied"
                  inputRef={formRefs.systemType}
                  required={true}
                />
                <GeneralInput
                  label="Battery Backup"
                  type="text"
                  style={{ maxWidth: "100%" }}
                  placeholder="Yes/No"
                  inputRef={formRefs.batteryBackup}
                  required={true}
                />
                <GeneralInput
                  label="Budget"
                  type="text"
                  style={{ maxWidth: "100%" }}
                  placeholder="Dollar Range"
                  inputRef={formRefs.budget}
                  required={true}
                />
              </div>
            </div>
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

  return(<GeneralButton
    style={{
      backgroundColor: "transparent",
      boxShadow: "none",
      fontSize: "1.6rem",
      alignSelf: "flex-start",
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: marginBottom
    }}>
    <div style={{ fontSize: props.buttonFontSize }}>Submit Quote Request</div>

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
      id="quoteModalSpinner"
      style={{
        marginLeft: "1rem",
        display: props.spinnerDisplay,
        zoom: "0.8",
      }}>
      <Spinner animation="border" role="status" />
    </div>
  </GeneralButton>)
}

export default FreeQuoteModal;
