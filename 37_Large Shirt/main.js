"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
// function make_shirt(size: string, label: string){
//     return size + label
// }
// let my_Shirt = make_shirt("Large", " I love TypeScript");
// console.log(my_Shirt);
// making large as a default
// function make_shirt( label: string, size: string = "Large",){
//     return size + label
// }
// let my_Shirt = make_shirt("I love TypeScript");
// console.log(my_Shirt);
// // making Medium as a default
// function make_shirt( label: string, size: string = "Medium ",){
//     return size + label
// }
// let my_Shirt = make_shirt("I love TypeScript");
// console.log(my_Shirt);
// making any size as a default
function make_shirt(label, size) {
    return size + label;
}
let my_Shirt = make_shirt("Any Size ", "I love TypeScript");
console.log(my_Shirt);
