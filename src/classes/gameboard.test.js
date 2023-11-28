const CreateShip = require("./ship.js");
const Gameboard = require("./gameboard.js");

test("placeShip function", () => {
  const ship1 = new CreateShip(1);
  const board = new Gameboard();
  board.placeShip(["a1"], ship1);
  expect(board.board.a1).toBe(ship1);
});

test("placeship across 2 cells", () => {
  const ship2 = new CreateShip(2);
  const board2 = new Gameboard();
  const locations = ["a3", "a4"];
  board2.placeShip(locations, ship2);
  expect(board2.board.a3).toBe(ship2);
  expect(board2.board.a4).toBe(ship2);
});

// whats the next test

// red green refactor - simple test fail write the code to pass write the next test fail and code to pass then refactor

// ✨✨✨✨ write a test for placement of a ship on the board
// is there another ship on the board - ie is the cell empty
// are there enough rows/columns to fit the ship ??

// cell states :  empty, ship identifier, hit, clicked but not a ship present
//// empty: null
//// ship identifier: First letter of ship?
//// Carrier = C, Battleship = B, Destroyer = D, Submarine = S, PatrolBoat = P
//// hit: mark with red X
//// clicked but not a ship present: M for Miss
