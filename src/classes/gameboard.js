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
}
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// need to change board to letter by number instead of deafult array which is number by number - to do this need to convert a digit to a letter 💭 ceaser cipher ASCI code caps are 95? onwards

//if (char.match(/[A-Z]/)) {
// let code = char.charCodeAt();
// let shifted = ((((code - 65 + shift) % 26) + 26) % 26) + 65;

module.exports = Gameboard;
