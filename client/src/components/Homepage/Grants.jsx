import CentralSection from "../GeneralUI/CentralSection";
import styles from "./SolarPrograms.module.css";
import { selectTSML } from "../../utils";

import gh_hor from "../../images/new_ghl_whitebg.jpg";

const Grants = (props) => {
  const w = props.viewportWidth;
  const gh_graphic = selectTSML(w, gh_hor, gh_hor, gh_hor, gh_hor);
  const mainFontSize = selectTSML(w, "0.9rem", "1.4rem", "1.2rem", "1.1rem");
  const incentiveFontSize = selectTSML(w, "1.2rem");
  const incentiveMargin = selectTSML(w, "1.3rem 0 0.4rem 0");
  const headerFontSize = selectTSML(w, "1.8rem");

  const headerMargin2 = selectTSML(
    w,
    "3rem 0 1rem 1.8rem",
    "4rem 0 2rem 3rem",
    "4rem 0 2rem 3rem",
    "4rem 0 2rem 3rem"
  );
  const containerFlexDirection = selectTSML(
    w,
    "column",
    "column",
    "row",
    "row"
  );
  const tileWidth = selectTSML(w, "100%", "100%", "50%", "50%");
  const tile2padding = selectTSML(w, "1rem");
  const containerPadding = selectTSML(w, "0");
  const container2Padding = selectTSML(
    w,
    "0",
    "0 2rem 0 0 ",
    "0 2rem 0 0 ",
    "0 2rem 0 0 "
  );
  const tile2MarginBottom = selectTSML(w, "2rem", "6rem", "6rem", "6rem");
  const nmImgPadding = selectTSML(w, "0", "5rem", "1rem", "1rem");
  const incentiveTextPadding = selectTSML(w, "0.5rem", "1rem", "1rem", "1rem");
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
          padding: container2Padding,
        }}
        style={{ margin: marginContainer, flexDirection: "column" }}
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
            padding: tile2padding,
          }}
        >
          <img
            style={{
              display: "block",
              width: tileWidth,
              padding: nmImgPadding,
            }}
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
                style={{ fontSize: incentiveFontSize, margin: incentiveMargin }}
              >
                $10,000 BC Hydro Solar Grant
              </div>
              <div className={styles.text}>
                BC Hydro is offering a $5,000 grant for all new solar
                installations, as well as a $5000 grant for solar battery
                installations. To receive the grants you must own your home and
                have the solar upgrades installed by a reputable installer.
              </div>
              <div
                className={styles.incentive}
                style={{ fontSize: incentiveFontSize, margin: incentiveMargin }}
              >
                $40,000 Interest-Free Loan
              </div>
              <div className={styles.text}>
                The Greener Homes Program in partnership with the CMHC are
                offering loans of up to $40,000 for energy efficient Home
                retrofits, at 0% interest.
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
                  style={{
                    fontSize: mainFontSize,
                    padding: containerPadding,
                    fontFamily: "Raleway",
                  }}
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

export default Grants;
