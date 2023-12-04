class CreatePlayer {
  constructor(player) {
    this.name = player;
    this.shotsTaken = [];
    this.validMoveArray = [
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
      "a7",
      "a8",
      "a9",
      "a10",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "b10",
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "c10",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8",
      "d9",
      "d10",
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
      "e6",
      "e7",
      "e8",
      "e9",
      "e10",
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "f10",
      "g1",
      "g2",
      "g3",
      "g4",
      "g5",
      "g6",
      "g7",
      "g8",
      "g9",
      "g10",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "h7",
      "h8",
      "h9",
      "h10",
      "i1",
      "i2",
      "i3",
      "i4",
      "i5",
      "i6",
      "i7",
      "i8",
      "i9",
      "i10",
      "j1",
      "j2",
      "j3",
      "j4",
      "j5",
      "j6",
      "j7",
      "j8",
      "j9",
      "j10",
    ];
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
    const minArrayNumber = 1;
    const maxArrayNumber = 100; // 10 by 10 Array
    const randomInteger = this.getRandomIntegerNumber(
      minArrayNumber,
      maxArrayNumber
    );
    const computerRandomMove = this.validMoveArray[randomInteger];

    if (this.shotsTaken.includes(computerRandomMove)) {
      return this.randomMove();
    } else {
      this.attack(computerRandomMove);
      return computerRandomMove; //true (true is only needed to pass recursive test);
    }
  }
  getRandomIntegerNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = CreatePlayer;
