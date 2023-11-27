import "./styles.css";
import CreateShip from "./classes/ship";
import Gameboard from "./classes/gameboard";

let firstShip = new CreateShip(4, false, 2);
console.log(firstShip.numberOfHits, firstShip.sunk);

firstShip.shipHit();
console.log(firstShip.numberOfHits, firstShip.sunk);

firstShip.shipHit();
console.log(firstShip.numberOfHits, firstShip.sunk);

let board = new Gameboard();
console.log(board);
