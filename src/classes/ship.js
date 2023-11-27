class CreateShip {
  constructor(length, sunk = false, hit) {
    this.length = length;
    this.sunk = sunk;
    this.numberOfHits = hit;
  }
  toggleSunk() {
    this.sunk = !this.sunk;
  }
  shipHit() {
    this.numberOfHits++;
    if (this.numberOfHits >= this.length) {
      this.sunk = true;
    }
  }
}

module.exports = CreateShip;
