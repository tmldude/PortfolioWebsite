import React from "react";

import PieceUI from "../UI/PieceUI";
import { pieceImage } from "../UI/ChessConfigUI";
import BoardUI from "../UI/BoardUI";
import {
  bishopMove,
  kingMove,
  knightMove,
  letToNum,
  numToLet,
  pawnMoveBlack,
  pawnMoveWhite,
  queenMove,
  rookMove,
  checkKingAttacked,
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
      humanMove: true,
    };
  }

  possibleMoves = (start) => {
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

    let checked = [];
    for (let move of moves) {
      let copy = {};
      Object.assign(copy, this.state.pieceLoc);
      let temp = copy[start];
      copy[move] = temp;
      copy[start] = undefined;
      let checks = [];
      if (selectedPiece.includes("king")) {
        checks = checkKingAttacked(copy, move, this.state.whiteMove);
      } else {
        if (this.state.whiteMove) {
          checks = checkKingAttacked(
            copy,
            this.state.whiteKingIndex,
            this.state.whiteMove
          );
        } else {
          checks = checkKingAttacked(
            copy,
            this.state.blackKingIndex,
            this.state.whiteMove
          );
        }
      }
      if (checks.length === 0) {
        checked.push(move);
      }
    }

    return checked;
  };

  selectedTileHandler = (e) => {
    if (!this.state.humanMove) {
      this.robotInputHandler();
    } else {
      if (
        this.state.pieceLoc[e.target.id] === undefined &&
        this.state.selectedPieces.length === 0
      ) {
        console.log("you selected nothing");
      } else if (this.state.selectedPieces.length === 0) {
        if (
          this.state.whiteMove &&
          this.state.pieceLoc[e.target.id].charAt(0) === "b"
        ) {
          console.log("choose a white piece");
        } else if (
          !this.state.whiteMove &&
          this.state.pieceLoc[e.target.id].charAt(0) === "w"
        ) {
          console.log("choose a black piece");
        } else {
          this.setState((state) => {
            return { ...state, selectedPieces: [e.target.id] };
          });
        }
      } else if (
        this.state.selectedPieces.length === 1 &&
        this.state.selectedPieces[0] === e.target.id
      ) {
        this.setState((state) => {
          return { ...state, selectedPieces: [] };
        });
      } else {
        console.log("move attempt......");
        this.humanInputHandler(this.state.selectedPieces[0], e.target.id);
      }
    }
  };

  robotInputHandler = () => {
    //only works for black first
    let allRoboMoves = [];
    for (const [key, val] of Object.entries(this.state.pieceLoc)) {
      if (val !== undefined && val.charAt(0) === "b") {
        let posMoves = this.possibleMoves(key);
        for (let move of posMoves) {
          allRoboMoves.push([key, move]);
        }
      }
    }
    let randElement =
      allRoboMoves[Math.floor(Math.random() * allRoboMoves.length)];

    console.log(allRoboMoves);
    this.moveFinalizer(randElement[0], randElement[1]);
  };

  humanInputHandler = (start, end) => {
    let allPosMoves = this.possibleMoves(start);
    if (allPosMoves.includes(end)) {
      this.moveFinalizer(start, end);
    } else {
      console.log("no move");
      this.setState((state) => {
        return {
          ...state,
          selectedPieces: [],
        };
      });
    }
  };

  moveFinalizer = (start, end) => {
    let newLoc = this.state.pieceLoc;
    let selectedPiece = newLoc[start];
    let tempLastMoves = [start, end];

    if (
      (selectedPiece === "black_pawn" &&
        newLoc[this.state.lastMove[1]] === "white_pawn") ||
      (selectedPiece === "white_pawn" &&
        newLoc[this.state.lastMove[1]] === "black_pawn")
    ) {
      if (
        newLoc[end] === undefined &&
        (tempLastMoves[1].charAt(0) ===
          numToLet[letToNum[tempLastMoves[0].charAt(0)] + 1] ||
          tempLastMoves[1].charAt(0) ===
            numToLet[letToNum[tempLastMoves[0].charAt(0)] - 1])
      ) {
        newLoc[this.state.lastMove[1]] = undefined;
      }
    }

    newLoc[end] = newLoc[start];
    newLoc[start] = undefined;

    if (selectedPiece === "white_king") {
      this.setState((state) => {
        return {
          ...state,
          whiteKingIndex: end,
        };
      });
    }
    if (selectedPiece === "black_king") {
      this.setState((state) => {
        return {
          ...state,
          blackKingIndex: end,
        };
      });
    }
    this.setState((state) => {
      return {
        ...state,
        pieceLoc: newLoc,
        lastMove: tempLastMoves,
        selectedPieces: [],
        whiteMove: !state.whiteMove,
        humanMove: !state.humanMove,
      };
    });
    console.log("move success");
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
