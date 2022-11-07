import React from "react";
import "../../sass/main.scss";

import IntroBox from "./IntroBox";
import AboutMeBox from "./AboutMeBox";
import CompsciBox from "./CompsciBox";
import FoomBox from "./FoomBox";
import PsychBox from "./PsychBox";
import ThisWebsiteBox from "./ThisWebsiteBox";
import WhatsFoomBox from "./WhatsFoomBox";
import FooterBox from "./FooterBox";
import ChessBox from "./ChessBox";

const AboutChessHero = () => {

  return (
    <section className="section-grid">
      <div className="grid">
        <div className="grid__intro">
          <IntroBox />
        </div>
        <div className="grid__about-me">
          <AboutMeBox />
        </div>
        <div className="grid__compsci">
          <CompsciBox />
        </div>
        <div className="grid__psych">
          <PsychBox />
        </div>
        <div className="grid__foom">
          <FoomBox />
        </div>
        <div className="grid__this-website">
          <ThisWebsiteBox />
        </div>
        <div className="grid__whats-foom">
          <WhatsFoomBox />
        </div>
        <div className="grid__footer">
          <FooterBox />
        </div>
        <div className="grid__chess">
          <ChessBox />
        </div>
        <div className="grid__empty">

        </div>
      </div>
    </section>
  );
};

export default AboutChessHero;
