const BOARD_SIZE = 10;
class Gameboard {
  constructor() {
    this.board = {};
  }
  placeShip(locations, ship) {
    const canPlaceShip = locations.every((location) => {
      return this.board[location] === undefined;
    });
    if (canPlaceShip) {
      locations.forEach((location) => {
        this.board[location] = ship;
      });
    }
  }
  receiveAttack(coords) {
    if (this.board[coords] === undefined) {
      return false;
    } else {
      return true;
    }
    // compare coords to gameboard and see if ship present
  }
}

module.exports = Gameboard;
