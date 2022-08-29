import React from "react";
import { pieceImage } from "../ChessConfig";

const PromotionUI = (props) => {
  let whiteOrBlack = props.color === "white";
  let whitePromos = [
    pieceImage.white_rook,
    pieceImage.white_knight,
    pieceImage.white_bishop,
    pieceImage.white_queen,
  ];
  let blackPromos = [
    pieceImage.black_rook,
    pieceImage.black_knight,
    pieceImage.black_bishop,
    pieceImage.black_queen,
  ];

  let promoPieces = whiteOrBlack ? whitePromos : blackPromos;

  return (
    <div
      className={`promotion-overlay ${
        whiteOrBlack ? "promotion-overlay__white" : "promotion-overlay__black"
      }`}
    >
      <div className="promotion-overlay__box">
        <div
          className="piece-image"
          id={props.color + "RookPromo"}
          onClick={props.promoHandler}
        >
          <img
            draggable="true"
            src={promoPieces[0]}
            alt=""
            className="piece-image__image"
            id={props.color + "RookPromo"}
          />
        </div>
      </div>

      <div className="promotion-overlay__box">
        <div
          className="piece-image"
          id={props.color + "KnightPromo"}
          onClick={props.promoHandler}
        >
          <img
            draggable="true"
            src={promoPieces[1]}
            alt=""
            className="piece-image__image"
            id={props.color + "KnightPromo"}
          />
        </div>
      </div>
      <div className="promotion-overlay__box">
        <div
          className="piece-image"
          id={props.color + "BishopPromo"}
          onClick={props.promoHandler}
        >
          <img
            draggable="true"
            src={promoPieces[2]}
            alt=""
            className="piece-image__image"
            id={props.color + "BishopPromo"}
          />
        </div>
      </div>
      <div className="promotion-overlay__box">
        <div
          className="piece-image"
          id={props.color + "QueenPromo"}
          onClick={props.promoHandler}
        >
          <img
            draggable="true"
            src={promoPieces[3]}
            alt=""
            className="piece-image__image"
            id={props.color + "QueenPromo"}
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionUI;
