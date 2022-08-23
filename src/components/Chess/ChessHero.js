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
          To play, click on the piece and then the square you want to move it to. Then click again and wait for the bot to play.
          Features still unimplemented: castling, promotion, smarter bot
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
