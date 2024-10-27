import CentralSection from "../GeneralUI/CentralSection";
import GeneralButton from "../GeneralUI/GeneralButton";
import { handleToggleModal } from "../../utils";
import { selectTSML } from "../../utils";
import requestQuoteIcon from "../../images/energy_icon.png";

const RequestQuoteButton = (props) => {
  const w = props.viewportWidth;

  const clickHandler = () => {
    handleToggleModal(props.setModalVis);
  };

  const fontSize = selectTSML(w, "1.2rem", "1.6rem", "1.8rem", "2rem");
  const iconHeight = selectTSML(w, "2.5rem", "3.5rem", "3.5rem", "3.5rem");
  const iconMarginRight = selectTSML(w, "0.5rem", "1rem", "1rem", "1rem");
  return (
    <GeneralButton
      style={{
        backgroundColor: "#6ca0bd",
        color: "white",
        fontSize: fontSize,
        width: "100%",
        borderRadius: 0,
        height: "12rem",
        fontFamily: "Arvo",
      }}
      onClick={clickHandler}
    >
      <img
        style={{ filter: "invert(1)", height: iconHeight, marginRight: iconMarginRight }}
        src={requestQuoteIcon}
        alt="request quote icon"
      />
      Get your&nbsp;<b>Free Solar Quote!</b>
    </GeneralButton>
  );
};

export default RequestQuoteButton;
