import "./styles.css";
import CreateShip from "./classes/ship";

let firstShip = new CreateShip(3, false);
console.log(firstShip);

console.log(`sunk: ${firstShip.toggleSunk()}`);
console.log(firstShip);
