import CentralSection from "../GeneralUI/CentralSection";
import GeneralButton from "../GeneralUI/GeneralButton";
import { handleToggleModal } from "../../utils";
import { selectTSML } from "../../utils";

const RequestQuoteButton = (props) => {
  const w = props.viewportWidth;

  const clickHandler = () => {
    handleToggleModal(props.setModalVis);
  };

  const buttonWidth = selectTSML(w, "80%", "80%", "80%", "80%");
  const margin = selectTSML(w, "2rem 0 5rem 0", "4rem 0 5rem 0", "4rem 0 5rem 0", "4rem 0 5rem 0")
  const fontSize = selectTSML(w, "1rem", "1.5rem", "1.8rem", "1.8rem")

  return (
    <CentralSection>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: margin,
        }}>
        <GeneralButton
          style={{
            backgroundColor: "#57ae57",
            color: "white",
            fontSize: fontSize,

            width: buttonWidth,
            height: "4rem",
          }}
          onClick={clickHandler}>
          Get your&nbsp;<b>Free Solar Quote!</b>
        </GeneralButton>
      </div>
    </CentralSection>
  );
};

export default RequestQuoteButton;
