// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//  if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement,such as You really like bananas!

let Fav_Fruits = ["Apple", "Orange", "Banana"];

// if(Fav_Fruits.includes("Mango")){  //Include is used to checking the fruit available in array
//   console.log(`I would Like to eat Mango`);

// }else if(Fav_Fruits.includes("Apple")){
//     console.log(`I would Like to eat Apple`);

// }else{
//     console.log(`Fruits are not available`)
// }

let fruit_Available = "Mango";

if (Fav_Fruits.includes(fruit_Available)) {
  //Include is used to checking the fruit avaolable in array
  console.log(`I would Like to eat ${fruit_Available}`);
} else if (Fav_Fruits.includes(fruit_Available)) {
  console.log(`I would Like to eat ${fruit_Available}`);
} else {
  console.log(`Fruits are not available`);
}
