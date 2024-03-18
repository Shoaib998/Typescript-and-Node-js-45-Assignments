"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 42. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let magician_Names = ["Tariq", "Faraz", "Ali", "Rayyan"];
// making a copy of an array
let magician_NamesCopy = [...magician_Names];
function show_magicians(greet) {
    let withGreeting = "";
    for (let magician_Name of magician_NamesCopy) {
        withGreeting += `${greet} ${magician_Name}\n`;
        // console.log(greet, magician_Name);
    }
    return withGreeting;
}
let myGreeting = show_magicians("Hello");
let make_Array = myGreeting.split("\n");
console.log(make_Array);
console.log(magician_Names);
// show_magicians("Hello, How Are You Mr.");
