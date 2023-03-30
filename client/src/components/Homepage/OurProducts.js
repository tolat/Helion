import { useWindowSize } from "usehooks-ts";
import CentralSection from "../GeneralUI/CentralSection";
import ProductCarousel from "./ProductCarousel";
import { selectTSML } from "../../utils";

const OurProducts = (props) => {
  const { width } = useWindowSize();
  const zoom = selectTSML(width, "0.7", "0.8", "", "");
  return (
    <CentralSection
      style={{
        zoom: zoom,
        flexDirection: "column",
      }} bgColor = "rgb(242 242 243)">
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2.5rem",
          marginTop: "3rem",
        }}>
        Our <b>Products</b>
      </div>
      <div style={{ margin: "4rem 0rem 5rem 0rem" }}>
        <ProductCarousel />
      </div>
    </CentralSection>
  );
};

export default OurProducts;
