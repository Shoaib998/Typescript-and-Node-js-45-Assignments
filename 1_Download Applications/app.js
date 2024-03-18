"use strict";
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
let person_Name = " Eric ";
// console.log("Hello" + person_Name + "would you like to learn some python today?");
console.log(`Hello ${person_Name} would you like to learn some python today?`);
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.
// LowerCase
var person_Namee = "Muhammad Shoaib Khan";
console.log("lowerCase", person_Namee.toLowerCase());
// UpperCase
console.log("upperCase", person_Namee.toLocaleUpperCase());
// titleCase
let first_Letter = person_Namee.charAt(0).toUpperCase();
let rest_Letter = person_Namee.slice(1).toLowerCase();
let titleCase = first_Letter + rest_Letter;
console.log("titleCase", titleCase);
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the
// following, including the quotation marks:
const Quote = ` Albert Einstein once said, “A person who never made a mistake never tried anything new.”`;
console.log(Quote);
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a 
// variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.
const famous_Person = "Albert Einstein";
const message = "once said, “A person who never made a mistake never tried anything new.”";
console.log(famous_Person, message);
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
//  Print the name once, so the whitespace around the name is displayed. Then print the name after
//  striping the white spaces.
// \t use for tab space
const my_Name = "\tMuhammad Shoaib Khan";
// \n used for new line
const my_Namee = "Muhammad \nShoaib Khan";
console.log(my_Name);
console.log(my_Namee);
// console.log(my_Name.trim());
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each 
// result in the number 8. Be sure to enclose your operations in print statements to see the results.
const addition = 6 + 2;
const subtraction = 12 - 4;
const multiplication = 2 * 4;
const division = 16 / 2;
console.log(addition, subtraction, multiplication, division);
// 8. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(7 + 1);
console.log(13 - 5);
console.log(4 * 2);
console.log(16 / 2);
// 9. Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. Print that message.
const favorite_Number = 998;
const messages = `My Favorite Number is ${favorite_Number}`;
console.log(messages);
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If you don’t have anything specific to write because your programs are too simple at this point,
//  just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
const num1 = 9;
const num2 = 7;
// this will add the num1 and num2 (this is comment in typescript)
console.log(num1 + num2);
// 11. Names: Store the names of a few of your friends in a array
// called names. Print each person’s name by accessing each element in the list, one at a time.
// const names: string = ["Shehryar, Hashir, Arsalan, Asad, Sultan"];
// console.log(names.)
