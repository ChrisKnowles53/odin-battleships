const CreateShip = require("./ship.js");
const Gameboard = require("./gameboard.js");

// test("intialiseBoard creates an array of 10 by 10", () => {
//   const gameboard = new Gameboard();
//   expect(gameboard.board.length).toEqual(10);
//   gameboard.board.forEach((row) => {
//     expect(row.length).toBe(10);
//   });
// });

test("placeShip function", () => {
  const ship1 = new CreateShip(1);
  const board = new Gameboard();
  board.placeShip("a1", ship1);
  expect(board.board.a1).toBe(ship1);
});

// ✨✨✨✨ write a test for placement of a ship on the board
// is there another ship on the board - ie is the cell empty
// are there enough rows/columns to fit the ship ??

// cell states :  empty, ship identifier, hit, clicked but not a ship present
//// empty: null
//// ship identifier: First letter of ship?
//// Carrier = C, Battleship = B, Destroyer = D, Submarine = S, PatrolBoat = P
//// hit: mark with red X
//// clicked but not a ship present: M for Miss

// test("board is a 2D array", () => {
//   const gameboard = new Gameboard();
//   expect(Array.isArray(gameboard.board)).toBe(true);
//   gameboard.board.forEach((row) => {
//     expect(Array.isArray(row)).toBe(true);
//   });
// });

// test("that the marker Start appears on the board in the desired start location", () => {
//   const gameboard1 = new Gameboard();
//   gameboard1.setShipStartPosition(1, 1, "Start");
//   expect(gameboard1.board[1][1]).toBe("Start");
// });
