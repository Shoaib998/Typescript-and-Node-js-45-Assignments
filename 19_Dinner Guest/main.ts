// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a
// message indicating the numberof people you are inviting to dinner.

let Guest = [
  "Shehryar",
  "Arsalan",
  "Hashir",
  "Asad",
  "Sultan",
  "Salman",
  "Kamran",
];

console.log(
  `I am Inviting ${Guest.length} number of friends to my dinner which are following\n`
);

for (let i = 0; i < Guest.length; i++) {
  console.log(`${i + 1}. ${Guest[i]}`);
}
