"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
// array as a parameter
function sandwiches(...item) {
    return `I want sandwich of ${item}`;
}
let collection = sandwiches("Ham", "Cheeze", "Lettuce", "Chicken");
let collection2 = sandwiches("Turkey", "Italy", "indian");
let collection3 = sandwiches();
console.log(collection);
console.log(collection2);
console.log(collection3);
