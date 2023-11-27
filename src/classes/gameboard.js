const BOARD_SIZE = 10;
class Gameboard {
  constructor() {
    this.board = {};
  }
  placeShip(location, ship) {
    this.board[location] = ship;
  }
}
//   initialiseBoard(size) {
//     let board = [];
//     for (let row = 0; row < size; row++) {
//       board[row] = [];
//       for (let column = 0; column < size; column++) {
//         board[row][column] = this.convertRowLabel(row) + (column + 1);
//       }
//     }
//     return board;
//   }
//   convertRowLabel(row) {
//     return String.fromCharCode(65 + row); // CharCode: capital letters start at A is position 65 and finish at Z at position 90
//   }

//   setShipStartPosition(row, column, value) {
//     // think if i limit input to between 1 and 10 i dont need this check
//     //💥💥 This only works with row and column as digits starting at 0 for first column
//     if (row < this.size && column < this.size) {
//       this.board[row][column] = value;
//     }
//   }

module.exports = Gameboard;

// Odin said: Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// i dont believe the ship class should place ships i believe this should be in the game.js

const board2 = { a1: null, a2: null };
