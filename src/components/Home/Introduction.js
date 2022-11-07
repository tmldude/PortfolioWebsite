import React from "react";

import Headshot from "../../images/home/cover-shot.jpg"

const Introduction = () => {
  return (
    <section className="section-home-intro">
      <div className="home-image-box">
        <img className="home-image-box__image" src={Headshot} alt="headshot"></img>

      </div>
      <div>
        <h2 className="hollow-text">Hi, I'm Teddy</h2>
        <h2 className="rainbow-h1">Software Engineer with a psychology twist</h2>
        {/* <div className="row">
            <div className="col-1-of-2">hi</div>
            <div className="col-1-of-2">no</div>
        </div> */}
      </div>
    </section>
  );
};

export default Introduction;
