const BOARD_SIZE = 10;
class Gameboard {
  constructor() {
    this.board = {};
  }
  placeShip(locations, ship) {
    locations.forEach((location) => {
      // if isPlaceAvailble(locations) returns true place ship else retrun "choose another space"
      if (this.board[location] === undefined) {
        this.board[location] = ship;
      } else {
        console.log("Space occupied choose another space");
      }
    });
  }
  // isPlaceAvailable(locations) {
  //     //code to check all spaces are free
  //     // code to check if a particular cell is free first
  //     // then check next cell
  //     // this is starting to smell of multiple if statements (max ship is 5 cells)

  // }
}

module.exports = Gameboard;
