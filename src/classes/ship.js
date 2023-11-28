class CreateShip {
  constructor(length, sunk = false) {
    this.length = length;
    this.sunk = sunk;
    this.numberOfHits = 0;
  }

  shipHit() {
    this.numberOfHits++;
    this.isSunk();
  }

  isSunk() {
    if (this.numberOfHits >= this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

module.exports = CreateShip;
