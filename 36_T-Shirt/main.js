"use strict";
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_Shirt(size, text) {
    // return size + text;
    return `My Shirt No. is ${size} and text is ${text}`;
}
let my_Fun = make_Shirt(99, " Sunday is Funday");
// how to print Function on console
console.log(my_Fun);
