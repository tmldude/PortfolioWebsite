import React from "react";

import PieceUI from "../UI/PieceUI";
import {
  pieceImage,
  posWhitePromos,
  posBlackPromos,
  startingMap,
  horizontalAxis,
  veritcalAxis,
  beatMachineText,
  // machineWinsText,
  // whiteWinsText,
  // blackWinsText,
  boardDarkTileColor,
  boardTextColor,
  boardLightTileColor,
} from "../ChessConfig";
import BoardUI from "../UI/BoardUI";
import {
  ChessPiece,
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
  attemptCastle,
} from "./Piece";

const copier = (oldDict) => {
  let copy = {};
  Object.assign(copy, oldDict);
  return copy;
};

const initialState = {
  pieceLoc: copier(startingMap),
  selectedPieces: [],
  whiteKingIndex: "e1",
  blackKingIndex: "e8",
  whiteMove: true,
  lastMove: [],
  whitePromotion: false,
  blackPromotion: false,
  promotionID: undefined,
  checkmate: false,
  checkmateText: "",
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState, humanMove: copier(props.startColor)};
    this.startColor = this.props.startColor;
    this.begin = this.props.begin;
  }

  possibleMoves = (start) => {
    let newLoc = this.state.pieceLoc;
    let selectedPiece = newLoc[start].name;
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
      let posCastlingMoves = [];
      if (
        !newLoc[start].hasMoved &&
        checkKingAttacked(newLoc, start, this.state.whiteMove).length === 0
      ) {
        posCastlingMoves = attemptCastle(
          this.state.pieceLoc,
          this.state.whiteMove
        );
      }
      moves = moves.concat(posCastlingMoves);
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
    console.log(this.state.humanMove)
    if (
      !this.state.humanMove &&
      !this.state.whitePromotion &&
      !this.state.blackPromotion
    ) {
      this.robotInputHandler();
    } else if (!this.state.whitePromotion && !this.state.blackPromotion) {
      if (
        this.state.pieceLoc[e.target.id] === undefined &&
        this.state.selectedPieces.length === 0
      ) {
        console.log("you selected nothing");
      } else if (this.state.selectedPieces.length === 0) {
        if (
          this.state.whiteMove &&
          this.state.pieceLoc[e.target.id].color === "b"
        ) {
          console.log("choose a white piece");
        } else if (
          !this.state.whiteMove &&
          this.state.pieceLoc[e.target.id].color === "w"
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
    } else {
      console.log("promo in progress");
    }
  };

  robotInputHandler = () => {
    let color = this.props.startColor ? 'b' : 'w'
    let allRoboMoves = [];
    for (const [key, val] of Object.entries(this.state.pieceLoc)) {
      if (val !== undefined && val.color === color) {
        let posMoves = this.possibleMoves(key);
        for (let move of posMoves) {
          allRoboMoves.push([key, move]);
        }
      }
    }
    if (allRoboMoves.length === 0) {
      this.setState((state) => {
        return {
          ...state,
          checkmate: true,
          checkmateText: beatMachineText,
        };
      });
    } else {
      let randElement =
        allRoboMoves[Math.floor(Math.random() * allRoboMoves.length)];

      console.log(allRoboMoves);
      this.moveFinalizer(randElement[0], randElement[1]);
    }
  };

  //robot promotion intelligence function
  roboPromoIntelligence = (posPromos) => {
    console.log(posPromos.length);
    return posPromos[Math.floor(Math.random() * posPromos.length)];
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

  whitePromotionHandler = (e) => {
    let newLoc = this.state.pieceLoc;
    if (e.target.id === "whiteRookPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("white_rook");
      this.endPromo(newLoc);
    }
    if (e.target.id === "whiteKnightPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("white_knight");
      this.endPromo(newLoc);
    }
    if (e.target.id === "whiteBishopPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("white_bishop");
      this.endPromo(newLoc);
    }
    if (e.target.id === "whiteQueenPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("white_queen");
      this.endPromo(newLoc);
    }
  };

  blackPromotionHandler = (e) => {
    let newLoc = this.state.pieceLoc;
    if (e.target.id === "blackRookPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("white_rook");
      this.endPromo(newLoc);
    }
    if (e.target.id === "blackKnightPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("white_knight");
      this.endPromo(newLoc);
    }
    if (e.target.id === "blackBishopPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("white_bishop");
      this.endPromo(newLoc);
    }
    if (e.target.id === "blackQueenPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("white_queen");
      this.endPromo(newLoc);
    }
  };

  endPromo = (newLoc) => {
    this.setState((state) => {
      return {
        ...state,
        pieceLoc: newLoc,
        whitePromotion: false,
        blackPromotion: false,
        promotionID: undefined,
      };
    });
  };

  moveFinalizer = (start, end) => {
    let newLoc = this.state.pieceLoc;
    let selectedPiece = newLoc[start].name;
    let tempLastMoves = [start, end];
    let kingEnd = end;

    if (selectedPiece.includes("king") && !newLoc[start].has_moved) {
      if (end === "a1" && newLoc["h8"] !== undefined) {
        newLoc["d1"] = newLoc["a1"];
        newLoc["a1"] = undefined;
        newLoc["d1"].hasMoved = true;
        kingEnd = "c1";
      }
      if (end === "h1" && newLoc["h8"] !== undefined) {
        newLoc["f1"] = newLoc["h1"];
        newLoc["h1"] = undefined;
        newLoc["f1"].hasMoved = true;
        kingEnd = "g1";
      }
      if (end === "a8" && newLoc["h8"] !== undefined) {
        newLoc["d8"] = newLoc["a8"];
        newLoc["a8"] = undefined;
        newLoc["d8"].hasMoved = true;
        kingEnd = "c8";
      }
      if (end === "h8" && newLoc["h8"] !== undefined) {
        newLoc["f8"] = newLoc["h8"];
        newLoc["h8"] = undefined;
        newLoc["f8"].hasMoved = true;
        kingEnd = "g8";
      }
    }

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

    if (kingEnd !== end) {
      newLoc[kingEnd] = newLoc[start];
      newLoc[start] = undefined;
      newLoc[kingEnd].hasMoved = true;
    } else {
      newLoc[end] = newLoc[start];
      newLoc[start] = undefined;
      newLoc[end].hasMoved = true;
    }

    if (selectedPiece === "white_king") {
      this.setState((state) => {
        return {
          ...state,
          whiteKingIndex: kingEnd,
        };
      });
    }
    if (selectedPiece === "black_king") {
      this.setState((state) => {
        return {
          ...state,
          blackKingIndex: kingEnd,
        };
      });
    }
    this.setState((state) => {
      return {
        ...state,
        pieceLoc: newLoc,
        lastMove: tempLastMoves,
        selectedPieces: [],
      };
    });
    if (selectedPiece.includes("pawn")) {
      if (end.charAt(1) === "8") {
        if (this.state.humanMove) {
          this.setState((state) => {
            return {
              ...state,
              whitePromotion: true,
              promotionID: end,
            };
          });
        } else {
          let newLoc = this.state.pieceLoc;
          newLoc[end] = this.roboPromoIntelligence(posWhitePromos);
          this.setState((state) => {
            return {
              ...state,
              pieceLoc: newLoc,
            };
          });
        }
      }
      if (end.charAt(1) === "1") {
        if (this.state.humanMove) {
          this.setState((state) => {
            return {
              ...state,
              blackPromotion: true,
              promotionID: end,
            };
          });
        } else {
          let newLoc = this.state.pieceLoc;
          newLoc[end] = this.roboPromoIntelligence(posBlackPromos);
          this.setState((state) => {
            return {
              ...state,
              pieceLoc: newLoc,
            };
          });
        }
      }
    }
    this.setState((state) => {
      return {
        ...state,
        whiteMove: !state.whiteMove,
        humanMove: !state.humanMove,
      };
    });
    console.log("move success");
  };

  //human white move first
  // for (let i = veritcalAxis.length - 1; i >= 0; i--) {
  //   for (let j = 0; j < horizontalAxis.length; j++) {

  //human black first
  //for (let i = 0; i < veritcalAxis.length; i++) {
  //for (let j = horizontalAxis.length - 1; j >= 0; j--) {

  buildBoard = () => {
    let board = [];
    let BoOr = this.props.startColor;

    let i = 0;
    let j = 0;
    for (
      BoOr ? (i = veritcalAxis.length - 1) : (i = 0);
      BoOr ? i >= 0 : i < veritcalAxis.length;
      BoOr ? i-- : i++
    ) {
      for (
        BoOr ? (j = 0) : (j = horizontalAxis.length - 1);
        BoOr ? j < horizontalAxis.length : j >= 0;
        BoOr ? j++ : j--
      ) {
        let tileColor = boardLightTileColor; //tile color dark
        let textColor = boardTextColor;
        let numberText = "";
        let letterText = "";
        let isBorderBox = false;
        let iCurr = horizontalAxis[j];
        let jCurr = veritcalAxis[i];
        let image = undefined;
        if (this.state.pieceLoc[iCurr + jCurr] !== undefined) {
          image = pieceImage[this.state.pieceLoc[iCurr + jCurr].name];
        }
        let showPiece = image !== undefined;

        //change ^Above^ to make the board black or white first

        if ((i + j) % 2 === 0) {
          tileColor = boardDarkTileColor; //tile color lightboard;
          //textColor = "black";
        }
        if (BoOr ? j === 0 : j === 7) {
          numberText = jCurr;
          if (i === 0 || i === 7) {
            isBorderBox = true;
          }
        }
        if (BoOr ? i === 0 : i === 7) {
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

  gameRestartHandler = () => {
    this.setState((state) => {
      return {
        ...initialState,
        pieceLoc: copier(startingMap),
        humanMove: !state.humanMove
      };
    });
  };

  render() {
    return (
      <BoardUI
        gameNotStarted={this.props.begin}
        whitePromo={this.state.whitePromotion}
        blackPromo={this.state.blackPromotion}
        whitePromoHandler={this.whitePromotionHandler}
        blackPromoHandler={this.blackPromotionHandler}
        checkmate={this.state.checkmate}
        checkmateText={this.state.checkmateText}
        board={this.buildBoard()}
        gameRestartHandler={this.gameRestartHandler}
      ></BoardUI>
    );
  }
}

export default Game;
