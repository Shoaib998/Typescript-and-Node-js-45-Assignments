"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_Users = ["Shoaib", "Hashir", "Sultan", "Arsalan", "Asad",];
let new_Users = ["Younus", "Hasnain", "Shoaib", "Hashir", "Ali"];
// We use forEach Method forEach Hamain hr ik item print kr k deta hai.
new_Users.forEach(new_User => {
    let new_UserLower = new_User.toLowerCase();
    // we will use some() method jo user ko match kary ga
    let userNameTaken = current_Users.some(current_User => current_User.toLowerCase() === new_UserLower); // true or false
    // now we will apply condition
    if (userNameTaken) {
        console.log(`${new_User} needs to choose a new username because it's already exist`);
    }
    else {
        console.log(`${new_User} is the new member Added`);
        current_Users.push(new_User); // add new user in current user array
    }
});
console.log(current_Users);
