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
    text: "My Off-grid solar array is only 2 panels but it is working great! It's awesome to have power enough for my DC fridge from spring to fall. Helion did a great job with the installation. Looking to expand soon!",
    source: "Maria",
  },
];

const Testimonials = (props) => {
  const w = props.viewportWidth;
  const padding = selectTSML(w, "0rem", "2rem", "2rem", "2rem");
  const paddingBottom=selectTSML(w, "3rem")


  return (
     <div
      style={{
        backgroundColor: "#1a2026",
      }}
    > 
      
      <CentralSection
        containerStyle={{
          zoom: props.zoom,
          padding: padding,
        }}
        style={{ display: "flex", flexDirection: "column", paddingBottom: paddingBottom }}
      >
        <Carousel viewportWidth={w}></Carousel>
      </CentralSection>
   </div> 
  );
};

const Carousel = (props) => {
  const w = props.viewportWidth;
  const testimonialContainerPadding = selectTSML(
    w,
    "0",
    "2rem",
    "2rem",
    "2rem"
  );

  const testimonialTextWidth = selectTSML(w, "85%", "70%", "70%", "70%");
  const testimonialTextAlign = selectTSML(
    w,
    "left",
    "justify",
    "justify",
    "justify"
  );
  const fontSize = selectTSML(w, "1rem")


  const handleDragStart = (e) => e.preventDefault();
  const productCrouselItems = testimonials.map((t) => (
    <div
      className={styles.testimonialContainer}
      style={{
        padding: testimonialContainerPadding,
        display: "flex",
        justifyContent: "center"
      }}
      onDragStart={handleDragStart}
    >
      <div
        className={styles.testimonialText}
        style={{
          width: testimonialTextWidth,
          textAlign: testimonialTextAlign,
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
      disableDotsControls={true}
      infinite={true}
      animationDuration={3000}
      autoPlayInterval={10000}
      selectTSML={{
        0: { items: 1 },
      }}
    />
  );
};

export default Testimonials;
