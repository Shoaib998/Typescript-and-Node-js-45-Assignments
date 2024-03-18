"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.
// LowerCase
var person_Name = "Muhammad Shoaib Khan";
console.log("lowerCase", person_Name.toLowerCase());
// UpperCase
console.log("upperCase", person_Name.toUpperCase());
// titleCase
let first_Letter = person_Name.charAt(0).toUpperCase();
let rest_Letter = person_Name.slice(1).toLowerCase();
let titleCase = first_Letter + rest_Letter;
console.log("titleCase", titleCase);
