import CentralSection from "../../components/GeneralUI/CentralSection";
import styles from "./Testimonials.module.css";
import AliceCarousel from "react-alice-carousel";
import { selectTSML } from "../../utils";
import BlackFade from "../GeneralUI/BlackFade";

import background from "../../images/solarspan4.jpg"

const testimonials = [
  {
    text: "Helion is great, the service was professional and a great help through the whole application process with hydro and rebates. I would highly recommend Helion Solar to any person interested in installing solar systems. I have already seen 4550 watts of production out of my system in April - I'm looking forward to summer!",
    source: "G. Kurack",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    source: "Zeus",
  },
];

const Testimonials = (props) => {
  const w = props.viewportWidth;
  const padding = selectTSML(w, "0rem", "2rem", "2rem", "2rem");
  const paddingBottom=selectTSML(w, "3rem")


  return (
    /* <div
      style={{
        backgroundColor: "#262b33",
      }}
    > */
      <BlackFade 
      backgroundImage={background}
      backgroundOpacity="0.50"
      backgroundAttachment={"fixed"}>
      <CentralSection
        containerStyle={{
          zoom: props.zoom,
          padding: padding,
        }}
        style={{ display: "flex", flexDirection: "column", paddingBottom: paddingBottom }}
      >
       {/*  <div
          className={styles.header}
          style={{
            color: "white",
            fontSize: "2rem",
            marginTop: "1rem",
            marginLeft: "8rem",
          }}
        >
          <b>Testimonials</b>{" "}
        </div> */}
        <Carousel viewportWidth={w}></Carousel>
      </CentralSection>
      </BlackFade>
   /*  </div> */
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
      }}
      onDragStart={handleDragStart}
    >
      <div
        className={styles.testimonialText}
        style={{
          width: testimonialTextWidth,
          textAlign: testimonialTextAlign,
          fontSize: fontSize
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
