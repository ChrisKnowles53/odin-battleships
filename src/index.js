import "./styles.css";
import CreateShip from "./classes/ship";

let firstShip = new CreateShip(3, false, 4);
console.log(firstShip.hit);
firstShip.numberOfTimesHit(3);
console.log(firstShip);
