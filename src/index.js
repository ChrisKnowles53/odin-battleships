import "./styles.css";
import CreateShip from "./classes/ship";

let firstShip = new CreateShip(4, false, 2);
console.log(firstShip.hit, firstShip.sunk);

firstShip.numberOfTimesHit(1);
console.log(firstShip.hit, firstShip.sunk);

firstShip.numberOfTimesHit(1);
console.log(firstShip.hit, firstShip.sunk);
