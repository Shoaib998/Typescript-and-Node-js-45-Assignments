// 42. Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magician_Names = ["Tariq", "Faraz", "Ali", "Rayyan"];

function show_magicians(greet: string) {
  for (let magician_Name of magician_Names) {
    console.log(greet, magician_Name);
  }
}

show_magicians("Hello, How Are You Mr.");
