import React, { useState } from "react";
import "../../sass/main.scss";
//import starImage from "../../images/star-background.jpg";
import Game from "./Logic/Game";

const ChessHero = () => {
  const [whiteOrBlack, setWhiteOrBlack] = useState(true);
  const [begin, setBegin] = useState(false);

  const changeStartingColor = () => {
    if (!begin) {
      setWhiteOrBlack((bool) => {
        return !bool;
      });
    }
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
        <p style={{ margin: 0 }}>
          To Move Pieces: Click on the piece and then the location.
        </p>
        <p style={{ margin: 0 }}>
          {" "}
          To Move the bot: click anywhere on the board
        </p>
        <p style={{ margin: 0 }}>
          <span style={{ marginLeft: 15 }}>
            Features Unimplemented: Smarter Bot
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
          <span style={{ color: begin && 'transparent'}}> {whiteOrBlack ? "White" : "Black"}</span>
        </button>
        <button
          onClick={startGameHandler}
          className="chess-button chess-button__begin"
        >
          Begin
        </button>
      </div>
      <div className="chessboard-box">
        <Game
          startColor={whiteOrBlack}
          begin={begin}
          humanMove={whiteOrBlack}
        />
      </div>
    </section>
  );
};

export default ChessHero;
