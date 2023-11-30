import "./styles.css";
import CreateShip from "./classes/ship";
import Gameboard from "./classes/gameboard";

const ship1 = new CreateShip(2);
const ship2 = new CreateShip(5);
const location1 = ["a1", "a2"];
const location2 = ["b1", "b2", "b3", "b4", "b5"];
const gameboard = new Gameboard();
gameboard.placeShip(location1, ship1);
gameboard.placeShip(location2, ship2);
console.log(gameboard.ships);
