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

test("invoking randomMove() returns true", () => {
  const computer = new CreatePlayer("computer");
  expect(computer.randomMove()).toBe(true);
});

test("randomMove generates a coordinate", () => {
  const computer = new CreatePlayer("computer");
  expect(computer.validMoveArray).toContain(computer.randomMove());
});

// Then realised how do i check a random number it should be random each time!
//     so unless i use a mock function to return a set fixed number and then the blow test is not a valid test - back to check the output is contqined within the array
// realised when creating a random number i should test this function before intergrating it into a test - so x.test is now on hold
// test("getRandomIntegerNumber(1,3) (min =1 ,max=3) returns the number 1,2 or 3", () => {
//   const computer = new CreatePlayer("computer");
//   expect(computer.getRandomIntegerNumber(1, 3)).to;
// });
