import React from "react";

const ChessBoard = (props) => {
  return (
    <div id="chessboard" className="chess-grid">
      {props.board.map((tile) => tile)}
    </div>
  );
};

export default ChessBoard;
