const CreateShip = require("./ship.js");
const Gameboard = require("./gameboard.js");

test("placeShip function", () => {
  const ship1 = new CreateShip(1);
  const gameboard = new Gameboard();
  gameboard.placeShip(["a1"], ship1);
  expect(gameboard.board.a1).toBe(ship1);
});

test("placeship across 2 cells", () => {
  const ship2 = new CreateShip(2);
  const gameboard = new Gameboard();
  const locations = ["a3", "a4"];
  gameboard.placeShip(locations, ship2);
  expect(gameboard.board.a3).toBe(ship2);
  expect(gameboard.board.a4).toBe(ship2);
});

// test validate can a single placed on top of another
test("validate that a second ship cannot be placed on top of the first ship", () => {
  const ship1 = new CreateShip(1);
  const ship2 = new CreateShip(1);
  const gameboard = new Gameboard();
  gameboard.placeShip(["a1"], ship1);
  expect(gameboard.board.a1).toBe(ship1);
  gameboard.placeShip(["a1"], ship2);
  expect(gameboard.board.a1).toBe(ship1);
});

// test validate can i place an exact overlap ship
test("validate that a second ship of exact same length cannot be placed on top of the first ship", () => {
  const ship1 = new CreateShip(2);
  const ship2 = new CreateShip(2);
  const gameboard = new Gameboard();
  gameboard.placeShip(["a1", "b1"], ship1);
  expect(gameboard.board.a1).toBe(ship1);
  gameboard.placeShip(["a1", "b1"], ship2);
  expect(gameboard.board.a1).toBe(ship1);
});

// test partial overlap
// test("validate that a ship cannot partially overlap an exisitng ship", () => {
//   const ship1 = new CreateShip(1);
//   const ship2 = new CreateShip(2);
//   const gameboard = new Gameboard();
// });
// test partial front and rear overlap

// test("checks that a cell is empty before placing a ship", () => {
//   const board3 = new Gameboard();
//   const ship3 = new CreateShip(2);
//   const ship4 = new CreateShip(2);
//   const locations3 = ["a3", "a4"];
//   const locations4 = ["a4", "a5"];

//   board3.placeShip(locations3, ship3);
//   expect(board3.board.a3).toBe(ship3);
//   expect(board3.board.a4).toBe(ship3);

//   board3.placeShip(locations3, ship4);
//   expect(board3.board.a3).toBe(ship3);
//   expect(board3.board.a4).toBe(ship3);

//   // make this test first location is empty second location is populated
//   board3.placeShip(locations4, ship4);
//   expect(board3.board.a4).toBe(ship3);
//   expect(board3.board.a5).toBe(undefined);
// });

// whats the next test - make sure the cell is empty before placing the ship

// red green refactor - simple test fail write the code to pass write the next test fail and code to pass then refactor

// cell states :  empty, ship identifier, hit, clicked but not a ship present
//// empty: null
//// ship identifier: First letter of ship?
//// Carrier = C, Battleship = B, Destroyer = D, Submarine = S, PatrolBoat = P
//// hit: mark with red X
//// clicked but not a ship present: M for Miss
