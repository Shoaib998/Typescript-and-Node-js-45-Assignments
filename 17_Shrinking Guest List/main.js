"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
// time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying
//  that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them 
// know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list 
// to make sure you actually have an empty list at the end of your program.
const shrinking_Guest = [
    "Shehryar",
    "Arsalan",
    "Hashir",
    "Asad",
    "Sultan",
    "Salman",
    "Kamran",
];
console.log("Table is not available, I can invite only 2 person\n");
//  remove all guest from list
let Guest1 = shrinking_Guest.pop();
console.log(`Sorry Mr. ${Guest1} you are not invited!`);
let Guest2 = shrinking_Guest.pop();
console.log(`Sorry Mr. ${Guest2} you are not invited!`);
let Guest3 = shrinking_Guest.pop();
console.log(`Sorry Mr. ${Guest3} you are not invited!`);
let Guest4 = shrinking_Guest.pop();
console.log(`Sorry Mr. ${Guest4} you are not invited!`);
let Guest5 = shrinking_Guest.pop();
console.log(`Sorry Mr. ${Guest5} you are not invited!`);
for (let i = 0; i < shrinking_Guest.length; i++) {
    console.log(`Mr. ${shrinking_Guest[i]} You are still invited!`);
}
shrinking_Guest.pop();
shrinking_Guest.pop();
console.log(shrinking_Guest);
