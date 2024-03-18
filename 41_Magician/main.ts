// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magician_Names = ["Tariq", "Faraz", "Ali", "Rayyan"];

function show_magicians() {
  for (let magician_Name of magician_Names) {
    console.log(magician_Name);
  }
}

show_magicians();
