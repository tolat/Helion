import CentralSection from "../GeneralUI/CentralSection";
import styles from "./SolarPrograms.module.css";
import { selectTSML } from "../../utils";

import gh_hor from "../../images/greener_homes_graphic.png";
import gh_wide from "../../images/GH-journey-map.png";
import nm_hor from "../../images/netmetering_graphic.png";
import nm_ver from "../../images/netmetering_graphic_vertical.jpg";
import nm_wide from "../../images/netmetering_graphic_square.png";
import nm_imgonly from "../../images/nm_graphic_imageonly.png";

const SolarPrograms = (props) => {
  const w = props.viewportWidth;
  const nm_graphic = selectTSML(w, nm_ver, nm_wide, nm_wide, nm_wide);
  const gh_graphic = selectTSML(w, gh_hor, gh_wide, gh_hor, gh_hor);
  const mainFontSize = selectTSML(w, "0.8rem", "1.1rem", "1.1rem", "1.1rem");
  const incentiveFontSize = selectTSML(w, "1.2rem");
  const headerFontSize = selectTSML(w, "1.8rem");
  const headerMargin1 = selectTSML(w, "2rem 0 0 1.5rem", "4rem 0 0 3rem", "4rem 0 0 3rem", "4rem 0 0 3rem");
  const headerMargin2 = selectTSML(w, "2rem 0 0 1.5rem", "4rem 0 2rem 3rem", "4rem 0 2rem 3rem", "4rem 0 2rem 3rem");
  const containerFlexDirection = selectTSML(w, "column", "row", "row" , "row")
  const tileWidth = selectTSML(w, "100%", "50%", "50%", "50%")
  const tile1padding = selectTSML(w,"2rem 0 0 0", "2rem", "2rem", "2rem")
  const tile2padding = selectTSML(w,"1rem")
  const containerPadding = selectTSML(w, "0")
  const container2Padding = selectTSML(w, "0", "0 2rem 0 0 ", "0 2rem 0 0 ", "0 2rem 0 0 ")
  const imgonlyDisplay = selectTSML(w, "none")
  const tile1MarginBottom = selectTSML(w, "1rem", "4rem", "4rem", "4rem")
  const tile2MarginBottom = selectTSML(w, "2rem", "6rem", "6rem", "6rem")
  const nmImgPadding = selectTSML(w, "0", "1rem", "1rem", "1rem")
  const incentiveTextPadding = selectTSML(w, "0", "1rem", "1rem", "1rem")

  return (
    <div style={{ zoom: props.zoom }}  >
      <CentralSection containerStyle={{padding: containerPadding}} style={{ flexDirection: "column" }} id="solarProgramsSection">
        <div
          className={styles.header}
          style={{ fontSize: headerFontSize, margin: headerMargin1 }}
        >
          BC <b>Net Metering</b>
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
              padding: nmImgPadding
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
              }}
            >
              <div className={styles.text}>
                Through BC Hydro's Net Metering program, you can use the energy
                you produce with solar to reduce your energy bill! For every kWh
                of energy you produce with solar, you receive a bill credit that
                you can use against your actual energy consumption at month's
                end. If you produced more energy from solar than you used, the
                consumption portion of your bill will be zero. Any extra credits
                will carry over to the next billing cycle.
                
                
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
                padding: containerPadding,
                marginBottom: "1rem",
                marginTop: "1rem"
              }}
            >
              Click{" "}
              <a href="https://app.bchydro.com/accounts-billing/electrical-connections/net-metering.html">
                HERE
              </a>{" "}
              for more information about Net Metering.
            </div>
          </div>
        </div>
      </CentralSection>
      <CentralSection
        containerStyle={{padding: container2Padding, backgroundColor: "#f9f9f9" }}
        style={{ flexDirection: "column" }}
      >
        <div
          className={styles.header}
          style={{ fontSize: headerFontSize, margin: headerMargin2 }}
        >
          Solar <b>Incentives</b>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: containerFlexDirection,
            marginBottom: tile2MarginBottom,
            padding: tile2padding
          }}
        >
          <img
            style={{ display: "block", width: tileWidth, padding: "0 1rem" }}
            src={gh_graphic}
            alt="greener homes path graphic"
          />
          <div style={{ width: tileWidth, padding: incentiveTextPadding }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: mainFontSize,
              }}
            >
              <div
                className={styles.incentive}
                style={{ fontSize: incentiveFontSize }}
              >
                $5,000 Greener Homes Grant
              </div>
              <div className={styles.text}>
                The Canada greener homes grant provides Canadians with $1 per kW
                of Solar installed, up to a maximum of $5,000. To receive the
                grant you must own your home, and it must be your primary
                residence.
              </div>
              <div
                className={styles.incentive}
                style={{ fontSize: incentiveFontSize }}
              >
                $40,000 Interest-Free Greener Homes Loan
              </div>
              <div className={styles.text}>
                In addition to the grant, the Greener Homes Program in
                partnership with the CMHC are offering loans of up to $40,000
                for energy efficient Home retrofits.
                <br />
                <br />
                To be eligible for the grant or the loan, homes must receive an
                energy efficiency inspection from an EnerGuide accredited
                company before any retrofits begin - We can help you get in
                touch with an EnerGuide certified inspector!
                <br />
                <br />
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{ fontSize: mainFontSize, padding: containerPadding }}
                >
                  Click{" "}
                  <a href="https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-grant/23441">
                    HERE
                  </a>{" "}
                  for more information about the Greener Homes Program
                </div>
              </div>
            </div>
          </div>
        </div>
      </CentralSection>
    </div>
  );
};

export default SolarPrograms;
