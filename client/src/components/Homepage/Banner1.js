import FullWidthSection from "../GeneralUI/FullWidthSection";
import BlackFade from "../GeneralUI/BlackFade";
import styles from "./Banner1.module.css";
import { selectTSML } from "../../utils";
import ExpandButton from "../GeneralUI/ExpandButton";

import bg_mobile from "../../images/solarspan1_mobile.jpg";
import bg_medium from "../../images/solarspan1_medium.jpg";
import nabcepSeal from "../../images/pv_assoc_seal.png";

const Banner1 = (props) => {
  const w = props.viewportWidth;
  const background = selectTSML(w, bg_mobile, bg_mobile, bg_medium, bg_medium);
  const minHeight = selectTSML(w, "100vh", "28rem", "28rem", "46rem");
  const fontSize = selectTSML(w, "1.5rem", "2rem", "2.2rem","");
  const nebcepJustify = selectTSML(w, "center", "end", "", "");
  const expandButtonScale = selectTSML(w, "1.5", "", "", "");
  const expandButtonMargin = selectTSML(w, "4rem", "", "", "");
  const textAlign = selectTSML(w, "left");
  const nabcepDisplay = selectTSML(w, "");
  const bannerAlign = selectTSML(w, "center");
  const imgHeight = selectTSML(w, "8rem", "8rem", "9rem", "")
  const imgMargin = selectTSML(w, "", "1rem 3rem 0 3rem", "1rem 3rem 0 3rem","")
  const backgroundAttachment = selectTSML(w, "scroll", "fixed", "fixed", "fixed")
  const textMargin = selectTSML (w, "7rem 1rem 0 1rem")


  return (
    <FullWidthSection>
      <BlackFade
        backgroundImage={background}
        backgroundOpacity="0.75"
        backgroundAttachment={backgroundAttachment}>
        <div
          className={styles.container}
          style={{ alignItems: bannerAlign, minHeight: minHeight}}>
          <div className={styles.upperContainer}>
            <div
              className={styles.text}
              style={{ fontSize: fontSize, textAlign: textAlign , margin: textMargin }}>
              Residential solar installation<br></br>
              Pre-wiring and consultation<br></br>
              Off-grid and grid-tied projects<br></br>
            </div>
            <div
              className={styles.nabcepContainer}
              style={{ display: nabcepDisplay, justifyContent: nebcepJustify }}>
              <img
              style={{height: imgHeight, margin: imgMargin }}
                className={styles.nabcep}
                src={nabcepSeal}
                alt="nabcep seal"
              />
            </div>
          </div>
          <div className={styles.expandButtonContainer}>
            <ExpandButton
              style={{
                zoom: expandButtonScale,
                marginBottom: expandButtonMargin,
                
              }}
              scrollToId="solarProgramsSection"
            />
          </div>
        </div>
      </BlackFade>
    </FullWidthSection>
  );
};

export default Banner1;
