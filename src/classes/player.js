class CreatePlayer {
  constructor(player) {
    this.name = player;
    this.shotsTaken = [];
  }

  // its late Friday and this smells but passes all the recursive test and the last test of player1 attacks player2.
  // 💥 perhaps fresh eyes will refactor this
  attack(coordinates, opponentGameboard) {
    if (this.shotsTaken.includes(coordinates)) {
      return "choose new coordinates";
    }
    if (opponentGameboard === undefined) {
      this.shotsTaken.push(coordinates);
      return true;
    } else {
      const isHit = opponentGameboard.receiveAttack(coordinates);
      this.shotsTaken.push(coordinates);
      if (isHit) {
        return true;
      }
    }
    return true;
  }
}

module.exports = CreatePlayer;
