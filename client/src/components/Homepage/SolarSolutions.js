import FullWidthSection from "../GeneralUI/FullWidthSection";
import BlackFade from "../GeneralUI/BlackFade";
import ProductTile from "../GeneralUI/ProductTile";
import { selectTSML } from "../../utils";

import styles from "./SolarSolutions.module.css";

import banner2 from "../../images/solarspan4.jpg";
import banner2_mobile from "../../images/solarspan7.jpg"
import stringInvImgDesktop from "../../images/strings_ground.jpeg";
import stringInvImgMobile from "../../images/strings_ground_mobile.jpg"
import microInvImg from "../../images/microinverter_roof.jpeg";
import batteryImgDesktop from "../../images/encharge3.jpeg";
import batteryImgMobile from "../../images/encharge3_mobile.jpeg"
import blackPanelsImg from "../../images/blackpanels1.jpeg";

const SolarSolutions = (props) => {
  const w = props.viewportWidth;
  const tileDisplay = selectTSML(w, "flex", "grid", "flex", "flex");
  const tileFlexDirection = selectTSML(w, "column");
  const tileJustify = selectTSML(w, "center", "center", "", "");
  const tileWidth = selectTSML(w, "85%", "85%", "22%", "22%");
  const textAlign = selectTSML(w, "", "", "", "");
  const tileImgHeight = selectTSML(w, "10rem", "20rem", "15rem", "15rem");
  const zoom = selectTSML(w, "0.7", "0.8", "", "");
  const containerPadding = selectTSML(w, "0")
  const backgroundAttachment = selectTSML(w, "scroll", "fixed", "fixed", "fixed")
  const backgroundImage = selectTSML(w, banner2_mobile, banner2, banner2, banner2)
  const backgroundOpacity = selectTSML(w, "0.7","0.5","0.5","0.5")
  const stringInvImg = selectTSML(w,stringInvImgMobile,stringInvImgDesktop,stringInvImgDesktop,stringInvImgDesktop)
  const batteryImg = selectTSML(w, batteryImgMobile, batteryImgDesktop, batteryImgDesktop, batteryImgDesktop)
  const headerMarginTop = selectTSML(w, "0")
  const headerTextFontSize = selectTSML(w, "1.2rem", "1.5rem", "1.5rem", "1.5rem")

  return (
    <BlackFade
      backgroundImage={backgroundImage}
      backgroundOpacity={backgroundOpacity}
      backgroundAttachment={backgroundAttachment}>
      <FullWidthSection>
        <div style={{ maxWidth: "90rem", zoom: zoom }}>
          <div
            className={styles.header}
            style={{ color: "white", fontSize: "2.5rem", marginTop: headerMarginTop}}>
            Solar <b>Solutions</b>{" "}
          </div>
          <div
            className={styles.text}
            style={{ color: "white", fontSize: headerTextFontSize, paddingTop: "0" }}>
            Finding a line of solar equipment that fits your vision and budget
            is important - We offer a complete suite of solar solutions for
            grid-tied and off-grid solar projects that can address a variety
            home energy needs.
          </div>
        </div>
        <div
          className={styles.tileGridContainer}
          style={{
            display: tileDisplay,
            flexDirection: tileFlexDirection,
            justifyItems: tileJustify,
            maxWidth: "90rem",
            padding: containerPadding
          }}>
          {[
            {
              id: "ss1",
              h: "String Inverters",
              img: stringInvImg,
              t: "String inverters convert all your DC solar energy to AC in one unit. With the most attractive pricetag, they are ideal for minimizing your solar Payback Period.",
            },
            {
              id: "ss2",
              h: "Microinverters",
              img: microInvImg,
              t: "Microinverters pair with individual panels to convert DC to AC right on the roof. This is industry standard best inverter tech, with a larger Return On Investment.",
            },
            {
              id: "ss3",
              h: "Energy Storage",
              img: batteryImg,
              t: "Tired of losing power when the grid is down? A battery backup can allow you to maintain continuous power to your home loads through a power outage.",
            },
            {
              id: "ss4",
              h: "All Black Panels",
              img: blackPanelsImg,
              t: "Solar panels don't have to affect the aesthetic of your home. With all-black racking and solar panel options, saving on energy can also add a sleek look to your roof.",
            },
          ].map((data) => (
            <ProductTile
              style={{
                width: tileWidth,
                zoom: zoom,
              }}
              imgHeight={tileImgHeight}
              key={data.id}
              header={data.h}
              img={data.img}
              text={data.t}
              textStyles={{ textAlign: textAlign }}
            />
          ))}
        </div>
      </FullWidthSection>
    </BlackFade>
  );
};

export default SolarSolutions;
