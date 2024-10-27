import CentralSection from "../GeneralUI/CentralSection";
import styles from "./SolarPrograms.module.css";
import { selectTSML } from "../../utils";

import nm_ver from "../../images/netmetering_graphic_vertical.png";
import nm_wide from "../../images/netmetering_graphic_square.png";
import nm_imgonly from "../../images/nm_graphic_imageonly.png";

const NetMetering = (props) => {
  const w = props.viewportWidth;
  const nm_graphic = selectTSML(w, nm_ver, nm_wide, nm_wide, nm_wide);
  const mainFontSize = selectTSML(w, "0.9rem", "1.4rem", "1.2rem", "1.1rem");
  const headerFontSize = selectTSML(w, "1.8rem");
  const headerMargin1 = selectTSML(
    w,
    "2rem 0 0 1.5rem",
    "4rem 0 0 3rem",
    "4rem 0 0 3rem",
    "4rem 0 0 3rem"
  );

  const containerFlexDirection = selectTSML(
    w,
    "column",
    "column",
    "row",
    "row"
  );
  const tileWidth = selectTSML(w, "100%", "100%", "50%", "50%");
  const tile1padding = selectTSML(w, "2rem 0 0 0", "2rem", "2rem", "2rem");
  const textPadding = selectTSML(w, "0.5rem", "0", "0", "0");
  const containerPadding = selectTSML(w, "0");

  const imgonlyDisplay = selectTSML(w, "none");
  const tile1MarginBottom = selectTSML(w, "1rem", "4rem", "4rem", "4rem");
  const nmImgPadding = selectTSML(w, "0.5rem", "5rem", "1rem", "1rem");
  const marginContainer = selectTSML(
    w,
    "0rem 0rem 0rem 0rem",
    "2rem 2rem 2rem 2rem",
    "2rem 4rem 4rem 4rem",
    "2rem 4rem 4rem 4rem"
  );

  return (
    <div style={{ zoom: props.zoom }}>
      <CentralSection
        containerStyle={{
          padding: containerPadding,
          //backgroundColor: "#f9f9f9",
        }}
        style={{ margin: marginContainer, flexDirection: "column" }}
        id="solarProgramsSection"
      >
        <div
          className={styles.header}
          style={{ fontSize: headerFontSize, margin: headerMargin1 }}
        >
          BC Hydro <b>Self Generation</b>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: containerFlexDirection,
            padding: tile1padding,
            marginBottom: tile1MarginBottom,
          }}
        >
          <img
            style={{
              width: tileWidth,
              padding: nmImgPadding,
            }}
            src={nm_graphic}
            alt="Net Metering Graphic"
          />
          <div
            style={{
              padding: "1rem",
              width: tileWidth,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: mainFontSize,
                marginTop: "1rem",
                padding: textPadding
              }}
            >
              <div className={styles.text}>
                Through BC Hydro's Self Generation program, you can use the
                energy you produce with solar to reduce your energy bill! For
                every kWh of energy you produce with solar, you receive a bill
                credit that you can use against your actual energy consumption
                at month's end. If you produced more energy from solar than you
                used, the consumption portion of your bill will be zero. Any
                extra credits will carry over to the next billing cycle.
              </div>
            </div>
            <img
              style={{ display: imgonlyDisplay, width: "90%", padding: "2rem" }}
              src={nm_imgonly}
              alt="greener homes path graphic"
            />
            <div
              style={{
                width: "100%",
                fontSize: mainFontSize,
                padding: textPadding,
                marginBottom: "1rem",
                marginTop: "1rem",
                fontFamily: "Raleway",
              }}
            >
              Click{" "}
              <a href="https://app.bchydro.com/accounts-billing/electrical-connections/net-metering.html">
                <b>HERE</b>
              </a>{" "}
              for more information.
            </div>
          </div>
        </div>
      </CentralSection>
    </div>
  );
};

export default NetMetering;
