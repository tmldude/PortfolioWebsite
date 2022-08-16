import PieceUI from "../UI/PieceUI";
import React from "react";
import { pieceImage } from "../UI/ChessConfigUI";
import BoardUI from "../UI/BoardUI";
import {
  bishopMove,
  kingMove,
  knightMove,
  //   letToNum,
  //   numToLet,
  pawnMoveBlack,
  pawnMoveWhite,
  queenMove,
  rookMove,
} from "./Piece";

const startingMap = {
  a1: "white_rook",
  b1: "white_knight",
  c1: "white_bishop",
  d1: "white_queen",
  e1: "white_king",
  f1: "white_bishop",
  g1: "white_knight",
  h1: "white_rook",
  a2: "white_pawn",
  b2: "white_pawn",
  c2: "white_pawn",
  d2: "white_pawn",
  e2: "white_pawn",
  f2: "white_pawn",
  g2: "white_pawn",
  h2: "white_pawn",
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
  a7: "black_pawn",
  b7: "black_pawn",
  c7: "black_pawn",
  d7: "black_pawn",
  e7: "black_pawn",
  f7: "black_pawn",
  g7: "black_pawn",
  h7: "black_pawn",
  a8: "black_rook",
  b8: "black_knight",
  c8: "black_bishop",
  d8: "black_queen",
  e8: "black_king",
  f8: "black_bishop",
  g8: "black_knight",
  h8: "black_rook",
};

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const veritcalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceLoc: startingMap,
      selectedPieces: [],
      whiteKingIndex: "e1",
      blackKingIndex: "e8",
      whiteMove: true,
      lastMove: [],
    };
  }

  move(start, end) {
    let newLoc = this.state.pieceLoc;
    let selectedPiece = newLoc[start];
    let moves = [];

    if (selectedPiece === "white_pawn") {
      moves = pawnMoveWhite(start, newLoc, this.state.lastMove);
    } else if (selectedPiece === "black_pawn") {
      moves = pawnMoveBlack(start, newLoc, this.state.lastMove);
    } else if (selectedPiece.includes("rook")) {
      moves = rookMove(start, newLoc, this.state.whiteMove);
    } else if (selectedPiece.includes("bishop")) {
      moves = bishopMove(start, newLoc, this.state.whiteMove);
    } else if (selectedPiece.includes("knight")) {
      moves = knightMove(start, newLoc, this.state.whiteMove);
    } else if (selectedPiece.includes("queen")) {
      moves = queenMove(start, newLoc, this.state.whiteMove);
    } else {
      moves = kingMove(start, newLoc, this.state.whiteMove);
    }

    let tempLastMoves = [];
    if (moves.includes(end)) {
      //   tempLastMoves.push(this.pieceLoc[start]);
      //   tempLastMoves.push(this.pieceLoc[end]);
      newLoc[end] = selectedPiece;
      newLoc[start] = undefined;
    } else {
      console.log("no moves");
    }

    this.setState((state) => {
      return {
        ...state,
        pieceLoc: newLoc,
        lastMove: tempLastMoves,
        selectedPieces: [],
      };
    });
  }

  selectedTileHandler = (e) => {
    if (
      this.state.pieceLoc[e.target.id] === undefined &&
      this.state.selectedPieces.length === 0
    ) {
      console.log("you selected nothing");
    } else if (this.state.selectedPieces.length === 0) {
      this.setState((state) => {
        return { ...state, selectedPieces: [e.target.id] };
      });
    } else if (
      this.state.selectedPieces.length === 1 &&
      this.state.selectedPieces[0] === e.target.id
    ) {
      this.setState((state) => {
        return { ...state, selectedPieces: [] };
      });
    } else {
      console.log("moving");
      this.setState((state) => {
        return {
          ...state,
          selectedPieces: state.selectedPieces.push(e.target.id),
        };
      });
      this.move(this.state.selectedPieces[0], e.target.id);
    }
    // } else {
    //   console.log("you selected nothing");
    // }
  };

  buildBoard = () => {
    let board = [];

    for (let i = veritcalAxis.length - 1; i >= 0; i--) {
      for (let j = 0; j < horizontalAxis.length; j++) {
        let tileColor = "#261e1a"; //tile color dark
        let textColor = "#9497a0";
        let numberText = "";
        let letterText = "";
        let isBorderBox = false;
        let iCurr = horizontalAxis[j];
        let jCurr = veritcalAxis[i];
        let image = pieceImage[this.state.pieceLoc[iCurr + jCurr]];
        let showPiece = image !== undefined;

        //change ^Above^ to make the board black or white first

        if ((i + j) % 2 === 0) {
          tileColor = "#4b648a"; //tile color light
          //textColor = "black";
        }
        if (j === 0) {
          numberText = jCurr;
          if (i === 0 || i === 7) {
            isBorderBox = true;
          }
        }
        if (i === 0) {
          letterText = horizontalAxis[j];
          if (j === 0 || j === 7) {
            isBorderBox = true;
          }
        }

        board.push(
          <PieceUI
            key={iCurr + jCurr}
            id={iCurr + jCurr}
            color={tileColor}
            textColor={textColor}
            text={iCurr + jCurr}
            showPiece={showPiece}
            numberText={numberText}
            letterText={letterText}
            isBorderBox={isBorderBox}
            image={image}
            clickedSquareHandler={this.selectedTileHandler}
          />
        );
      }
    }
    return board;
  };

  render() {
    return <BoardUI board={this.buildBoard()}></BoardUI>;
  }
}

export default Game;
