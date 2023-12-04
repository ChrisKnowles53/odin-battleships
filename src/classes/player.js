class CreatePlayer {
  constructor(player) {
    this.name = player;
    this.shotsTaken = [];
  }

  // its late Friday and this code smells but passes all the recursive tests and the last tests of player1 attacks player2 and vica versa.
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

  randomMove() {
    return true;
  }
}

module.exports = CreatePlayer;
