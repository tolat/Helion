import styles from "./Footer.module.css";
import FullWidthSection from "../../GeneralUI/FullWidthSection";
import CentralSection from "../../GeneralUI/CentralSection";
import light_logo from "../../../images/Helion_logo_nobg_light.png";
import { selectTSML } from "../../../utils";

const Footer = (props) => {
  const w = props.viewportWidth;
  const flexDirection = selectTSML(w, "column", "column", "row", "row");
  const textMaxWidth = selectTSML(w, "", "", "35rem", "40rem");
  const zoom = selectTSML(w, "0.7", "0.8", "", "");
  const marginTop = selectTSML(w, "3rem")
  return (
    <FullWidthSection
      style={{
        backgroundColor: "rgb(41,41,41)",
        zoom: zoom,
      }}
    >
      <CentralSection>
        <div
          className={styles.container}
          style={{ flexDirection: flexDirection, marginTop: marginTop }}
        >
          <FooterTile key="ft1" header="Contact">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>604.723.5351</div>
              <div>helionsolarsystems@gmail.com</div>
            </div>
          </FooterTile>
          <FooterTile
            key="ft2"
            style={{ maxWidth: textMaxWidth }}
            header="About"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                Helion Solar offers turnkey residential solar installation
                service, pre-wiring for new construction projects, as well as
                solar energy consultation. All of our staff are certified NABCEP
                solar PV associates, and we guarantee the quality of our
                electrical work. Our aim is to help contribute to BC's growing
                renewable energy economy, and to educate homeowners about the
                benefits of solar and the green energy incentives the Canadian
                government is offering.
              </div>
              <br />
              
            </div>
          </FooterTile>
          <FooterTile
            key="ft3"
            style={{
              justifyContent: "flex-end",
              height: "100%",
              padding: "0",
            }}
          >
            <img
              style={{ width: "15rem", alignSelf: "center" }}
              src={light_logo}
              alt="company logo"
            />
          </FooterTile>
        </div>
      </CentralSection>
      <div
        style={{
          width: "100%",
          fontSize: "0.9rem",
          display: "flex",
          justifyContent: "center",
          color: "grey",
          margin: "10rem 0 1rem 0",
        }}
      >
        <div>&copy;Copyright Helion Solar 2022</div>
      </div>
    </FullWidthSection>
  );
};

const FooterTile = (props) => {
  let newText =
    props.text &&
    String(props.text)
      .split("\n")
      .map((str) => <div key={Math.random()}>{str}</div>);

  return (
    <div className={styles.item} style={props.style}>
      <div className={styles.itemHeader}>{props.header}</div>
      <div className={styles.itemText}>{newText}</div>
      {props.children}
    </div>
  );
};

export default Footer;
