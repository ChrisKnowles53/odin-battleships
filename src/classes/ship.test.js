const CreateShip = require("./ship.js");

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
  const ship1 = new CreateShip(6, false, 0);
  expect(ship1.hit).toBe(0);

  ship1.numberOfTimesHit(1);
  expect(ship1.hit).toBe(1);

  ship1.numberOfTimesHit(1);
  expect(ship1.hit).toBe(2);
});

test("numberOfTimesHit function should toggleSunk function when number of hits is greater than or equal to ship length", () => {
  const ship2 = new CreateShip(6, false, 0);
  expect(ship2.sunk).toBe(false);

  ship2.numberOfTimesHit(1);
  expect(ship2.sunk).toBe(false);

  ship2.numberOfTimesHit(5);
  expect(ship2.sunk).toBe(true);
});
