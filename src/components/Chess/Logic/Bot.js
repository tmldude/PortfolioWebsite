import { findAllAttackers } from "../Logic/Piece";
import { copier } from "../ChessConfig";

let chessValues = {
  white_rook: 50,
  white_knight: 30,
  white_bishop: 31,
  white_queen: 90,
  white_king: 900,
  white_pawn: 10,
  black_rook: -50,
  black_knight: -30,
  black_bishop: -31,
  black_queen: -90,
  black_king: -900,
  black_pawn: -10,
};

export const calculateBoardValue = (pieceLoc) => {
  let value = 0;
  for (const [,piece] of Object.entries(pieceLoc)) {
    if (piece !== undefined) {
      value += chessValues[piece.name];
    }
  }
  return value;
};


export const findAllMovesThatWillMakeACheck = (allPosMoves) => {
  let allCheckMoves = [];

  for (let move of allPosMoves) {
    let copy = copier(this.state.pieceLoc);
    copy[move[1]] = copy[move[0]];
    copy[move[0]] = undefined;

    let checks = [];
    if (this.state.whiteMove) {
      checks = findAllAttackers(
        copy,
        this.state.whiteKingIndex,
        this.state.whiteMove
      );
    } else {
      checks = findAllAttackers(
        copy,
        this.state.blackKingIndex,
        this.state.whiteMove
      );
    }
    if (checks.length !== 0) {
      allCheckMoves.push(move);
    }
  }
  return allCheckMoves;
};

export const findAllPiecesThatAreAttacked = () => {};
