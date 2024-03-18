"use strict";
// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
let animals_Name = ["Cow", "Camel", "Sheep", "Goat"];
for (let i = 0; i < animals_Name.length; i++) {
    console.log(animals_Name[i]);
}
for (let j of animals_Name) {
    // console.log(`${j} is a domestic Animals`);
    if (j == "Cow") {
        console.log(`${j} cow is a domestic animal.`);
    }
    else if (j == "Camel") {
        console.log(`${j} 17 din tk pani k baghir reh sakta hai`);
    }
    else if (j == "Sheep") {
        console.log(`${j}  is halal`);
    }
    else if (j == "Goat") {
        console.log(`${j} is also halal`);
    }
}
console.log(`All these animals ${animals_Name[0]}, ${animals_Name[1]}, ${animals_Name[2]} and 
${animals_Name[3]} meat is Halal in Islam`);
