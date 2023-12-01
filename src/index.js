import "./styles.css";
import CreateShip from "./classes/ship";
import Gameboard from "./classes/gameboard";
import CreatePlayer from "./classes/player";

const player1 = new CreatePlayer("player1");
console.log(player1);
console.log(player1.attack("a1"));
