Task No.01
// # Getting Started Exercises with TypeScript and Node.js

// Note: Try these short programs to get some firsthand experience with TypeScript and Node.js.
// You might want to create a new folder for each exercise to keep them organized. Create a single Github repository to commit the code for these exercises and once finished submit the URL of the repo.

// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.

//Task No.02

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


let person_Name: string = " Eric ";
// console.log("Hello" + person_Name + "would you like to learn some python today?");
console.log(`Hello ${person_Name} would you like to learn some python today?`)

Task No.03

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.

// LowerCase

var person_Name: string = "Muhammad Shoaib Khan";
console.log("lowerCase", person_Name.toLowerCase());

// UpperCase

console.log("upperCase", person_Name.toUpperCase());

// titleCase

let first_Letter: string = person_Name.charAt(0).toUpperCase();
let rest_Letter: string = person_Name.slice(1).toLowerCase();

let titleCase = first_Letter  + rest_Letter;

console.log("titleCase",titleCase);

Task No.04

// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the
// following, including the quotation marks:

const Quote: string = ` Albert Einstein once said, “A person who never made a mistake never tried anything new.”`;

console.log(Quote);
