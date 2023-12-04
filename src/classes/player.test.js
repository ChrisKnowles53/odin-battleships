const CreateShip = require("./ship.js");
const Gameboard = require("./gameboard.js");
const CreatePlayer = require("./player.js");

test("can a player class be created", () => {
  const playerObject = { name: undefined, shotsTaken: [] };
  expect(new CreatePlayer()).toMatchObject(playerObject);
});
test("can a player class be created with a given name", () => {
  const givenName = "Player1";
  const playerObject = { name: givenName, shotsTaken: [] };
  expect(new CreatePlayer(givenName)).toMatchObject(playerObject);
});

test("player class has a function called attack which returns true when invoked ", () => {
  const player1 = new CreatePlayer("player1");
  expect(player1.attack()).toBe(true);
});
test("player class has a function called attack which updates the shotsTaken [] with the attackCoordinate passed into it", () => {
  const player1 = new CreatePlayer("player1");
  const attackCoordinate = "a1";
  player1.attack(attackCoordinate);
  expect(player1.shotsTaken).toContain(attackCoordinate);
});

test("player1 makes an attack on player2 gamenboard: check if coordinates have been used", () => {
  const player1 = new CreatePlayer("player1");
  const player2 = new CreatePlayer("player2");
  const player1Gameboard = new Gameboard();
  const player2Gameboard = new Gameboard();
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  player1Gameboard.placeShip(["a1"], ship1);
  player2Gameboard.placeShip(["b1"], ship2);
  player1.attack("b1");
  expect(player1.shotsTaken).toContain("b1");
  expect(player1.attack("b1")).toBe("choose new coordinates");
});

test("player1 makes an attack on player2 gameboard", () => {
  const player1 = new CreatePlayer("player1");
  const player2 = new CreatePlayer("player2");
  const player1Gameboard = new Gameboard();
  const player2Gameboard = new Gameboard();
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  player1Gameboard.placeShip(["a1"], ship1);
  player2Gameboard.placeShip(["b1"], ship2);
  player1.attack("b1", player2Gameboard);
  expect(player2Gameboard.areAllShipsSunk()).toBe(true);
});
test("player2 makes an attack on player1 gameboard", () => {
  const player1 = new CreatePlayer("player1");
  const player2 = new CreatePlayer("player2");
  const player1Gameboard = new Gameboard();
  const player2Gameboard = new Gameboard();
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  player1Gameboard.placeShip(["a1"], ship1);
  player2Gameboard.placeShip(["b1"], ship2);
  player2.attack("a1", player1Gameboard);
  expect(player1Gameboard.areAllShipsSunk()).toBe(true);
});
test("player1 makes an attack on player2 gameboard and does NOT sink the ship", () => {
  const player1 = new CreatePlayer("player1");
  const player2 = new CreatePlayer("player2");
  const player1Gameboard = new Gameboard();
  const player2Gameboard = new Gameboard();
  const ship1 = new CreateShip(2);
  const ship2 = new CreateShip(3);
  player1Gameboard.placeShip(["a1", "a2"], ship1);
  player2Gameboard.placeShip(["b1", "b2", "b3"], ship2);
  player1.attack("b1", player1Gameboard);
  expect(player1Gameboard.areAllShipsSunk()).toBe(false);
});

// The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal (i.e. it shouldn’t shoot the same coordinate twice).
//computer as a player
//   can use same class as player just need to pass in valid coordinates
//   valid coordinates are A1 to A10 B1 to B10 .... J1 to J10.

xtest("invoking randomMove() returns true", () => {
  const computer = new CreatePlayer("computer");
  expect(computer.randomMove()).toBe(true);
});

test("randomMove generates a coordinate", () => {
  const computer = new CreatePlayer("computer");
  expect(computer.validMoveArray).toContain(computer.randomMove());
});

test("computer attacks player1 with a random move", () => {
  const player1 = new CreatePlayer("player1");
  const computer = new CreatePlayer("computer");
  const player1Gameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const ship1 = new CreateShip(1);
  const randomComputerMove = computer.randomMove();
  player1Gameboard.placeShip(["a1"], ship1);
  expect(computer.shotsTaken).toContain(randomComputerMove);
});

test("computer randomMove generates a new coordinate each time it is invoked", () => {
  const player1 = new CreatePlayer("player1");
  const computer = new CreatePlayer("computer");
  const player1Gameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const ship1 = new CreateShip(1);

  //using spy to overwrite the randomInteger Value 1st:42, 2nd:36 - so i can check 2 different shots are not on the ship
  jest
    .spyOn(computer, "getRandomIntegerNumber")
    .mockReturnValueOnce(42)
    .mockReturnValueOnce(56); // 42 is e3 and 56 f7

  player1Gameboard.placeShip(["a1"], ship1);

  const randomComputerMove = computer.randomMove();
  player1Gameboard.receiveAttack(randomComputerMove);

  const secondRandomComputerMove = computer.randomMove();
  player1Gameboard.receiveAttack(secondRandomComputerMove);

  expect(computer.getRandomIntegerNumber).toHaveBeenCalledTimes(2);
  expect(computer.shotsTaken.length).toBe(2);
  expect(randomComputerMove).not.toBe(secondRandomComputerMove);

  jest.restoreAllMocks();
});

//so now the tricky one
test("randomMove function re-generates automatically if the co-ordinate has already been used", () => {
  const player1 = new CreatePlayer("player1");
  const computer = new CreatePlayer("computer");
  const player1Gameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const ship1 = new CreateShip(1);

  //using spy to overwrite the randomInteger Value 1st:42, 2nd:42, 3rd:56 - with luck it will cause the randomMove method to loop until the 3rd value is entered so i can use toHaveBeenCalled(3) as the matcher
  jest
    .spyOn(computer, "getRandomIntegerValue")
    .mockReturnValue(42)
    .mockReturnValue(42)
    .mockReturnValue(56); // 42 is e3 and 56 f7

  player1Gameboard.placeShip(["a1"], ship1);

  const randomComputerMove = computer.randomMove();
  player1Gameboard.receiveAttack(randomComputerMove);

  const secondRandomComputerMove = computer.randomMove();
  player1Gameboard.receiveAttack(secondRandomComputerMove);

  expect(computer.getRandomIntegerNumber).toHaveBeenCalledTimes(3); // i only call it twice above but expect the function to call itself beacuse it has generated the same number 42
  expect(computer.shotsTaken.length).toBe(2);
  expect(randomComputerMove).not.toBe(secondRandomComputerMove);

  jest.restoreAllMocks();
});
