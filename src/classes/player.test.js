// Players can take turns playing the game by attacking the enemy Gameboard.
// first need to make it so we have 2 gameboards: player1 gameboard and player2 gameboard

// discussion with Tom was if we have a class for player that holds name and shots taken we can then use shots taken to validate current move when attacking
// ✅ first check do we create an object of player
// it will need a method of attack
// it will need some way to know whos turn it is - or is this game loop

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
