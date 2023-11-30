const BOARD_SIZE = 10;
class Gameboard {
  constructor() {
    this.board = {};
    this.missedShots = [];
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
  receiveAttack(coordinate) {
    const cell = this.board[coordinate];
    if (cell === undefined) {
      this.missedShots.push(coordinate);
      return false;
    } else {
      cell.shipHit();
      return true;
    }
  }
}

module.exports = Gameboard;
