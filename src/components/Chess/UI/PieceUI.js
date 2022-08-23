import React from "react";
// import Draggable from "react-draggable";

const PieceUI = ({
  id,
  color,
  textColor,
  text,
  showPiece,
  numberText,
  letterText,
  isBorderBox,
  image,
  selectedOne,
  clickedSquareHandler,
}) => {
  const imageDiv = (
    <img
      draggable="true"
      src={image}
      alt=""
      className="piece-image__image"
      id={id}
    />
  );
  return (
    <div
      className="chess-grid__square"
      style={{ color: textColor, backgroundColor: color }}
    >
      <div className="piece-image" id={id} onClick={clickedSquareHandler}>
        {/* {showPiece && <Draggable>{imageDiv}</Draggable>} */}
        {showPiece && imageDiv}
      </div>
      <span className="number-text">{numberText}</span>
      <span className="letter-text">{letterText}</span>
    </div>
  );
};

export default PieceUI;
