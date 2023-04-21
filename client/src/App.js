import styles from "./App.module.css";
import NavBar from "./components/Misc/Nav/NavBar";
import Banner1 from "./components/Homepage/Banner1";
import SolarPrograms from "./components/Homepage/SolarPrograms";
import SolarSolutions from "./components/Homepage/SolarSolutions";
import OurProducts from "./components/Homepage/OurProducts";
import FAQ from "./components/Homepage/FAQ";
import Testimonials from "./components/Homepage/Testimonials"
import Footer from "./components/Misc/Footer/Footer";
import { useWindowSize } from "usehooks-ts";
import FreeQuoteModal from "./components/Misc/Modals/FreeQuoteModal";
import { useState } from "react";
import { selectTSML } from "./utils";
import ContactModal from "./components/Misc/Modals/ContactModal";
import Flash from "./components/Misc/Flash/Flash";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDrawer from "./components/Misc/Nav/NavDrawer";
import RequestQuoteButton from "./components/Homepage/RequestQuoteButton"

function App() {
  const { width } = useWindowSize();
  const [quoteModalVis, setQuoteModalVis] = useState({ o: "0", v: "hidden" });
  const [contactModalVis, setContactModalVis] = useState({
    o: "0",
    v: "hidden",
  });

  const totalZoom = selectTSML(width, "1", "0.75", "0.80", "1")

  return (
    <div className={`${styles.AppContainer} noscroll`}>
      <Flash id="appFlash" />
      <FreeQuoteModal
        viewportWidth={width}
        modalVis={quoteModalVis}
        setModalVis={setQuoteModalVis}
        zoom={totalZoom}
      />
      <ContactModal
        viewportWidth={width}
        modalVis={contactModalVis}
        setModalVis={setContactModalVis}
        zoom={totalZoom}
      />
      <NavDrawer
        setContactModalVis={setContactModalVis}
        setQuoteModalVis={setQuoteModalVis}
      />
      <div className={styles.App} id="App">
        <NavBar
          viewportWidth={width}
          setQuoteModalVis={setQuoteModalVis}
          setContactModalVis={setContactModalVis}
          zoom={totalZoom}
        />
        <Banner1 viewportWidth={width} zoom={totalZoom}/>
        <Testimonials viewportWidth={width} zoom={totalZoom}/>
        <SolarSolutions viewportWidth={width} zoom={totalZoom}/>
        <OurProducts zoom={totalZoom}/>
        <SolarPrograms viewportWidth={width} zoom={totalZoom}/>
        <FAQ viewportWidth={width} zoom={totalZoom}/>
        <RequestQuoteButton
          viewportWidth={width}
          setModalVis={setQuoteModalVis}
        /> 
        <Footer viewportWidth={width} zoom={totalZoom}/>
      </div>
    </div>
  );
}

export default App;
