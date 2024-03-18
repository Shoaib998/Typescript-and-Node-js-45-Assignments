// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_Color = "Green";
// let alien_Color = "Yellow";
// let alien_Color = "Red";
// let alien_Color = "No_Color";

if (alien_Color == "Green") {
  console.log("The Player Earned 5 Poaints");
} else if (alien_Color == "Yellow") {
  console.log(`The Player Earned 10 Points`);
} else if (alien_Color == "Red") {
  console.log("The Player Earned 15 Points");
} else {
  console.log("The Player Earned 0 Points");
}
