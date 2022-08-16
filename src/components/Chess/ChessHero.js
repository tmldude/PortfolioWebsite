import React from "react";
import "../../sass/main.scss";
//import starImage from "../../images/star-background.jpg";
import Game from "./Logic/Game";

const ChessHero = () => {
  return (
    <section className="section-chess">
      <div className="chess-main-box">
        <h1>Chess Engine</h1>
        <p>
          At The moment, I am copying the game from my Python version. Work in
          progress
        </p>
        {/* Select Color and play against my engine!
        <button className="chess-button chess-button__white">white</button>
        <button className="chess-button chess-button__black">black</button>
        <button className="chess-button chess-button__begin">begin</button> */}
      </div>
      <div className="chessboard-box">
        <Game />
      </div>
    </section>
  );
};

export default ChessHero;
