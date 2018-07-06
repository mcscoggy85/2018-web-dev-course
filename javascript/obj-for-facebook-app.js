// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
const exampleUser = {
    username: "andrei",
    password: "supersecret"
};


// 2. Create an array which contains the object you have made above and name the arry "database"
let database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "ingrid",
        password: "777"
    }
];
// database.forEach( (database) => {
//    console.log(database.username);
// });

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

let userNamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function signIn(list, username, password) {
    if (isUser()){
        console.log(newsfeed);
    } else {
        alert("Something went wrong, either your username or password is incorrect");
    }
    // if ((user === database[0].username) && (pass === database[0].password)){
    //     console.log(newsFeed);
    // } else {
    //     alert("Something went wrong, either your username or password is incorrect");
    // }
}


signIn(database, userNamePrompt, passwordPrompt);


function isUser(list, username, password) {
    for (let user in list){
        console.log(list[user].username);
        if ((username === list[user].username) && (password === list[user].password)){
            return true;
        }
    }
    return false;

}