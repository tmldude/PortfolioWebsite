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
  if (yNum === 5) {
    if (lastMove.length === 2) {
      if (lastMove[0] === "black_pawn") {
        console.log("still unimplemented");
      }
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
    //console.log(pieceLoc[coord1].charAt(0));

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
  if (yNum === 4) {
    console.log("en passant unimplemented");
    // if (lastMove) {

    // }
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

  console.log(posMoves);
  return posMoves;
};
export const rookMove = (index, pieceLoc, whiteMove) => {
  console.log("unimplemented");
  return [];
};
export const bishopMove = (index, pieceLoc, whiteMove) => {
  console.log("unimplemented");
  return [];
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
  console.log("unimplemented");
  return [];
};
export const kingMove = (index, pieceLoc, whiteMove) => {
  console.log("unimplemented");
  return [];
};

//   pawnMoveWhitePosMoves = (index, piece_loc, last_move) => {
//     // """
//     // pawn_move_white(index, piece_loc, last_move)
//     // :param index: chosen white pawn location to search for moves at
//     // :param piece_loc: piece location dictionary
//     // :param last_move: the last user inputted move played on the board. Used for En Passant testing

//     // - Finds all moves for the pawn, given if the pawn is attacking, moving forward, or blocked from (0,0) -> (7,7)
//     // - Covers En Passant
//     // - Does not remove all illegal moves
//     // :return: list[(int, int)] of possible white pawn moves
//     // """

//     let pos_moves = [];
//     let col = index[0];
//     let row = index[1];

//     if (row === 8 || row === 1) {
//       return pos_moves;
//     }

//     let locAbove = (col, row + 1);
//     let loc2Above = (col, row + 2);
//     let locUpLeft = (col - 1, row + 1);
//     let locUpRight = (col + 1, row + 1);
//     let squareAbove = piece_loc[locAbove];

//     if (squareAbove === "") {
//       pos_moves.push(locAbove);
//     }
//     if (row === 1) {
//       if (squareAbove === "" && piece_loc[(row + 2, y)] === " ") {
//         pos_moves.push((row + 2, y));
//       }
//     }
//     if (row === 5) {
//       if (last_move) {
//         if (last_move.piece_name === "black_pawn") {
//           if (
//             last_move.start_index[0] === 6 &&
//             last_move.end_index[0] === 4 &&
//             (last_move.end_index[1] === y + 1 ||
//               last_move.end_index[1] === y - 1)
//           ) {
//             pos_moves.push(
//               (last_move.start_index[0] - 1, last_move.start_index[1])
//             );
//           }
//         }
//       }
//     }
//     if (row === 'a') {
//       if (piece_loc[(col + 1, row + 1)] != " ") {
//         if (piece_loc[(col + 1, row + 1)].color === "b") {
//           pos_moves.push((col + 1, row + 1));
//         }
//       }
//     } else if (row === 'h') {
//       if (piece_loc[(col + 1, row - 1)] != " ") {
//         if (piece_loc[(col + 1, row - 1)].color === "b") {
//           pos_moves.push((col + 1, row - 1));
//         }
//       }
//     } else {
//       if (piece_loc[(col + 1, row + 1)] != " ") {
//         if (piece_loc[(col + 1, row + 1)].color === "b") {
//           pos_moves.push((col + 1, row + 1));
//         }
//       }
//       if (piece_loc[(col + 1, row - 1)] != " ") {
//         if (piece_loc[(col + 1, row - 1)].color === "b") {
//           pos_moves.push((col + 1, row - 1));
//         }
//       }
//     }
//     return pos_moves;
//   };
