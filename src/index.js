import "./styles.css";
import CreateShip from "./classes/ship";
import Gameboard from "./classes/gameboard";

// const ship1 = new CreateShip(1);
// const gameboard = new Gameboard();
// const location = ["a1"];
// gameboard.placeShip(location, ship1);
// const ship2 = new CreateShip(1);
// const location2 = ["a2"];
// gameboard.placeShip(location2, ship2);
// console.log(gameboard);

// //practice using .some
// // This works
// console.log(gameboard.board);
// const test = ["a2", "a3"];
// const spaceAvailable = test.some(function (someLocation) {
//   return someLocation === "a4";
// });

// if (spaceAvailable) {
//   console.log("test", "location is occupied");
// } else {
//   console.log("test", "location is empty");
// }
// // translate above into game language
// console.log(gameboard.board);

// const isSpaceAvailable = gameboard.board.some(function (gameLocation) {
//   return gameLocation === location2;
// });

// if (isSpaceAvailable) {
//   console.log("location is occupied");
// } else {
//   console.log("location is empty");
// }
// // different thought what if i .some through the locations array and look for it in the object of gameboard.board
// console.log(gameboard.board);
// const test2 = { a1: "ship1", a2: "ship2" };
// const locations2 = ["a1", "a2"];
// const spaceAvailable2 = locations2.some(function (someLocation) {
//   return someLocation === "a2";
// });

// if (spaceAvailable2) {
//   console.log("test2", "location is occupied");
// } else {
//   console.log("test2", "location is empty");
// }
