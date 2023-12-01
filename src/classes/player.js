class CreatePlayer {
  constructor(player) {
    this.name = player;
    this.shotsTaken = [];
  }
  attack(coordinates, player2Gameboard) {
    this.shotsTaken.push(coordinates);
    // player2Gameboard.receiveAttack(coordinates);
    return true;
  }
}

module.exports = CreatePlayer;
