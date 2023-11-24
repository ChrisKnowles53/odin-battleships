import "./styles.css";
import CreateShip from "./classes/ship";
import Gameboard from "./classes/gameboard";

let firstShip = new CreateShip(4, false, 2);
console.log(firstShip.hit, firstShip.sunk);

firstShip.numberOfTimesHit(1);
console.log(firstShip.hit, firstShip.sunk);

firstShip.numberOfTimesHit(1);
console.log(firstShip.hit, firstShip.sunk);

let board = new Gameboard();
console.log(board);

let row = 0; // expect A as the answer
console.log(String.fromCharCode(65 + row));
let row2 = 1; // remember arrays start at 0 expect B as the answer
console.log(String.fromCharCode(65 + row2));

board.setShipStartPosition("1", "0", "test");
console.log(board);
board.setShipStartPosition("5", "5", "test");
