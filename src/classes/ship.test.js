//test length
//test is hit
//test is sunk

const CreateShip = require("./ship.js");
// import CreateShip from "./classes/ship.js";

test("CreateShip ", () => {
  expect(new CreateShip(3).length).toBe(3);
});
test("CreateShip ", () => {
  expect(new CreateShip("a").length).toBe("a");
});

test("is ship sunk", () => {
  expect(new CreateShip(3, (sunk = true)).sunk).toBe(true);
});

//💥need to think more about what im trying to test here
// test("CreateShip togglefunction", () => {
//   expect(new CreateShip(3, CreateShip.toggleSunk).sunk).toBe(true);
// });
