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
        board[row][column] = "x";
      }
    }
    return board;
  }
}

module.exports = Gameboard;
