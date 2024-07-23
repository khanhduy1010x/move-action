import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { FACTORPOINTS } from "./components/FACTORPOINTS";
import { OURJOURNEY } from "./components/OURJOURNEY";
import { DEVILFRUITS } from "./components/DEVILFRUITS";
import { MOMENTS } from "./components/MOMENTS";
import { ACTORSSAY } from "./components/ACTORSSAY";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div style={{overflow : "hidden"}}>
      <Navigation />
      <Header data={landingPageData.Header} />
      <FACTORPOINTS data={landingPageData.FACTORPOINTS} />
      <OURJOURNEY data={landingPageData.OURJOURNEY} />
      <DEVILFRUITS data={landingPageData.DEVILFRUITS} />
      <MOMENTS data={landingPageData.MOMENTS} />
      <ACTORSSAY data={landingPageData.ACTORSSAY} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
