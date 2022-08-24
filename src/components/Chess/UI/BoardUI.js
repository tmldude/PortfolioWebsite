import React, { Fragment } from "react";
import { pieceImage } from "../ChessConfig";

const ChessBoard = (props) => {
  const needBlackScreen =
    props.whitePromo || props.blackPromo || props.checkmate || !props.gameNotStarted;

  return (
    <Fragment>
      {props.whitePromo && (
        <div className="promotion-overlay promotion-overlay__white">
          <div className="promotion-overlay__box">
            <div
              className="piece-image"
              id="whiteRookPromo"
              onClick={props.whitePromoHandler}
            >
              <img
                draggable="true"
                src={pieceImage.white_rook}
                alt=""
                className="piece-image__image"
                id="whiteRookPromo"
              />
            </div>
          </div>

          <div className="promotion-overlay__box">
            <div
              className="piece-image"
              id="whiteKnightPromo"
              onClick={props.whitePromoHandler}
            >
              <img
                draggable="true"
                src={pieceImage.white_knight}
                alt=""
                className="piece-image__image"
                id="whiteKnightPromo"
              />
            </div>
          </div>
          <div className="promotion-overlay__box">
            <div
              className="piece-image"
              id="whiteBishopPromo"
              onClick={props.whitePromoHandler}
            >
              <img
                draggable="true"
                src={pieceImage.white_bishop}
                alt=""
                className="piece-image__image"
                id="whiteBishopPromo"
              />
            </div>
          </div>
          <div className="promotion-overlay__box">
            <div
              className="piece-image"
              id="whiteQueenPromo"
              onClick={props.whitePromoHandler}
            >
              <img
                draggable="true"
                src={pieceImage.white_queen}
                alt=""
                className="piece-image__image"
                id="whiteQueenPromo"
              />
            </div>
          </div>
        </div>
      )}
      {props.blackPromo && (
        <div className="promotion-overlay promotion-overlay__black">
          <div className="promotion-overlay__box">
            <div
              className="piece-image"
              id="blackRookPromo"
              onClick={props.blackPromoHandler}
            >
              <img
                draggable="true"
                src={pieceImage.black_rook}
                alt=""
                className="piece-image__image"
                id="blackRookPromo"
              />
            </div>
          </div>
          <div className="promotion-overlay__box">
            <div
              className="piece-image"
              id="blackKnightPromo"
              onClick={props.blackPromoHandler}
            >
              <img
                draggable="true"
                src={pieceImage.black_knight}
                alt=""
                className="piece-image__image"
                id="blackKnightPromo"
              />
            </div>
          </div>
          <div className="promotion-overlay__box">
            <div
              className="piece-image"
              id="blackBishopPromo"
              onClick={props.blackPromoHandler}
            >
              <img
                draggable="true"
                src={pieceImage.black_bishop}
                alt=""
                className="piece-image__image"
                id="blackBishopPromo"
              />
            </div>
          </div>
          <div className="promotion-overlay__box">
            <div
              className="piece-image"
              id="blackQueenPromo"
              onClick={props.blackPromoHandler}
            >
              <img
                draggable="true"
                src={pieceImage.black_queen}
                alt=""
                className="piece-image__image"
                id="blackQueenPromo"
              />
            </div>
          </div>
        </div>
      )}
      {needBlackScreen && (
        <div className="promotion-black-out">
          {props.checkmate && (
            <div className="checkmate-box">
              <span className="checkmate-box__text">{props.checkmateText}</span>{" "}
              <button onClick={props.gameRestartHandler} className="checkmate-box__button">
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
