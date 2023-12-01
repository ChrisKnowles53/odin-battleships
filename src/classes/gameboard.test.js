const CreateShip = require("./ship.js");
const Gameboard = require("./gameboard.js");

test("placeShip function", () => {
  const ship1 = new CreateShip(1);
  const gameboard = new Gameboard();
  gameboard.placeShip(["a1"], ship1);
  expect(gameboard.board.a1).toBe(ship1);
});

test("placeShip across 2 cells", () => {
  const ship2 = new CreateShip(2);
  const gameboard = new Gameboard();
  const locations = ["a3", "a4"];
  gameboard.placeShip(locations, ship2);
  expect(gameboard.board.a3).toBe(ship2);
  expect(gameboard.board.a4).toBe(ship2);
});

test("validate that a second ship cannot be placed on top of the first ship", () => {
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  const gameboard = new Gameboard();
  const location = ["a1"];
  gameboard.placeShip(location, ship1);
  expect(gameboard.board.a1).toBe(ship1);
  gameboard.placeShip(location, ship2);
  expect(gameboard.board.a1).toBe(ship1);
});

test("validate that a second ship of the exact same length cannot be placed on top of the first ship", () => {
  const ship1 = new CreateShip(2);
  const ship2 = new CreateShip(2);
  const gameboard = new Gameboard();
  const location = ["a1", "b1"];
  gameboard.placeShip(location, ship1);
  expect(gameboard.board.a1).toBe(ship1);
  expect(gameboard.board.b1).toBe(ship1);
  gameboard.placeShip(location, ship2);
  expect(gameboard.board.a1).toBe(ship1);
  expect(gameboard.board.b1).toBe(ship1);
});

test("that if there is any partial overlap the whole ship is not placed", () => {
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(3);
  const gameboard = new Gameboard();
  const location1 = ["a3"];
  const loaction2 = ["a2", "a3", "a4"];
  gameboard.placeShip(location1, ship1);
  expect(gameboard.board.a3).toBe(ship1);
  gameboard.placeShip(loaction2, ship2);
  expect(gameboard.board.a3).toBe(ship1);
  expect(gameboard.board.a4).toBe(undefined);
});

test("receiveAttack takes co-ordinates and checks board to see if it hit ship: true ship present, false no ship found", () => {
  const ship1 = new CreateShip(1);
  const gameboard = new Gameboard();
  const location = ["a1"];
  gameboard.placeShip(location, ship1);
  expect(gameboard.receiveAttack("a1")).toBe(true);
  expect(gameboard.receiveAttack("a2")).toBe(false);
});

test("receiveAttack takes co-ordinates and checks board to see if it hit ship: true ship present, false no ship found", () => {
  const ship1 = new CreateShip(3);
  const gameboard = new Gameboard();
  const location = ["a1", "a2", "a3"];
  gameboard.placeShip(location, ship1);
  expect(gameboard.receiveAttack("a2")).toBe(true);
  expect(gameboard.receiveAttack("a4")).toBe(false);
});

test("receiveAttack invokes shipHit function for correct ship", () => {
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  const gameboard = new Gameboard();
  const location1 = ["a1"];
  const location2 = ["b1"];
  const attackCoordinate = "a1";
  gameboard.placeShip(location1, ship1);
  gameboard.placeShip(location2, ship2);
  gameboard.receiveAttack(attackCoordinate);
  expect(ship1.numberOfHits).toBe(1);
  expect(ship2.numberOfHits).toBe(0);
});

test("receiveAttack method records the coordinate of the missed shot", () => {
  const ship1 = new CreateShip(1);
  const gameboard = new Gameboard();
  const location = ["a1"];
  const attackCoordinate = "a2";
  const attackCoordinate2 = "b2";
  gameboard.placeShip(location, ship1);
  gameboard.receiveAttack(attackCoordinate);
  expect(gameboard.missedShots).toContain(attackCoordinate);
  gameboard.receiveAttack(attackCoordinate2);
  expect(gameboard.missedShots).toContain(attackCoordinate2);
});

test("gameboard keeps track of all ships placed", () => {
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  const location1 = ["a1"];
  const location2 = ["b1"];
  const gameboard = new Gameboard();
  gameboard.placeShip(location1, ship1);
  gameboard.placeShip(location2, ship2);
  expect(gameboard.ships).toEqual([ship1, ship2]);
});
test("gameboard keeps track of all ships placed", () => {
  const ship1 = new CreateShip(2);
  const ship2 = new CreateShip(3);
  const location1 = ["a1", "a2"];
  const location2 = ["b1", "b2", "b3"];
  const gameboard = new Gameboard();
  gameboard.placeShip(location1, ship1);
  gameboard.placeShip(location2, ship2);
  expect(gameboard.ships).toEqual([ship1, ship2]);
});

test("gameboard reports true if all ships are sunk", () => {
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  const location1 = ["a1"];
  const location2 = ["b1"];
  const gameboard = new Gameboard();
  gameboard.placeShip(location1, ship1);
  gameboard.placeShip(location2, ship2);
  gameboard.receiveAttack("a1");
  gameboard.receiveAttack("b1");
  expect(gameboard.areAllShipsSunk()).toBe(true);
});
test("gameboard reports true if all ships are sunk", () => {
  const ship1 = new CreateShip(2);
  const ship2 = new CreateShip(3);
  const location1 = ["a1", "a2"];
  const location2 = ["b1", "b2", "b3"];
  const gameboard = new Gameboard();
  gameboard.placeShip(location1, ship1);
  gameboard.placeShip(location2, ship2);
  gameboard.receiveAttack("a1");
  gameboard.receiveAttack("a2");
  gameboard.receiveAttack("b1");
  gameboard.receiveAttack("b2");
  gameboard.receiveAttack("b3");
  expect(gameboard.areAllShipsSunk()).toBe(true);
});

test("gameboard reports false if all ships are NOT sunk", () => {
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  const location1 = ["a1"];
  const location2 = ["b1"];
  const gameboard = new Gameboard();
  gameboard.placeShip(location1, ship1);
  gameboard.placeShip(location2, ship2);
  gameboard.receiveAttack("a1");
  expect(gameboard.areAllShipsSunk()).toBe(false);
});
test("gameboard reports false if all ships are NOT sunk", () => {
  const ship1 = new CreateShip(2);
  const ship2 = new CreateShip(3);
  const location1 = ["a1", "a2"];
  const location2 = ["b1", "b2", "b3"];
  const gameboard = new Gameboard();
  gameboard.placeShip(location1, ship1);
  gameboard.placeShip(location2, ship2);
  gameboard.receiveAttack("a1");
  gameboard.receiveAttack("b1");
  gameboard.receiveAttack("b2");
  expect(gameboard.areAllShipsSunk()).toBe(false);
});
