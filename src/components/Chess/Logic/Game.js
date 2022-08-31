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
  machineWinsText,
  // whiteWinsText,
  // blackWinsText,
  stalemateText,
  boardDarkTileColor,
  boardTextColor,
  boardLightTileColor,
  highlightColor,
  lastMoveHighlight,
  //inCheckColor,
  copier,
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
  findAllAttackers,
  attemptCastle,
} from "./Piece";
import {
  //findAllMovesThatWillMakeACheck,
  calculateBoardValue,
} from "./Bot";

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
  chosenHighlight: undefined,
  whiteKingCheck: false,
  blackKingCheck: false,
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.startColor = this.props.startColor;
    this.begin = this.props.begin;
    this.onBegin = true;
    this.humanMove = this.props.startColor;
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
        findAllAttackers(newLoc, start, this.state.whiteMove).length === 0
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
      let copy = copier(this.state.pieceLoc);
      let temp = copy[start];
      copy[move] = temp;
      copy[start] = undefined;
      let checks = [];
      if (selectedPiece.includes("king")) {
        checks = findAllAttackers(copy, move, this.state.whiteMove);
      } else {
        checks = findAllAttackers(
          copy,
          this.state.whiteMove
            ? this.state.whiteKingIndex
            : this.state.blackKingIndex,
          this.state.whiteMove
        );
      }
      if (checks.length === 0) {
        checked.push(move);
      }
    }

    return checked;
  };

  getAllPossibleMoves = (color) => {
    let allPosMoves = [];
    for (const [key, val] of Object.entries(this.state.pieceLoc)) {
      if (val !== undefined && val.color === color) {
        let posMoves = this.possibleMoves(key);
        for (let move of posMoves) {
          allPosMoves.push([key, move]);
        }
      }
    }
    return allPosMoves;
  };

  checkIfCheckmateOrStalemate = (allPosMoves) => {
    if (allPosMoves.length === 0) {
      let checks = [];

      checks = findAllAttackers(
        this.state.pieceLoc,
        this.state.whiteMove
          ? this.state.whiteKingIndex
          : this.state.blackKingIndex,
        this.state.whiteMove
      );
      if (checks.length !== 0) {
        this.setState((state) => {
          return {
            ...state,
            checkmate: true,
            checkmateText: !this.humanMove ? beatMachineText : machineWinsText,
          };
        });
      } else {
        this.setState((state) => {
          return {
            ...state,
            checkmate: true,
            checkmateText: stalemateText,
          };
        });
      }
    }
  };

  selectedTileHandler = (e) => {
    if (
      (this.onBegin ? !this.props.startColor : !this.humanMove) &&
      !this.state.whitePromotion &&
      !this.state.blackPromotion
    ) {
      if (this.props.startColor) {
        this.robotInputHandler("b");
      } else {
        this.robotInputHandler("w");
      }
    }

    let allPosHumanMoves = this.getAllPossibleMoves(
      this.props.startColor ? "w" : "b"
    );
    this.checkIfCheckmateOrStalemate(allPosHumanMoves);

    if (!this.state.whitePromotion && !this.state.blackPromotion) {
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
          console.log("-----------------------------")
          //console.log(this.minimax(this.state.pieceLoc, 2, this.state.whiteMove))
          console.log(this.state.pieceLoc[e.target.id].name)
          console.log(this.state.pieceLoc[e.target.id].hasMoved)
          console.log("-----------------------------")
          this.setState((state) => {
            return {
              ...state,
              selectedPieces: [e.target.id],
              chosenHighlight: e.target.id,
            };
          });
        }
      } else if (
        this.state.selectedPieces.length === 1 &&
        this.state.selectedPieces[0] === e.target.id
      ) {
        this.setState((state) => {
          return { ...state, selectedPieces: [], chosenHighlight: undefined };
        });
      } else {
        console.log("move attempt......");
        this.humanInputHandler(this.state.selectedPieces[0], e.target.id);
      }
    } else {
      console.log("promo in progress");
    }
  };

  minimax = (pieceLoc, depth, isWhite) => {
    if (depth === 0 || pieceLoc === undefined) {
      return calculateBoardValue(pieceLoc); //the value of the current pieceLoc
    } else if (isWhite) {
      let value = -Number.MAX_VALUE;
      let allPosMoves = this.getAllPossibleMoves('w');

      for (let move of allPosMoves) {
        let copy = copier(pieceLoc);
        copy[move[1]] = copy[move[0]];
        copy[move[0]] = undefined;

        value = Math.max(value, this.minimax(copy, depth - 1, false));
      }
      return value;
    } else {
      let value = Number.MAX_VALUE;
      let allPosMoves = this.getAllPossibleMoves('b');

      for (let move of allPosMoves) {
        let copy = copier(pieceLoc);
        copy[move[1]] = copy[move[0]];
        copy[move[0]] = undefined;

        value = Math.min(value, this.minimax(copy, depth - 1, true));
      }
      return value;
    }
  };

  robotInputHandler = (color) => {
    let allRoboMoves = this.getAllPossibleMoves(color);

    if (allRoboMoves.length === 0) {
      this.checkIfCheckmateOrStalemate(allRoboMoves);
    } else {
      let randElement =
        allRoboMoves[Math.floor(Math.random() * allRoboMoves.length)];

      this.moveFinalizer(randElement[0], randElement[1]);
    }
  };

  //robot promotion intelligence function
  roboPromoIntelligence = (posPromos) => {
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
          chosenHighlight: undefined,
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
      newLoc[this.state.promotionID] = new ChessPiece("black_rook");
      this.endPromo(newLoc);
    }
    if (e.target.id === "blackKnightPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("black_knight");
      this.endPromo(newLoc);
    }
    if (e.target.id === "blackBishopPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("black_bishop");
      this.endPromo(newLoc);
    }
    if (e.target.id === "blackQueenPromo") {
      newLoc[this.state.promotionID] = new ChessPiece("black_queen");
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
        chosenHighlight: undefined,
      };
    });
  };

  moveFinalizer = (start, end) => {
    let newLoc = this.state.pieceLoc;
    let selectedPiece = newLoc[start].name;
    let tempLastMoves = [start, end];
    let kingEnd = end;

    if (selectedPiece.includes("king")) {
      if (end === "a1" && newLoc["a1"] !== undefined) {
        newLoc["d1"] = newLoc["a1"];
        newLoc["a1"] = undefined;
        newLoc["d1"].hasMoved = true;
        kingEnd = "c1";
      }
      if (end === "h1" && newLoc["h1"] !== undefined) {
        newLoc["f1"] = newLoc["h1"];
        newLoc["h1"] = undefined;
        newLoc["f1"].hasMoved = true;
        kingEnd = "g1";
      }
      if (end === "a8" && newLoc["a8"] !== undefined) {
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

    if (this.state.lastMove.length !== 0) {
      if (
        newLoc[this.state.lastMove[1]] !== undefined &&
        ((selectedPiece === "black_pawn" &&
          newLoc[this.state.lastMove[1]].name === "white_pawn") ||
          (selectedPiece === "white_pawn" &&
            newLoc[this.state.lastMove[1]].name === "black_pawn"))
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
        chosenHighlight: undefined,
      };
    });
    if (selectedPiece.includes("pawn")) {
      if (end.charAt(1) === "8") {
        if (this.humanMove) {
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
        if (this.humanMove) {
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
      };
    });
    if (!this.props.startColor && this.onBegin) {
      this.humanMove = true;
    } else {
      this.humanMove = !this.humanMove;
    }
    this.onBegin = false;
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

    this.roboIsWhite = BoOr;

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
        let highlight =
          this.state.lastMove.length === 2 &&
          (this.state.lastMove[0] === iCurr + jCurr ||
            this.state.lastMove[1] === iCurr + jCurr);

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
        if (this.state.chosenHighlight === iCurr + jCurr) {
          tileColor = highlightColor;
        }
        if (
          this.state.lastMove.length === 2 &&
          (this.state.lastMove[0] === iCurr + jCurr ||
            this.state.lastMove[1] === iCurr + jCurr)
        ) {
          tileColor = lastMoveHighlight;
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
            highlight={highlight}
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
      };
    });
    this.onBegin = true;
    this.humanMove = this.props.startColor;
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
