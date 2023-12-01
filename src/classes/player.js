class CreatePlayer {
  constructor(player) {
    this.name = player;
    this.shotsTaken = [];
  }
  attack(coordinates) {
    this.shotsTaken.push(coordinates);
    return true;
  }
}

module.exports = CreatePlayer;
