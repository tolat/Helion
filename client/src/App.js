import styles from "./App.module.css";
import NavBar from "./components/Misc/Nav/NavBar";
import Banner1 from "./components/Homepage/Banner1";
import SolarPrograms from "./components/Homepage/SolarPrograms";
import SolarSolutions from "./components/Homepage/SolarSolutions";
import OurProducts from "./components/Homepage/OurProducts";
import FAQ from "./components/Homepage/FAQ";
import RequestQuoteButton from "./components/Homepage/RequestQuoteButton";
import Footer from "./components/Misc/Footer/Footer";
import { useWindowSize } from "usehooks-ts";
import FreeQuoteModal from "./components/Misc/Modals/FreeQuoteModal";
import { useState } from "react";
import { selectTSML } from "./utils";
import ContactModal from "./components/Misc/Modals/ContactModal";
import Flash from "./components/Misc/Flash/Flash";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDrawer from "./components/Misc/Nav/NavDrawer";

function App() {
  const { width } = useWindowSize();
  const [quoteModalVis, setQuoteModalVis] = useState({ o: "0", v: "hidden" });
  const [contactModalVis, setContactModalVis] = useState({
    o: "0",
    v: "hidden",
  });

  return (
    <div className={`${styles.AppContainer} noscroll`}>
      <Flash id="appFlash" />
      <FreeQuoteModal
        viewportWidth={width}
        modalVis={quoteModalVis}
        setModalVis={setQuoteModalVis}
      />
      <ContactModal
        viewportWidth={width}
        modalVis={contactModalVis}
        setModalVis={setContactModalVis}
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
        />
        <Banner1 viewportWidth={width} />
        <SolarPrograms viewportWidth={width} />
        <SolarSolutions viewportWidth={width} />
        <OurProducts />
        <FAQ viewportWidth={width} />
        {/* <RequestQuoteButton
          viewportWidth={width}
          setModalVis={setQuoteModalVis}
        /> */}
        <Footer viewportWidth={width} />
      </div>
    </div>
  );
}

export default App;
