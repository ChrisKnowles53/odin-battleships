class CreateShip {
  constructor(length, sunk = false) {
    this.length = length;
    this.sunk = sunk;
    console.log(sunk);
  }
  toggleSunk() {
    console.log("toggle fired");
    this.sunk = !this.sunk;
  }
}

module.exports = CreateShip;
