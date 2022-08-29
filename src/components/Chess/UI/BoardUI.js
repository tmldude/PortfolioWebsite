import React, { Fragment } from "react";
import PromotionUI from "./PromotionUI";

const ChessBoard = (props) => {
  const needBlackScreen =
    props.whitePromo ||
    props.blackPromo ||
    props.checkmate ||
    !props.gameNotStarted;

  return (
    <Fragment>
      {props.whitePromo && (
        <PromotionUI
          promoHandler={props.whitePromoHandler}
          color="white"
        ></PromotionUI>
      )}
      {props.blackPromo && (
        <PromotionUI
          promoHandler={props.blackPromoHandler}
          color="black"
        ></PromotionUI>
      )}
      {needBlackScreen && (
        <div className="promotion-black-out">
          {props.checkmate && (
            <div className="checkmate-box">
              <span className="checkmate-box__text">{props.checkmateText}</span>
              <button
                onClick={props.gameRestartHandler}
                className="checkmate-box__button"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      )}
      <div id="chessboard" className="chess-grid">
        {props.board.map((tile) => tile)}
      </div>
    </Fragment>
  );
};

export default ChessBoard;
