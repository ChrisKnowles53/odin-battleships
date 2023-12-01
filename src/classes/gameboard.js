const BOARD_SIZE = 10;
class Gameboard {
  constructor() {
    this.board = {};
    this.missedShots = [];
    this.ships = [];
  }
  placeShip(locations, ship) {
    const canPlaceShip = locations.every((location) => {
      return this.board[location] === undefined;
    });
    if (canPlaceShip) {
      this.ships.push(ship);
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
  areAllShipsSunk() {
    const ships = this.ships;
    const allShipsSunk = ships.every((ship) => {
      return ship.sunk === true;
    });
    if (allShipsSunk) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Gameboard;
