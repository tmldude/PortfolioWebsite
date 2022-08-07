import React from "react";
import "../../sass/main.scss";

const HeroSection = () => {
  return (
    <section className="section-grid">
      <div className="grid">
        <div className="grid__intro">
          <div className="grid-intro">
            <h1 className="grid-intro__text">IntroDUCTION</h1>
            <p className="grid-intro__paragraph">
              This is where I will put a bunch of information abou the website.
              A brief intoduction and some other stuff
            </p>
          </div>
        </div>
        <div className="grid__about-me">
          <div className="grid-about-me">About Me</div>
        </div>
        <div className="grid__compsci">
          <div className="grid-compsci">Compsci</div>
        </div>
        <div className="grid__psych">
          <div className="grid-psych">psych</div>
        </div>
        <div className="grid__foom">
          <div className="grid-foom">Foom</div>
        </div>
        <div className="grid__this-website">
          <div className="grid-this-website">this website</div>
        </div>
        <div className="grid__whats-foom">
          <div className="grid-whats-foom">whats-foom</div>
        </div>
        <div className="grid__footer">
          <div className="grid-footer">footer</div>
        </div>
        <div className="grid__chess">
          <div className="grid-chess">chess</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
