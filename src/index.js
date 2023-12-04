import "./styles.css";
import CreateShip from "./classes/ship";
import Gameboard from "./classes/gameboard";
import CreatePlayer from "./classes/player";

const player1 = new CreatePlayer("player1");
const computer = new CreatePlayer("computer");
const player1Gameboard = new Gameboard();
const computerGameboard = new Gameboard();
const ship1 = new CreateShip(1);
player1Gameboard.placeShip(["a1"], ship1);

const randomComputerMove = computer.randomMove();
player1Gameboard.receiveAttack(randomComputerMove);

const secondRandomComputerMove = computer.randomMove();
player1Gameboard.receiveAttack(secondRandomComputerMove);

console.log(computer.validMoveArray[0]);
console.log(computer.shotsTaken.length);
