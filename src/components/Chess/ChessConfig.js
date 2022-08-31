import whitePawn from "../../images/piece_images/white_pawn.png";
import whiteRook from "../../images/piece_images/white_rook.png";
import whiteKnight from "../../images/piece_images/white_knight.png";
import whiteBishop from "../../images/piece_images/white_bishop.png";
import whiteQueen from "../../images/piece_images/white_queen.png";
import whiteKing from "../../images/piece_images/white_king.png";
import blackPawn from "../../images/piece_images/black_pawn.png";
import blackRook from "../../images/piece_images/black_rook.png";
import blackKnight from "../../images/piece_images/black_knight.png";
import blackBishop from "../../images/piece_images/black_bishop.png";
import blackQueen from "../../images/piece_images/black_queen.png";
import blackKing from "../../images/piece_images/black_king.png";
import { ChessPiece } from "./Logic/Piece";

export const copier = (oldDict) => {
  let copy = {};
  Object.assign(copy, oldDict);
  return copy;
};

export const pieceImage = {
  white_pawn: whitePawn,
  white_knight: whiteKnight,
  white_bishop: whiteBishop,
  white_rook: whiteRook,
  white_queen: whiteQueen,
  white_king: whiteKing,
  black_pawn: blackPawn,
  black_knight: blackKnight,
  black_bishop: blackBishop,
  black_rook: blackRook,
  black_queen: blackQueen,
  black_king: blackKing,
};

export const posWhitePromos = [
  new ChessPiece("white_rook"),
  new ChessPiece("white_knight"),
  new ChessPiece("white_bishop"),
  new ChessPiece("white_queen"),
];

export const posBlackPromos = [
  new ChessPiece("black_rook"),
  new ChessPiece("black_knight"),
  new ChessPiece("black_bishop"),
  new ChessPiece("black_queen"),
];

export const startingMap = {
  a1: new ChessPiece("white_rook"),
  b1: new ChessPiece("white_knight"),
  c1: new ChessPiece("white_bishop"),
  d1: new ChessPiece("white_queen"),
  e1: new ChessPiece("white_king"),
  f1: new ChessPiece("white_bishop"),
  g1: new ChessPiece("white_knight"),
  h1: new ChessPiece("white_rook"),
  a2: new ChessPiece("white_pawn"),
  b2: new ChessPiece("white_pawn"),
  c2: new ChessPiece("white_pawn"),
  d2: new ChessPiece("white_pawn"),
  e2: new ChessPiece("white_pawn"),
  f2: new ChessPiece("white_pawn"),
  g2: new ChessPiece("white_pawn"),
  h2: new ChessPiece("white_pawn"),
  a3: undefined,
  b3: undefined,
  d3: undefined,
  e3: undefined,
  f3: undefined,
  g3: undefined,
  h3: undefined,
  a4: undefined,
  b4: undefined,
  c4: undefined,
  d4: undefined,
  e4: undefined,
  f4: undefined,
  g4: undefined,
  h4: undefined,
  a5: undefined,
  b5: undefined,
  c5: undefined,
  d5: undefined,
  e5: undefined,
  f5: undefined,
  g5: undefined,
  h5: undefined,
  a6: undefined,
  b6: undefined,
  c6: undefined,
  d6: undefined,
  e6: undefined,
  f6: undefined,
  g6: undefined,
  h6: undefined,
  a7: new ChessPiece("black_pawn"),
  b7: new ChessPiece("black_pawn"),
  c7: new ChessPiece("black_pawn"),
  d7: new ChessPiece("black_pawn"),
  e7: new ChessPiece("black_pawn"),
  f7: new ChessPiece("black_pawn"),
  g7: new ChessPiece("black_pawn"),
  h7: new ChessPiece("black_pawn"),
  a8: new ChessPiece("black_rook"),
  b8: new ChessPiece("black_knight"),
  c8: new ChessPiece("black_bishop"),
  d8: new ChessPiece("black_queen"),
  e8: new ChessPiece("black_king"),
  f8: new ChessPiece("black_bishop"),
  g8: new ChessPiece("black_knight"),
  h8: new ChessPiece("black_rook"),
};

export const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const veritcalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const beatMachineText = "You beat the machine!"
export const machineWinsText = "The Machine got you this time..."

export const stalemateText = "Stalemate!"


export const whiteWinsText = "White Wins!"
export const blackWinsText = "Black Wins!"

export const boardDarkTileColor = "#d0dff4" //;#261e1a
export const boardTextColor = "#9497a0";
export const boardLightTileColor = "#4b648a";
export const highlightColor = "#aa8572";
export const lastMoveHighlight = "#aeaeae";
export const inCheckColor = 'rgba(0, 177, 260, 0.7)'


