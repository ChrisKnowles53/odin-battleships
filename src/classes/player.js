class CreatePlayer {
  constructor(player) {
    this.name = player;
    this.shotsTaken = [];
  }
  attack(coordinates) {
    if (this.shotsTaken.includes(coordinates)) {
      return "choose new coordinates";
    }
    this.shotsTaken.push(coordinates);
    return true;
  }
}

module.exports = CreatePlayer;
