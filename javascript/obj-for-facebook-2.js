// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
const exampleUsers = {
    Andrei: {
        username: "andrei",
        password: "supersecret",
        timeLine: "This is a test for Andrei"
    },
    Bobby: {
        username: "bobby",
        password: "supernatural",
        timeLine: "So tired from all that learning!"
    },
    Sally: {
        username: "sally",
        password: "mustangsally",
        timeline: "Javascript is sooooo cool!"
    },
    Mitch: {
        username: "mitch",
        password: "mitchiscool",
        timeLine: "Javascript is preeetyy cool!"
    }
};


// 2. Create an array which contains the object you have made above and name the arry "database"
let database = [
    exampleUsers
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const userBobby = exampleUsers.Bobby.username;
const userSally = exampleUsers.Sally.username;
const userMitch = exampleUsers.Mitch.username;

const userBobbyTimeLine = exampleUsers.Bobby.timeLine;
const userSallyTimeLine = exampleUsers.Sally.timeLine;
const userMitchTimeLine = exampleUsers.Mitch.timeLine;

let newsFeed = [
    {
        user1: userBobby,
        user1TimeLine: userBobbyTimeLine
    },
    {
        userSally: userSallyTimeLine
    },
    {
        userMitch: userMitchTimeLine
    }
    ];

console.log(`${newsFeed[0].user1} == ${newsFeed[0].user1TimeLine}`);
console.log(database[0].Mitch.username);