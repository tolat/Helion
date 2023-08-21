import CentralSection from "../../components/GeneralUI/CentralSection";
import styles from "./Testimonials.module.css";
import AliceCarousel from "react-alice-carousel";
import { selectTSML } from "../../utils";


const testimonials = [
  {
    text: "Helion is great, the service was professional and a great help through the whole application process with hydro and rebates. I would highly recommend Helion Solar to any person interested in installing solar systems. I have already seen 4550 watts of production out of my system in April - I'm looking forward to summer!",
    source: "G. Kurack",
  },
  {
    text: "Our off-grid install was done quickly and efficiently and Helion Solar was able to address various issues and surprises that arose due to the remote location and/or the age of the cabin and complete the installation without delays.  We have been very happy with the system and it has provided us much needed electricity that has made our cabin experience much more enjoyable. I warmly recommend Helion Solar.",
    source: "Marja B.",
  },
];

const Testimonials = (props) => {
  const w = props.viewportWidth;
  const padding = selectTSML(w, "0rem", "2rem", "2rem", "2rem");
  const paddingBottom=selectTSML(w, "0")
 


  return (
     <div
      style={{
        backgroundColor: "#1a2026",
      }}
    > 
      
      
        <Carousel viewportWidth={w}></Carousel>
   {/*    </CentralSection> */}
   </div> 
  );
};

const Carousel = (props) => {
  const w = props.viewportWidth;
  const testimonialContainerPadding = selectTSML(
    w,
    "1rem",
    "2rem",
    "2rem",
    "2rem"
  );

  const testimonialTextWidth = selectTSML(w, "100%", "100%", "100%", "100%");
  const fontSize = selectTSML(w, "1rem")
  const containerWidth = selectTSML(w, "85%")
  const containerMarginLeft = selectTSML(w, "7.5%")
  const containerMarginTop = selectTSML(w, "2rem", "3rem", "4rem", "4rem")
  const carouselDots = selectTSML(w, false, true, true, true)

  const handleDragStart = (e) => e.preventDefault();
  const productCrouselItems = testimonials.map((t) => (
    <div
      className={styles.testimonialContainer}
      style={{
        padding: testimonialContainerPadding,
        display: "flex",
        justifyContent: "center",
        width: containerWidth,
        marginTop: containerMarginTop,
        marginLeft: containerMarginLeft,
      }}
      onDragStart={handleDragStart}
    >
      <div
        className={styles.testimonialText}
        style={{
          width: testimonialTextWidth,
          fontSize: fontSize,
          
        }}
      >{`"${t.text}"`}</div>
      <div className={styles.testimonialSource}>{`- ${t.source}`}</div>
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      autoPlay={true}
      items={productCrouselItems}
      disableButtonsControls={true}
      disableDotsControls={!carouselDots}
      infinite={true}
      animationDuration={2000}
      autoPlayInterval={10000}
      selectTSML={{
        0: { items: 1 },
      }}
    />
  );
};

export default Testimonials;
