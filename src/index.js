import "./styles.css";
import CreateShip from "./classes/ship";
import Gameboard from "./classes/gameboard";
import CreatePlayer from "./classes/player";

const computer = new CreatePlayer("computer");
console.log(computer.getRandomIntegerNumber(1, 100));
console.log(computer.getRandomIntegerNumber(1, 100));

console.log(computer.validMoveArray[20]);
