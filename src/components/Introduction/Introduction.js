import React from "react";
import '../../sass/main.scss'
import starImage from '../../images/star-background.jpg'

const Introduction = () => {
  return (
    <section className="section-intro">
      <img src={starImage} alt="star background"></img>
      <div className="intro-main-box">
        <h1>Teddy's Stuff</h1>
        <p>
          Hi, my name is Teddy and this is my website. Look around to learn
          about my skills and interests!
        </p>
      </div>
    </section>
  );
};

export default Introduction;
