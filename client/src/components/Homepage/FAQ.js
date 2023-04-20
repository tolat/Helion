import CentralSection from "../GeneralUI/CentralSection";
import QnaCard from "../GeneralUI/QnaCard";
import CentralTile from "../GeneralUI/CentralTile";
import { selectTSML } from "../../utils";

const FAQ = (props) => {
  const w = props.viewportWidth;
  const templateCols = selectTSML(w, "100%", "100%", "50% 50%", "50% 50%");
  const mainFontSize = selectTSML(w, "0.8rem")
  const incentiveFontSize = selectTSML(w, "1.2rem")
  const headerFontSize = selectTSML(w, "1.8rem", "2rem", "2rem", "2rem")
  const headerMargin = selectTSML(w, "1rem 0 0rem 0")
  const containerPadding = selectTSML(w, "1.4rem 1.4rem 0 1.4rem")
  const mainLineHeight = selectTSML(w, "unset")
  const marginTop = selectTSML(w, "2rem", "0rem", "0rem", "0rem")

  return (
    <div style={{zoom: props.zoom}}>

    <CentralSection
      id="FAQsection"
      style={{ flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          fontSize: headerFontSize,
          textAlign: "center",
          fontWeight: "bold",
          marginTop: marginTop
        }}>
        FAQ
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: templateCols,
          justifyContent: "center",
          width: "100%",
          paddingBottom: "3rem",
        }}>
        {[
          {
            key: "faq1",
            q: "Is it sunny enough in Vancouver and BC generally for solar to be worth it?",
            a: "Yes! It is a common misconception that British Columbia is too rainy or overcast for solar, specifically Vancouver and Victoria. In fact, BC receives the same amount of annual energy from the sun as Germany, a global leader in solar energy.",
          },
          {
            key: "faq2",
            q: "How much does a typical system cost, and how long will it take to pay itself off?",
            a: "In BC, the average cost of a solar system to offset the yearly energy usage of a home is $20,000 to $30,000 (not including battery backup). The payback period is highly dependent on site conditions, shading, roof angle, and region, but is typially between 10-15 years (standard system lifespan is 25-35 years).",
          },
          {
            key: "faq3",
            q: "What are the product warranties and who will be around in 10 years to replace equipment if it malfuncitons?",
            a: "We choose inverters and solar panels that come with a 25-year manufacturer warranty, and the brands we use are among the largest solar companies globally, giving you the most assurance that they will be there down the road if equipment fails. Additionally, all of our work is backed by a 5-year workmanship warranty.",
          },
          {
            key: "faq4",
            q: "How long will it take to install solar on my home?",
            a: "Despite the actual installation of solar panels taking only 2-4 days typically, solar projects have a timeline of 3-12 weeks (depending on regional permitting requirements). The majority of delays come when a building permit is required, which can alone take anywhere from 1 to 8 weeks depending on the municipality. We make sure to give realistic timelines based on a region's permit requirements.",
          },
          {
            key: "faq5",
            q: "Why do solar quotes vary so much from compan to company?",
            a: "Depending on the supplier, companies may be paying more or less for equipment. Market and supply chain volatility can also affect equipment prices, which can even change quoted prices month-to-month by a significant amount. Additionally, larger companies carry more overhead and have higher operating costs as compared to smaller outfits.",
          },
          {
            key: "faq6",
            q: "Will my solar installer apply for grants and loans for me?",
            a: "The Greener Homes Grant and Loan programs must be applied for independently by the hoeowner. However, Helion solar can assist with providing resources and guidance throught the process, to ensure your applications get accepted the first time.",
          },
          
        ].map((item) => (
          <CentralTile key={item.key} style={{padding: containerPadding }}>
            <QnaCard question={item.q} answer={item.a} textStyle={{fontSize: mainFontSize, lineHeight: mainLineHeight}} />
          </CentralTile>
        ))}
      </div>
    </CentralSection>
    </div>
  );
};

export default FAQ;
