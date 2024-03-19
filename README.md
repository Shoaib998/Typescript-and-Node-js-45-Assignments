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

Task No.05

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a
// variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

const famous_Person: string = "Albert Einstein";

const message: string =
  "once said, “A person who never made a mistake never tried anything new.”";

console.log(famous_Person, message);

Task No.06

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
//  Print the name once, so the whitespace around the name is displayed. Then print the name after
//  striping the white spaces.

// \t use for tab space
const my_Name: string = "\tMuhammad Shoaib Khan";

// \n used for new line

Task No.07

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each
// result in the number 8. Be sure to enclose your operations in print statements to see the results.

const addition: number = 6 + 2;
const subtraction: number = 12 - 4;
const multiplication: number = 2 * 4;
const division: number = 16 / 2;

console.log(addition, subtraction, multiplication, division);
const my_Names: string = "Muhammad \nShoaib Khan";

console.log(my_Name);
console.log(my_Names);

// console.log(my_Name.trim());

Task No.08


// 8. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(7 + 1);
console.log(13 - 5);
console.log(4 * 2);
console.log(16 / 2);

