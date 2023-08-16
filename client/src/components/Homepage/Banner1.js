import FullWidthSection from "../GeneralUI/FullWidthSection";
import BlackFade from "../GeneralUI/BlackFade";
import styles from "./Banner1.module.css";
import { selectTSML } from "../../utils";
import ExpandButton from "../GeneralUI/ExpandButton";

import bg_medium from "../../images/solarspan10.jpg";
import bg_parminder from "../../images/parminder.jpg"
import nabcepSeal from "../../images/pv_assoc_seal.png";

const Banner1 = (props) => {
  const w = props.viewportWidth;
  const background = selectTSML(w, bg_parminder, bg_parminder, bg_parminder, bg_parminder);
  const minHeight = selectTSML(w, "100vh", "28rem", "28rem", "46rem");
  const fontSize = selectTSML(w, "1.5rem", "2rem", "2.2rem", "");
  const nebcepJustify = selectTSML(w, "center", "end", "", "");
  const expandButtonMargin = selectTSML(w, "4rem", "", "", "");
  const textAlign = selectTSML(w, "left");
  const nabcepDisplay = selectTSML(w, "flex");
  const bannerAlign = selectTSML(w, "center");
  const imgHeight = selectTSML(w, "8rem", "8rem", "9rem", "");
  const imgMargin = selectTSML(
    w,
    "2rem 3rem 0 3rem",
    "1rem 3rem 0 3rem",
    "1rem 3rem 0 3rem",
    ""
  );
  const backgroundAttachment = selectTSML(
    w,
    "scroll",
    "fixed",
    "fixed",
    "fixed"
  );
  const textMargin = selectTSML(w, "7rem 1rem 0 1rem");
  const expandButtonMarginBottom = selectTSML(
    w,
    "0rem",
    "-4.7rem",
    "-4.7rem",
    "-4.7rem"
  );
  const phoneNumberFontSize = selectTSML(w, "1.3rem", "2rem", "2.4rem", "2.4rem");
  const phoneNumberMargin = selectTSML(
    w,
    "1rem 0 0 1rem",
    "1rem 2.7rem 0 0",
    "1rem 2.7rem 0 0",
    "1rem 2.7rem 0 0"
  );
  const phoneNumberTextAlign = selectTSML(w, "left");

  return (
    <div style={{ zoom: props.zoom }}>
      <FullWidthSection>
        <BlackFade
          backgroundImage={background}
          backgroundOpacity="0.80"
          backgroundAttachment={backgroundAttachment}
        >
          <div
            className={styles.container}
            style={{ alignItems: bannerAlign, minHeight: minHeight }}
          >
            <div className={styles.upperContainer}>
              <div
                className={styles.text}
                style={{
                  fontSize: fontSize,
                  textAlign: textAlign,
                  margin: textMargin,
                }}
              >
                Residential solar installation<br></br>
                Pre-wiring and consultation<br></br>
                Off-grid and grid-tied systems<br></br>
              </div>
              <div
                style={{
                  fontSize: phoneNumberFontSize,
                  margin: phoneNumberMargin,
                  textAlign: phoneNumberTextAlign,
               fontFamily: "Arvo",
               fontWeight: "bold"
                }}
              >
                604.723.5351
              </div>

              <div
                className={styles.nabcepContainer}
                style={{
                  display: nabcepDisplay,
                  justifyContent: nebcepJustify,
                }}
              >
                <img
                  style={{ height: imgHeight, margin: imgMargin }}
                  className={styles.nabcep}
                  src={nabcepSeal}
                  alt="nabcep seal"
                />
              </div>
            </div>
            <div
              className={styles.expandButtonContainer}
              style={{ marginBottom: expandButtonMarginBottom }}
            >
              <ExpandButton
                style={{
                  marginBottom: expandButtonMargin,
                }}
                scrollToId="solarProgramsSection"
              />
            </div>
          </div>
        </BlackFade>
      </FullWidthSection>
    </div>
  );
};

export default Banner1;
