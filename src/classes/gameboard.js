const BOARD_SIZE = 10;
class Gameboard {
  constructor() {
    this.board = {};
  }
  placeShip(locations, ship) {
    locations.forEach((location) => {
      this.board[location] = ship;
    });
  }
}

module.exports = Gameboard;

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
