class CreatePlayer {
  constructor(player) {
    this.name = player;
    this.shotsTaken = [];
  }
  attack(coordinates, player2Gameboard) {
    this.shotsTaken.push(coordinates);
    return true;
  }
}

module.exports = CreatePlayer;
