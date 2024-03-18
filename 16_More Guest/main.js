"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
const more_Guest = ["Shehryar", "Hashir", "Arsalan", "Asad", "Sultan"];
console.log(more_Guest);
console.log("We have 3 more friend to invite on Dinner\n");
// add 3 more guest
// Adding in the beggining
more_Guest.unshift("salman");
console.log(more_Guest);
// Adding in the middle
more_Guest.splice(3, 0, "Kamran");
console.log(more_Guest);
// Add at last
more_Guest.push("Qutub");
console.log(more_Guest);
// print all friend alon with message
for (let i = 0; i < more_Guest.length; i++) {
    console.log(`Mr. ${more_Guest[i]}! yor are invited to my dinner`);
}
