import Modal from "../../GeneralUI/Modal";
import styles from "./FreeQuoteModal.module.css";
import GeneralInput from "../../GeneralUI/GeneralInput";
import GeneralButton from "../../GeneralUI/GeneralButton";
import {
  selectTSML,
  showFlash,
  closeFlash,
  sendMessage,
  isMobile,
} from "../../../utils";
import modalStyles from "../../GeneralUI/Modal.module.css";
import Spinner from "react-bootstrap/Spinner";

import roof_icon from "../../../images/roof_icon.png";
import at_icon from "../../../images/at_icon.png";
import sendmail_icon from "../../../images/sendmail_icon.png";
import { useState, useRef } from "react";
import { useWindowSize } from "usehooks-ts";

const FreeQuoteModal = (props) => {
  const w = props.viewportWidth;
  const lowerSectionFlexDirection = selectTSML(w, "column", "", "", "");
  const lowerSectionInputsFlexDirection = selectTSML(
    w,
    "column",
    "row",
    "row",
    "row"
  );
  const upperFlexDirection = selectTSML(w, "column", "row", "row", "row");
  const quoteModalWidth = selectTSML(w, "100%");
  const quoteModalHeight = selectTSML(w, "100%");
  const quoteModalMaxHeight = selectTSML(w, "", "80%", "80%", "80%");
  const scrollMaskImage = selectTSML(w, "", "none", "none", "none");
  const buttonFontSize = selectTSML(w, "1.4rem", "", "", "");
  const formPadding = selectTSML(w, "3rem 1rem 3rem 1rem");
  const inputLabelMaxWidth = selectTSML(w, "100%", "50%", "50%", "50%");

  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");

  const formFields = [
    "userAddress",
    "userEmail",
    "userPhone",
    "userFirstName",
    "userLastName",
    "roofMaterial",
    "roofAge",
    "averageBill",
    "panelRating",
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

    if (
      document.getElementById("quoteModalSpinner").style.display === "block"
    ) {
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

    // Report conversion to Google
    window.gtag("event", "conversion", {
      send_to: "AW-11336437981/Cg6TCPHf8OEYEN2h0Z0q",
    });

    try {
      formData.promoCode = props.promoCode;
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
      modalMaxHeight={quoteModalMaxHeight}
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        style={{ padding: formPadding }}
      >
        <div
          className={`${styles.nonButtonContainer} noscroll`}
          style={{
            maskImage: scrollMaskImage,
            WebkitMaskImage: scrollMaskImage,
            zoom: props.zoom,
          }}
        >
          <div className={modalStyles.sectionContainer}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={modalStyles.inputIcon}
                src={at_icon}
                alt="roof icon"
              />{" "}
              <div>Contact Information</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: upperFlexDirection,
              }}
            >
              <GeneralInput
                label="first name *"
                type="text"
                inputRef={formRefs.userFirstName}
                required={true}
              />
              <GeneralInput
                label="last name *"
                type="text"
                inputRef={formRefs.userLastName}
                required={true}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: upperFlexDirection,
              }}
            >
              <GeneralInput
                label="phone *"
                type="number"
                inputRef={formRefs.userPhone}
                required={true}
              />
              <GeneralInput
                label="email *"
                type="email"
                inputRef={formRefs.userEmail}
                required={true}
              />
            </div>
            <GeneralInput
              label="Project Address *"
              type="text"
              style={{ maxWidth: "100%" }}
              inputRef={formRefs.userAddress}
              required={true}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: lowerSectionFlexDirection,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div className={modalStyles.sectionContainer}>
              <div className={modalStyles.sectionHeader}>
                <img
                  className={modalStyles.inputIcon}
                  src={roof_icon}
                  alt="roof icon"
                />{" "}
                <div>Project Details</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: lowerSectionInputsFlexDirection,
                  width: "100%",
                }}
              >
                <GeneralInput
                  label="Roof Material *"
                  type="text"
                  style={{ maxWidth: "100%" }}
                  inputRef={formRefs.roofMaterial}
                  required={true}
                />
                <GeneralInput
                  label="Roof Age"
                  type="number"
                  inputRef={formRefs.roofAge}
                  required={false}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: lowerSectionInputsFlexDirection,
                  width: "100%",
                }}
              >
                <GeneralInput
                  label="Avg. Monthly Hydro Bill ($) *"
                  type="number"
                  style={{ maxWidth: inputLabelMaxWidth }}
                  inputRef={formRefs.averageBill}
                  required={true}
                />
                <GeneralInput
                  label="Electrical Panel Rating (if available)"
                  type="text"
                  style={{ maxWidth: inputLabelMaxWidth }}
                  inputRef={formRefs.panelRating}
                  required={false}
                />
              </div>
            </div>
          </div>

          {props.promoCode ? (
            <h2 style={{ padding: "0 1rem" }}>
              Promotion Applied: {props.promoCode}
            </h2>
          ) : null}
          {isMobile(w) ? (
            <SubmitButton
              buttonFontSize={buttonFontSize}
              iconDisplay={iconDisplay}
              spinnerDisplay={spinnerDisplay}
            />
          ) : null}
        </div>
        {!isMobile(w) ? (
          <SubmitButton
            buttonFontSize={buttonFontSize}
            iconDisplay={iconDisplay}
            spinnerDisplay={spinnerDisplay}
          />
        ) : null}
      </form>
    </Modal>
  );
};

const SubmitButton = (props) => {
  const { width } = useWindowSize();
  const marginBottom = selectTSML(width, "18rem");

  return (
    <GeneralButton
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        fontSize: "1.3rem",
        alignSelf: "flex-start",
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: marginBottom,
      }}
    >
      <div className={styles.submitButtonContainer}>
        <div style={{ fontSize: props.buttonFontSize }}>Request Quote</div>

        <img
          style={{
            marginLeft: "0.6rem",
            height: "2rem",
            display: props.iconDisplay,
            filter: "invert(1)",
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
          }}
        >
          <Spinner animation="border" role="status" />
        </div>
      </div>
    </GeneralButton>
  );
};

export default FreeQuoteModal;
