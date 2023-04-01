import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import longi_logo from "../../images/product_logos/longi_logo.png";
import enphase_logo from "../../images/product_logos/enphase_logo.png";
import solaredge_logo from "../../images/product_logos/solaredge_logo.png";
import aps_logo from "../../images/product_logos/aps_logo.png";
import kinetic_logo from "../../images/product_logos/kinetic_logo.png";
import cadsol_logo from "../../images/product_logos/cadsol_logo.png";
import schneider_logo from "../../images/product_logos/schneider_logo.png";
import { selectTSML } from "../../utils";
import { useWindowSize } from "usehooks-ts";

import React from "react";

const imageLinks = [
  longi_logo,
  enphase_logo,
  solaredge_logo,
  aps_logo,
  kinetic_logo,
  cadsol_logo,
  schneider_logo,
];

const ProductCarousel = (props) => {
  const { width } = useWindowSize();
  const logoHeight = selectTSML(width, "40rem", "40rem", "60rem", "60rem")
  
  window.alert("rendering carousel!")
  // Alice carousel for products
  const handleDragStart = (e) => e.preventDefault();
  const productCrouselItems = imageLinks.map((l) => (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img
        height={logoHeight}
        src={l}
        alt="poduct-logo"
        onDragStart={handleDragStart}></img>
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      autoPlay={true}
      items={productCrouselItems}
      disableButtonsControls={true}
      disableDotsControls={true}
      infinite={true}
      animationDuration={2000}
      responsive={{
        0: { items: 2 },
        550: { items: 3 },
        [`${process.env.REACT_APP_BREAKPOINT_S}`]: { items: 4 },
      }}
    />
  );
};

export default React.memo(ProductCarousel);
