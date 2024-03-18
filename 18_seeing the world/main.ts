// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const seeing_World = ['Pakistan', 'Germany', 'Norway', 'Sweden', 'Italy'];

console.log(seeing_World);

// making a copy of an array

let copy_Array = seeing_World.slice();

let sorted_Array = copy_Array.sort();

console.log(sorted_Array);

// print original Array

console.log(seeing_World);

// reversing original Array
//  first we have to make a copy of original Array
let copy_Array2 = seeing_World.slice()
let reverse_OriArray = copy_Array2.reverse();
console.log(reverse_OriArray);

// printing Original Array Again
console.log(seeing_World);


// reverse the order of original Array

let reverse_OriArray2 = seeing_World.reverse();
console.log(reverse_OriArray2);

let again_Reverse = reverse_OriArray2.reverse();
console.log(again_Reverse); //same as original Array

// Soted Original Array

let sort_OriArray = seeing_World.sort();
console.log(sort_OriArray);

let reverse_SortedArray = sort_OriArray.reverse();
console.log(reverse_SortedArray);

