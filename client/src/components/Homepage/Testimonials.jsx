import CentralSection from "../GeneralUI/CentralSection";
import styles from "./Testimonials.module.scss";
import AliceCarousel from "react-alice-carousel";

import parminder from "../../images/parminder1.jpg";
import chad from "../../images/chadpeters.jpg"
import curack from "../../images/curack1.jpg";
import marja from "../../images/marja1.jpg";
import quoteLeft from "../../images/quote-left.png";
import quoteRight from "../../images/quote-right.png";
import { selectTSML } from "../../utils";
import { useState, useEffect } from "react";

const testimonials = [
  {
    image: chad,
    header: "I highly recommend this company.",
    text: "They were very professional and easy to work with. From the beginning to the end of the project, they effortlessly helped navigate through the grant & loan process answering every question I had along the way. The finished product looked amazing!!",
    source: "C. Peters (14.11 kW Grid-Tied System 2024)",
  },
  {
    image: parminder,
    header: "Helion Solar did a great job with our install,",
    text: "we are very happy to recommend them as solar installers. They were able to include our electrical upgrades in the price and complete them along with the solar installation. From start to finish the job was very professionally done.",
    source: "P. Raikhi (10.01kW Grid-Tied System 2023)",
  },
  {
    image: marja,
    header: "Our off-grid install was done quickly and efficiently",
    text: "and Helion Solar was able to address various issues and surprises that arose due to the remote location and/or the age of the cabin and complete the installation without delays.  We have been very happy with the system and it has provided us much needed electricity that has made our cabin experience much more enjoyable. I warmly recommend Helion Solar.",
    source: "M. Rihijarvi (790kW Off-Grid System 2022)",
  },
  {
    image: curack,
    header: "Helion is great, the service was professional",
    text: "and a great help through the whole application process with hydro and rebates. I would highly recommend Helion Solar to any person interested in installing solar systems. I have already seen 4550 watts of production out of my system in April - I'm looking forward to summer!",
    source: "G. Kurack (4.96kW Grid-Tied System 2023)",
  },
];

const Testimonials = (props) => {
  const [remInPixels, setRemInPixels] = useState(0);

  useEffect(() => {
    // Function to calculate 1rem in pixels
    const getRemInPixels = () => {
      return parseFloat(getComputedStyle(document.documentElement).fontSize);
    };

    // Set the state to the calculated value of 1rem in pixels
    setRemInPixels(getRemInPixels());
  }, []);

  const w = props.viewportWidth;
  const paddingM = (props.viewportWidth - 80 * remInPixels) / 2;
  const paddingS = (props.viewportWidth - 65 * remInPixels) / 2;

  const paddingStrS = `5rem ${paddingS}px 0 ${paddingS}px`;
  const paddingStrM = `2rem ${paddingM}px 0 ${paddingM}px`;
  const containerPadding = selectTSML(w, "0", paddingStrS, paddingStrM);

  return (
    <CentralSection
      containerStyle={{
        backgroundColor: "#1a2026",
        padding: containerPadding,
      }}
      customClassName={styles.centralSection}
    >
      <Carousel zoom={props.zoom} />
    </CentralSection>
  );
};

const Carousel = (props) => {
  const productCrouselItems = testimonials.map((t) => (
    <Testimonial testimonial={t} zoom={props.zoom} />
  ));

  return (
    <div className={styles.carouselContainer}>
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        items={productCrouselItems}
        disableButtonsControls={true}
        disableDotsControls={false}
        infinite={true}
        animationDuration={2000}
        autoPlayInterval={10000}
        selectTSML={{
          0: { items: 1 },
        }}
      />
    </div>
  );
};

const Testimonial = (props) => {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <div
      className={styles.testimonialContainer}
      onDragStart={handleDragStart}
      style={{ zoom: props.zoom }}
    >
      <div
        style={{ backgroundImage: `url(${props.testimonial.image})` }}
        className={styles.testimonialImage}
      />
      <div className={styles.testimonialTextContainer}>
        <img
          className={`${styles.testimonialQuoteLeft} invertFilter`}
          src={quoteLeft}
          alt="quote-left"
        />
        <div className={styles.testimonialHeader}>
          {props.testimonial.header}
        </div>
        <div className={styles.testimonialText}>{props.testimonial.text}</div>

        <img
          className={`${styles.testimonialQuoteRight} invertFilter`}
          src={quoteRight}
          alt="quote-right"
        />
        <div
          className={styles.testimonialSource}
        >{`- ${props.testimonial.source}`}</div>
      </div>
    </div>
  );
};

export default Testimonials;
