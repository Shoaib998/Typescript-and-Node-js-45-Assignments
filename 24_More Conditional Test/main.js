"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False 
// result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
//  greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// equlity or inequility
let my_Name = "Shoaib";
console.log(my_Name == "Shoaib");
console.log(my_Name !== "shoaib");
// numeric
let my_Number = 99;
console.log(my_Number == 99);
console.log(my_Number !== 99);
console.log(my_Number > 50);
console.log(my_Number < 100);
console.log(my_Number <= 100);
console.log(my_Number >= 50);
// and & ===== 04 |
let num1 = 9;
let num2 = 15;
console.log(num1 > 8 && num2 < 15);
console.log(num1 > 8 || num2 < 15);
let my_Array = [23, 3, "ALi"];
let my_String = "Salman";
console.log(Array.isArray(my_Array));
console.log(Array.isArray(my_String));
