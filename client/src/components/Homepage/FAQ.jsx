import CentralSection from "../GeneralUI/CentralSection";
import QnaCard from "../GeneralUI/QnaCard";
import CentralTile from "../GeneralUI/CentralTile";
import { selectTSML } from "../../utils";

const FAQ = (props) => {
  const w = props.viewportWidth;
  const templateCols = selectTSML(w, "100%", "100%", "50% 50%", "50% 50%");
  const mainFontSize = selectTSML(w, "0.9rem", "1.4rem", "1.2rem", "1.1rem");
  const qaFontSize = selectTSML(w, "1.2rem", "1.4rem", "1.4rem", "1.6rem");
  const headerFontSize = selectTSML(w, "1.8rem", "2.2rem", "2.2rem", "2.2rem");
  const containerPadding = selectTSML(w, "1.4rem 1.4rem 0 1.4rem");
  const mainLineHeight = selectTSML(w, "unset", "2rem");
  const marginTop = selectTSML(w, "2rem", "4rem", "2rem", "2rem");
  const marginContainer = selectTSML(
    w,
    "0rem 0rem 0rem 0rem",
    "2rem 2rem 2rem 2rem",
    "2rem 4rem 4rem 4rem",
    "2rem 4rem 4rem 4rem"
  );

  return (
    <div style={{ zoom: props.zoom }}>
      <CentralSection
        id="FAQsection"
        style={{
          margin: marginContainer,
          flexDirection: "column",
        }}
        containerStyle={{
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            fontSize: headerFontSize,
            fontWeight: "bold",
            marginTop: marginTop,
            marginBottom: "1rem",
            marginLeft: "2rem",
            fontFamily: "Arvo",
          }}
        >
          F. &nbsp; A . Q.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: templateCols,
            justifyContent: "center",
            width: "100%",
          }}
        >
          {[
            {
              key: "faq1",
              q: "Is it sunny enough in Vancouver and BC for solar?",
              a: "Yes! It is a common misconception that British Columbia is too rainy or overcast for solar, specifically Vancouver and Victoria. In fact, BC receives the same amount of annual energy from the sun as Germany, a global leader in solar energy.",
            },
            {
              key: "faq2",
              q: "How much does solar cost, and how long will it take to pay off?",
              a: "In BC, the average cost of a solar system to offset the yearly energy usage of a home is $25,000 (not including battery backup). The payback period is highly dependent on site conditions, shading, roof angle, and region, but is typially around 12 years, while the standard system lifespan is 30 years.",
            },
            {
              key: "faq3",
              q: "How long does a solar system last?",
              a: "We choose inverters and solar panels that come with a 25-year manufacturer warranty, and the brands we use are among the largest solar companies globally, giving you the most assurance that they will be there down the road if equipment fails. Additionally, all of our work is backed by a 5-year workmanship warranty.",
            },
            {
              key: "faq4",
              q: "How long will it take to install solar on my home?",
              a: "Despite the actual installation of solar panels taking only 2-4 days typically, solar projects have a timeline of 3-12 weeks (depending on regional permitting requirements). The majority of delays come when a building permit is required, which can alone take anywhere from 1 to 8 weeks depending on the municipality. We make sure to give realistic timelines based on a region's permit requirements.",
            },
            {
              key: "faq5",
              q: "How is my solar energy stored?",
              a: "Most residential system are 'grid-tied' systems, meaning that they are effectively using the power grid to 'store' your excess energy. You can add a battery to you solar system as well, but batteries will nearly double the cost of a system, and are only beneficial in situations where you need power to remain on through an outage.",
            },
            {
              key: "faq6",
              q: "What will the up-front cost of installing solar be?",
              a: "If you choose to take advantage of the greener homes program, most residential installs can be fully financed with $0 down using the $40,000 interest free loan form Canada Greener Homes. You can also apply for an additional $5,000 rebate from BC Hydro!",
            },
          ].map((item) => (
            <CentralTile key={item.key} style={{ padding: containerPadding }}>
              <QnaCard
                question={item.q}
                answer={item.a}
                textStyle={{
                  fontSize: mainFontSize,
                  lineHeight: mainLineHeight,
                }}
                qaStyle={{
                  fontSize: qaFontSize,
                }}
              />
            </CentralTile>
          ))}
        </div>
      </CentralSection>
    </div>
  );
};

export default FAQ;
