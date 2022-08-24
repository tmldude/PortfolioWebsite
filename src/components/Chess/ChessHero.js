import React, { useState } from "react";
import "../../sass/main.scss";
//import starImage from "../../images/star-background.jpg";
import Game from "./Logic/Game";

const ChessHero = () => {
  const [whiteOrBlack, setWhiteOrBlack] = useState(true);
  const [begin, setBegin] = useState(false);

  const changeStartingColor = () => {
    setWhiteOrBlack((bool) => {return(!bool)});
  };

  const startGameHandler = () => {

    setBegin(true);
    // if (whiteOrBlack === undefined) {
    //   setWhiteOrBlack(true)
    // }
    console.log(whiteOrBlack);
  };

  return (
    <section className="section-chess">
      <div className="chess-main-box">
        <h1>Chess Engine</h1>
        <p>
          To play, click on the piece and then the square you want to move it
          to. Then click again and wait for the bot to play.
          <span style={{ marginLeft: 15 }}>
            Features Unimplemented: Lose conditions, black player start, smarter bot
          </span>
        </p>
        <span style={{ marginRight: 55 }}>
          Select Color and play against my engine!
        </span>
        <button
          onClick={changeStartingColor}
          className={`chess-button ${
            whiteOrBlack ? "chess-button__white" : "chess-button__black"
          }`}
        >
          {whiteOrBlack ? "white" : "black"}
        </button>
        <button
          onClick={startGameHandler}
          className="chess-button chess-button__begin"
        >
          begin
        </button>
      </div>
      <div className="chessboard-box">
        <Game startColor={whiteOrBlack} begin={begin} />
      </div>
    </section>
  );
};

export default ChessHero;
