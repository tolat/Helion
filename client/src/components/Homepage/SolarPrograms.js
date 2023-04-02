import CentralTile from "../GeneralUI/CentralTile";
import CentralSection from "../GeneralUI/CentralSection";
import styles from "./SolarPrograms.module.css";
import { selectTSML } from "../../utils";

import gh_hor from "../../images/greener_homes_graphic.png";
import gh_wide from "../../images/GH-journey-map.png";
import nm_hor from "../../images/netmetering_graphic.png";
import nm_ver from "../../images/netmetering_graphic_vertical.jpg";
import nm_wide from "../../images/netmetering_graphic_wide.png";

const SolarPrograms = (props) => {
  const w = props.viewportWidth;
  const dMarg = "2rem 0 3rem 0";
  const dPad = "0 2rem 0 2rem"
  const tileFlexDirection = selectTSML(w, "column", "column", "row", "row");
  const tileWidth = selectTSML(w, "100%", "100%", "50%", "50%");
  const nm_graphic = selectTSML(w, nm_ver, nm_wide, nm_hor, nm_hor);
  const gh_graphic = selectTSML(w, gh_hor, gh_wide, gh_hor, gh_hor)
  const margin = selectTSML(w,"0 0 1rem 0", dMarg, dMarg, dMarg )
  const padding = selectTSML(w,"0 0 1rem 0", dPad, dPad, dPad )
  const tile2Padding = selectTSML(w, "1rem 1rem 0 1rem")
  const firstTileMarginTop = selectTSML(w, "0rem")
  
  const mainFontSize = selectTSML(w, "0.8rem")
  const incentiveFontSize = selectTSML(w, "1.2rem")
  const headerFontSize = selectTSML(w, "1.8rem")
  const headerMargin = selectTSML(w, "1rem 0 0rem 0")
  const containerPadding = selectTSML(w, "1rem")

  return (
    <div style={{zoom: props.zoom}}>
    <CentralSection
      style={{
        flexDirection: `${tileFlexDirection}`,
        margin: margin,
        padding: padding,
       
        
      }}>
      <CentralTile
        style={{
          backgroundColor: "rgb(247 247 247)",
          borderRadius: "3px",
          width: `${tileWidth}`,
          justifyContent: "space-between",
          marginTop: firstTileMarginTop,
          padding: containerPadding
        }}>
        <div
          id="solarProgramsSection"
          style={{ display: "flex", flexDirection: "column", fontSize: mainFontSize }}>
          <div className={styles.header} style={{fontSize: headerFontSize, margin: headerMargin }}>
            Solar <b>Incentives</b>
          </div>
          <div className={styles.incentive} style={{fontSize: incentiveFontSize}}>$5,000 Greener Homes Grant</div>
          <div className={styles.text}>
            The Canada greener homes grant provides Canadians with $1 per kW of
            Solar installed, up to a maximum of $5,000. To receive the grant you
            must own your home, and it must be your primary residence.
          </div>
          <div className={styles.incentive} style={{fontSize: incentiveFontSize}}>
            $40,000 Interest-Free Greener Homes Loan
          </div>
          <div className={styles.text}>
            In addition to the grant, the Greener Homes Program in partnership
            with the CMHC are offering loans of up to $40,000 for energy
            efficient Home retrofits.
            <br />
            <br />
            To be eligible for the grant or the loan, homes must receive an
            energy efficiency inspection from an EnerGuide accredited company
            before any retrofits begin - We can help you get in touch with an
            EnerGuide certified inspector!
            <br />
            <br />
          </div>
          <div style={{display: "flex"}}>
          <img style={{display: "block", width:"100%"}} src={gh_graphic} alt="greener homes path graphic" />

          </div>
          <br />
          <br />
        </div>
        <div style={{fontSize: mainFontSize, padding: containerPadding}}>
          Click{" "}
          <a href="https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-grant/23441">
            HERE
          </a>{" "}
          for more information about the Greener Homes Program
        </div>
      </CentralTile>
      <CentralTile
        style={{
          width: `${tileWidth}`,
          justifyContent: "space-between",
          padding: tile2Padding
        }}>
        <div style={{ display: "flex", flexDirection: "column",fontSize: mainFontSize }}>
          <div className={styles.header} style={{fontSize: headerFontSize, margin: headerMargin}}>
            BC <b>Net Metering</b>
          </div>
          <div className={styles.text}>
            Through BC Hydro's Net Metering program, you can use the energy you
            produce with solar to reduce your energy bill! For every kWh of
            energy you produce with solar, you receive a bill credit that you
            can use against your actual energy consumption at month's end. If
            you produced more energy from solar than you used, the consumption
            portion of your bill will be zero. Any extra credits will carry over
            to the next billing cycle.
            <br /> <br />
            Accumulated credits carry over month-to-month until you hit your
            anniversary date (typically March), when any unused credits are
            paid out at market price. When designing large solar systems, we aim for a "100%
            Offset" - making sure energy production is maximized while also not
            ending the year with unused credits.
          </div>
          <div style={{display: "flex"}}>
          <img
            style={{ margin: "1.5rem 0 1.5rem 0", display: "block", width:"100%" }}
            src={nm_graphic}
            alt="Net Metering Graphic"
          />
          </div>
         
        </div>
        <div style={{fontSize: mainFontSize, padding: containerPadding}}>
          Click{" "}
          <a href="https://app.bchydro.com/accounts-billing/electrical-connections/net-metering.html">
            HERE
          </a>{" "}
          for more information about Net Metering.
        </div>
      </CentralTile>
    </CentralSection>
    </div>
  );
};

export default SolarPrograms;
