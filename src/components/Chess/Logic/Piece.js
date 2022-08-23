export const numToLet = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
};
export const letToNum = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };

export const pawnMoveWhite = (index, pieceLoc, lastMove) => {
  let xLet = index[0];
  let xNum = letToNum[index[0]];
  let yNum = parseInt(index[1], 10);
  let posMoves = [];

  if (yNum === 8 || yNum === 1) {
    return posMoves;
  }
  if (pieceLoc[xLet + (yNum + 1).toString()] === undefined) {
    posMoves.push(xLet + (yNum + 1).toString());
  }
  if (yNum === 2) {
    if (
      pieceLoc[xLet + (yNum + 1).toString()] === undefined &&
      pieceLoc[xLet + (yNum + 2).toString()] === undefined
    ) {
      posMoves.push(xLet + (yNum + 2).toString());
    }
  }
  if (yNum === 5 && lastMove !== undefined) {
    if (
      lastMove[0].charAt(1) === '7' &&
      lastMove[1].charAt(1) === '5' &&
      (letToNum[lastMove[1].charAt(0)] === xNum + 1 ||
        letToNum[lastMove[1].charAt(0)] === xNum - 1)
    ) {
      posMoves.push(
        lastMove[0].charAt(0) +
          (parseInt(lastMove[0].charAt(1), 10) - 1).toString()
      );
    }
  }
  if (xLet === "a") {
    let coord = numToLet[xNum + 1] + (yNum + 1).toString();
    if (pieceLoc[coord] !== undefined) {
      if (pieceLoc[coord].charAt(0) === "b") {
        posMoves.push(coord);
      }
    }
  } else if (xLet === "h") {
    let coord = numToLet[xNum - 1] + (yNum + 1).toString();
    if (pieceLoc[coord] !== undefined) {
      if (pieceLoc[coord].charAt(0) === "b") {
        posMoves.push(coord);
      }
    }
  } else {
    let coord1 = numToLet[xNum + 1] + (yNum + 1).toString();
    let coord2 = numToLet[xNum - 1] + (yNum + 1).toString();

    if (pieceLoc[coord1] !== undefined) {
      if (pieceLoc[coord1].charAt(0) === "b") {
        posMoves.push(coord1);
      }
    }
    if (pieceLoc[coord2] !== undefined) {
      if (pieceLoc[coord2].charAt(0) === "b") {
        posMoves.push(coord2);
      }
    }
  }
  return posMoves;
};
export const pawnMoveBlack = (index, pieceLoc, lastMove) => {
  let xLet = index[0];
  let xNum = letToNum[index[0]];
  let yNum = parseInt(index[1], 10);
  let posMoves = [];

  if (yNum === 8 || yNum === 1) {
    return posMoves;
  }
  if (pieceLoc[xLet + (yNum - 1).toString()] === undefined) {
    posMoves.push(xLet + (yNum - 1).toString());
  }
  if (yNum === 7) {
    if (
      pieceLoc[xLet + (yNum - 1).toString()] === undefined &&
      pieceLoc[xLet + (yNum - 2).toString()] === undefined
    ) {
      posMoves.push(xLet + (yNum - 2).toString());
    }
  }
  if (yNum === 4 && lastMove !== undefined) {
    if (
      lastMove[0].charAt(1) === '2' &&
      lastMove[1].charAt(1) === '4' &&
      (letToNum[lastMove[1].charAt(0)] === xNum + 1 ||
        letToNum[lastMove[1].charAt(0)] === xNum - 1)
    ) {
      posMoves.push(
        lastMove[0].charAt(0) +
          (parseInt(lastMove[0].charAt(1), 10) + 1).toString()
      );
    }
  }
  if (xLet === "a") {
    let coord = numToLet[xNum + 1] + (yNum - 1).toString();
    if (pieceLoc[coord] !== undefined) {
      if (pieceLoc[coord].charAt(0) === "b") {
        posMoves.push(coord);
      }
    }
  } else if (xLet === "h") {
    let coord = numToLet[xNum - 1] + (yNum - 1).toString();
    if (pieceLoc[coord] !== undefined) {
      if (pieceLoc[coord].charAt(0) === "b") {
        posMoves.push(coord);
      }
    }
  } else {
    let coord1 = numToLet[xNum + 1] + (yNum - 1).toString();
    let coord2 = numToLet[xNum - 1] + (yNum - 1).toString();

    if (pieceLoc[coord1] !== undefined) {
      if (pieceLoc[coord1].charAt(0) === "w") {
        posMoves.push(coord1);
      }
    }
    if (pieceLoc[coord2] !== undefined) {
      if (pieceLoc[coord2].charAt(0) === "w") {
        posMoves.push(coord2);
      }
    }
  }

  return posMoves;
};
export const rookMove = (index, pieceLoc, whiteMove) => {
  let xNum = letToNum[index[0]];
  let xLet = index[0];
  let yNum = parseInt(index[1], 10);
  let yLet = index[1];
  let distXTo1 = xNum - 1;
  let distXTo8 = 8 - xNum;
  let distYTo0 = yNum - 1;
  let distYTo8 = 8 - yNum;
  let posMoves = [];

  let notFound = true;
  if (xNum - 1 > 0) {
    for (let i = 0; i < distXTo1; i++) {
      let currSquare = numToLet[xNum - i - 1] + yLet;
      if (notFound) {
        if (pieceLoc[currSquare] === undefined) {
          posMoves.push(currSquare);
        } else {
          notFound = false;
          if (whiteMove) {
            if (pieceLoc[currSquare].charAt(0) === "b") {
              posMoves.push(currSquare);
            }
          } else {
            if (pieceLoc[currSquare].charAt(0) === "w") {
              posMoves.push(currSquare);
            }
          }
        }
      }
    }
  }

  notFound = true;
  if (xNum + 1 <= 8) {
    for (let i = 0; i < distXTo8; i++) {
      let currSquare = numToLet[xNum + i + 1] + yLet;
      if (notFound) {
        if (pieceLoc[currSquare] === undefined) {
          posMoves.push(currSquare);
        } else {
          notFound = false;
          if (whiteMove) {
            if (pieceLoc[currSquare].charAt(0) === "b") {
              posMoves.push(currSquare);
            }
          } else {
            if (pieceLoc[currSquare].charAt(0) === "w") {
              posMoves.push(currSquare);
            }
          }
        }
      }
    }
  }

  notFound = true;
  if (yNum - 1 > 0) {
    for (let i = 0; i < distYTo0; i++) {
      let currSquare = xLet + (yNum - i - 1).toString();
      if (notFound) {
        if (pieceLoc[currSquare] === undefined) {
          posMoves.push(currSquare);
        } else {
          notFound = false;
          if (whiteMove) {
            if (pieceLoc[currSquare].charAt(0) === "b") {
              posMoves.push(currSquare);
            }
          } else {
            if (pieceLoc[currSquare].charAt(0) === "w") {
              posMoves.push(currSquare);
            }
          }
        }
      }
    }
  }

  notFound = true;
  if (yNum + 1 <= 8) {
    for (let i = 0; i < distYTo8; i++) {
      let currSquare = xLet + (yNum + i + 1).toString();
      if (notFound) {
        if (pieceLoc[currSquare] === undefined) {
          posMoves.push(currSquare);
        } else {
          notFound = false;
          if (whiteMove) {
            if (pieceLoc[currSquare].charAt(0) === "b") {
              posMoves.push(currSquare);
            }
          } else {
            if (pieceLoc[currSquare].charAt(0) === "w") {
              posMoves.push(currSquare);
            }
          }
        }
      }
    }
  }
  return posMoves;
};
export const bishopMove = (index, pieceLoc, whiteMove) => {
  let xNum = letToNum[index[0]];
  let yNum = parseInt(index[1], 10);
  let posMoves = [];
  let found_up_up = false;
  let found_down_down = false;
  let found_up_down = false;
  let found_down_up = false;

  for (let i = 1; i <= 8; i++) {
    if (xNum + i <= 8 && yNum + i <= 8 && !found_up_up) {
      let move = numToLet[xNum + i] + (yNum + i).toString();
      if (!posMoves.includes(move) && move !== index) {
        if (pieceLoc[move] === undefined) {
          posMoves.push(move);
        } else {
          found_up_up = true;
          if (whiteMove) {
            if (pieceLoc[move].charAt(0) === "b") {
              posMoves.push(move);
            }
          } else {
            if (pieceLoc[move].charAt(0) === "w") {
              posMoves.push(move);
            }
          }
        }
      }
    }
    if (xNum - i > 0 && yNum + i <= 8 && !found_down_up) {
      let move = numToLet[xNum - i] + (yNum + i).toString();
      if (!posMoves.includes(move) && move !== index) {
        if (pieceLoc[move] === undefined) {
          posMoves.push(move);
        } else {
          found_down_up = true;
          if (whiteMove) {
            if (pieceLoc[move].charAt(0) === "b") {
              posMoves.push(move);
            }
          } else {
            if (pieceLoc[move].charAt(0) === "w") {
              posMoves.push(move);
            }
          }
        }
      }
    }

    if (xNum + i <= 8 && yNum - i > 0 && !found_up_down) {
      let move = numToLet[xNum + i] + (yNum - i).toString();
      if (!posMoves.includes(move) && move !== index) {
        if (pieceLoc[move] === undefined) {
          posMoves.push(move);
        } else {
          found_up_down = true;
          if (whiteMove) {
            if (pieceLoc[move].charAt(0) === "b") {
              posMoves.push(move);
            }
          } else {
            if (pieceLoc[move].charAt(0) === "w") {
              posMoves.push(move);
            }
          }
        }
      }
    }

    if (xNum - i > 0 && yNum - i <= 8 && !found_down_down) {
      let move = numToLet[xNum - i] + (yNum - i).toString();
      if (!posMoves.includes(move) && move !== index) {
        if (pieceLoc[move] === undefined) {
          posMoves.push(move);
        } else {
          found_down_down = true;
          if (whiteMove) {
            if (pieceLoc[move].charAt(0) === "b") {
              posMoves.push(move);
            }
          } else {
            if (pieceLoc[move].charAt(0) === "w") {
              posMoves.push(move);
            }
          }
        }
      }
    }
  }
  return posMoves;
};
export const knightMove = (index, pieceLoc, whiteMove) => {
  let xNum = letToNum[index[0]];
  let yNum = parseInt(index[1], 10);
  let posMoves = [];

  if (xNum + 2 < 9) {
    if (yNum - 1 > 0) {
      posMoves.push(numToLet[xNum + 2] + (yNum - 1).toString());
    }
    if (yNum + 1 < 9) {
      posMoves.push(numToLet[xNum + 2] + (yNum + 1).toString());
    }
  }
  if (xNum - 2 > 0) {
    if (yNum - 1 > 0) {
      posMoves.push(numToLet[xNum - 2] + (yNum - 1).toString());
    }
    if (yNum + 1 < 9) {
      posMoves.push(numToLet[xNum - 2] + (yNum + 1).toString());
    }
  }
  if (yNum + 2 < 9) {
    if (xNum - 1 > 0) {
      posMoves.push(numToLet[xNum - 1] + (yNum + 2).toString());
    }
    if (xNum + 1 < 9) {
      posMoves.push(numToLet[xNum + 1] + (yNum + 2).toString());
    }
  }
  if (yNum - 2 > 0) {
    if (xNum - 1 > 0) {
      posMoves.push(numToLet[xNum - 1] + (yNum - 2).toString());
    }
    if (xNum + 1 < 9) {
      posMoves.push(numToLet[xNum + 1] + (yNum - 2).toString());
    }
  }

  let verified = [];
  for (let move of posMoves) {
    if (pieceLoc[move] !== undefined) {
      if (whiteMove) {
        if (pieceLoc[move].charAt(0) === "b") {
          verified.push(move);
        }
      } else {
        if (pieceLoc[move].charAt(0) === "w") {
          verified.push(move);
        }
      }
    } else {
      verified.push(move);
    }
  }
  return verified;
};
export const queenMove = (index, pieceLoc, whiteMove) => {
  let rookMoves = rookMove(index, pieceLoc, whiteMove);
  let bishopMoves = bishopMove(index, pieceLoc, whiteMove);
  let posMoves = rookMoves.concat(bishopMoves);
  return posMoves;
};
export const kingMove = (index, pieceLoc, whiteMove) => {
  let xNum = letToNum[index[0]];
  let xLet = index[0];
  let yNum = parseInt(index[1], 10);
  let yLet = index[1];
  let posMoves = [
    numToLet[xNum + 1] + (yNum + 1).toString(),
    numToLet[xNum + 1] + (yNum - 1).toString(),
    numToLet[xNum - 1] + (yNum + 1).toString(),
    numToLet[xNum - 1] + (yNum - 1).toString(),
    numToLet[xNum + 1] + yLet,
    numToLet[xNum - 1] + yLet,
    xLet + (yNum + 1).toString(),
    xLet + (yNum - 1).toString(),
  ];

  let test_moves = [];
  for (let move of posMoves) {
    let new_x = letToNum[move[0]];
    let new_y = parseInt(move[1], 10);
    if (8 >= new_x && new_x >= 1 && 8 >= new_y && new_y >= 1) {
      if (pieceLoc[move] === undefined) {
        test_moves.push(move);
      } else {
        if (whiteMove) {
          if (pieceLoc[move].charAt(0) === "b") {
            test_moves.push(move);
          }
        } else {
          if (pieceLoc[move].charAt(0) === "w") {
            test_moves.push(move);
          }
        }
      }
    }
  }
  return test_moves;
};

export const checkKingAttacked = (pieceLoc, indexKing, isWhite) => {
  let knightPossibles = knightMove(indexKing, pieceLoc, isWhite);
  let rookPossibles = rookMove(indexKing, pieceLoc, isWhite);
  let bishopPossibles = bishopMove(indexKing, pieceLoc, isWhite);
  let kingPossibles = kingMove(indexKing, pieceLoc, isWhite);

  let attackers = [];
  for (let move of knightPossibles) {
    if (pieceLoc[move] !== undefined) {
      if (pieceLoc[move].includes("knight")) {
        attackers.push(move);
      }
    }
  }
  for (let move of rookPossibles) {
    if (pieceLoc[move] !== undefined) {
      if (pieceLoc[move].includes("rook") || pieceLoc[move].includes("queen")) {
        attackers.push(move);
      }
    }
  }
  for (let move of bishopPossibles) {
    if (pieceLoc[move] !== undefined) {
      if (
        pieceLoc[move].includes("bishop") ||
        pieceLoc[move].includes("queen")
      ) {
        attackers.push(move);
      }
      if (pieceLoc[move].includes("pawn")) {
        let pawnPos = null;
        if (!isWhite) {
          pawnPos = pawnMoveWhite(move, pieceLoc);
        } else {
          pawnPos = pawnMoveBlack(move, pieceLoc);
        }
        if (pawnPos.includes(indexKing)) {
          attackers.push(move);
        }
      }
    }
  }
  for (let move of kingPossibles) {
    if (pieceLoc[move] !== undefined) {
      if (pieceLoc[move].includes("king")) {
        attackers.push(move);
      }
    }
  }
  return attackers;
};
