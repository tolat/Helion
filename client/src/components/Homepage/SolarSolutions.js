import FullWidthSection from "../GeneralUI/FullWidthSection";
import BlackFade from "../GeneralUI/BlackFade";
import ProductTile from "../GeneralUI/ProductTile";
import { selectTSML } from "../../utils";

import styles from "./SolarSolutions.module.css";

import banner2 from "../../images/darkbg5.png";
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
  const containerPadding = selectTSML(w, "0")
  const backgroundImage = selectTSML(w, banner2, banner2, banner2, banner2)
  const stringInvImg = selectTSML(w,stringInvImgMobile,stringInvImgDesktop,stringInvImgDesktop,stringInvImgDesktop)
  const batteryImg = selectTSML(w, batteryImgMobile, batteryImgDesktop, batteryImgDesktop, batteryImgDesktop)

  const headerTextFontSize = selectTSML(w, "0.8rem", "1.5rem", "1.5rem", "1.5rem")
  const tileTextFontSize = selectTSML(w, "0.8rem")
  const headerFontSize = selectTSML(w, "1.8rem", "2.3rem","2.5rem","2.5rem")
  const headerPadding = selectTSML(w, "2rem 0 1rem 1.4rem","1rem 0 1rem 2rem","1rem 0 0rem 3rem","1rem 0 rem 3rem")
  const blurbPadding = selectTSML( w, "0rem 0 1rem 1.4rem")
  const tileHeaderFontSize = selectTSML(w, "1.2rem")
  const headerTextLineHeight = selectTSML(w, "unset")
  const headerTilePadding = selectTSML(w, "1rem 1rem 0.4rem 1rem")
  const textTilePadding = selectTSML(w, "0rem 1rem 1rem 1rem")
  const containerMarginBottom = selectTSML(w, "0rem", "2rem", "5rem", "10rem")
  const containerMarginTop = selectTSML(w, "unset", "0rem", "-1rem", "-1rem" )

  return (
    <div style={{zoom: props.zoom}}>

    <BlackFade
      backgroundImage={backgroundImage}
      backgroundOpacity={1}
      backgroundAttachment={"scroll"}>
      <FullWidthSection>
        <div style={{ maxWidth: "90rem",  marginTop: containerMarginTop}}>
          <div
            className={styles.header}
            style={{ color: "white", fontSize: headerFontSize, padding: headerPadding}}>
            Solar <b>Solutions</b>{" "}
          </div>
          <div
            className={styles.text}
            style={{ color: "white", fontSize: headerTextFontSize, padding: blurbPadding}}>
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
            padding: containerPadding,
            marginBottom: containerMarginBottom,
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
              }}
              imgHeight={tileImgHeight}
              key={data.id}
              header={data.h}
              img={data.img}
              text={data.t}
              textStyles={{ textAlign: textAlign, fontSize: tileTextFontSize, lineHeight: headerTextLineHeight, padding: textTilePadding }}
              headerStyles={{fontSize: tileHeaderFontSize, padding: headerTilePadding}}
            />
          ))}
        </div>
      </FullWidthSection>
    </BlackFade>
    </div>
  );
};

export default SolarSolutions;
