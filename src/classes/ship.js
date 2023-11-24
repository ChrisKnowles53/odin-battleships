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
    this.hit += input;
    if (this.hit >= this.length) {
      this.sunk = true;
    }
  }
}

module.exports = CreateShip;
