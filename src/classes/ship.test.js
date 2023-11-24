//test length
//test is hit
//test is sunk

const CreateShip = require("./ship.js");
// import CreateShip from "./classes/ship.js";

test("does new CreateShip create a ship of length entered ", () => {
  expect(new CreateShip(3).length).toBe(3);
});

test("is ship sunk", () => {
  expect(new CreateShip(3, (sunk = true)).sunk).toBe(true);
});

test("toggleSunk function should toggle the sunk property", () => {
  const ship = new CreateShip(5);
  expect(ship.sunk).toBe(false);

  ship.toggleSunk();
  expect(ship.sunk).toBe(true);

  ship.toggleSunk();
  expect(ship.sunk).toBe(false);
});

test("numberOfTimesHit function should increase hit value by value entered", () => {
  const newShip = new CreateShip(6, false, 0);
  expect(newShip.hit).toBe(0);

  newShip.numberOfTimesHit(1);
  expect(newShip.hit).toBe(1);

  newShip.numberOfTimesHit(1);
  expect(newShip.hit).toBe(2);
});
