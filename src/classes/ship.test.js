const CreateShip = require("./ship.js");

test("does new CreateShip create a ship of length entered ", () => {
  expect(new CreateShip(3).length).toBe(3);
});

test("shipHit function should increase numberOfHits state by 1 each time it is invoked", () => {
  const ship = new CreateShip(6);
  expect(ship.numberOfHits).toBe(0);
  ship.shipHit();
  expect(ship.numberOfHits).toBe(1);
  ship.shipHit();
  expect(ship.numberOfHits).toBe(2);
});

test("isSunk function should change the state of sunk to true if the numberOfHits state is greater than or equal the ship length", () => {
  const ship1 = new CreateShip(2);
  ship1.shipHit();
  expect(ship1.sunk).toBe(false);
  ship1.shipHit();
  expect(ship1.sunk).toBe(true);
});
