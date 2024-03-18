// 14. Guest List: If you could invite anyone, living or deceased,
//  to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const Guest = ["Shehryar", "Hashir", "Asad", "Sultan", "Arsalan"];

for (let i = 0; i < Guest.length; i++) {
  console.log(`Mr. ${Guest[i]}! you are invited to my dinner on Sunday.\n`);
}

//  Guest.map((on)=> {
//     console.log(`Mr ${Guest[on]}! you are invited to my dinner on Sunday`);
//  })
