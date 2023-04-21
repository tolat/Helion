import { useWindowSize } from "usehooks-ts";
import CentralSection from "../GeneralUI/CentralSection";
import ProductCarousel from "./ProductCarousel";
import { selectTSML } from "../../utils";

const OurProducts = (props) => {
  const { width } = useWindowSize();
  const headerFontSize = selectTSML(width, "1.8rem", "2.2rem", "2.5rem", "2.5rem");
  const carouselMargin = selectTSML(width,"3rem 1.4rem 3rem 1.4rem","4rem 2rem 4rem 2rem","4rem 0rem 5rem 0rem","4rem 0rem 5rem 0rem" )
  const headerDisplay = selectTSML(width, "none", "none", "none", "none")
  const marginTop = selectTSML(width, "unset", "-4rem", "-4rem", "-4rem")
  
  return (
    <div style={{zoom: props.zoom}}>

    <CentralSection
      style={{
        flexDirection: "column",
        marginTop: marginTop,
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: headerFontSize,
          marginTop: "2rem",
          display: headerDisplay
        }}
      >
        Our <b>Products</b>
      </div>
      <div style={{ margin: carouselMargin }}>
        <ProductCarousel width={width}/>
      </div>
    </CentralSection>
    </div>
  );
};

export default OurProducts;
