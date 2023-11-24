class CreateShip {
  constructor(length, sunk = false, hit) {
    this.length = length;
    this.sunk = sunk;
    this.hit = hit;
  }
  toggleSunk() {
    this.sunk = !this.sunk;
  }
  numberOfTimesHit(input) {
    this.hit = this.hit + input;
  }
}

module.exports = CreateShip;
