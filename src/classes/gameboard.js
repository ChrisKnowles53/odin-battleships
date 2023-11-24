class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = this.initialiseBoard(size);
  }

  initialiseBoard(size) {
    let board = [];
    for (let row = 0; row < size; row++) {
      board[row] = [];
      for (let column = 0; column < size; column++) {
        board[row][column] = this.convertRowLabel(row) + (column + 1);
      }
    }
    return board;
  }
  convertRowLabel(row) {
    return String.fromCharCode(65 + row);
  }
  setShipStartPosition(row, column, value) {
    // think if i limit input to between 1 and 10 i dont need this check
    //💥💥 This on;y works with row and column as digits starting at 0 for first column
    if (row < this.size && column < this.size) {
      this.board[row][column] = value;
    }
  }
}
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

module.exports = Gameboard;
