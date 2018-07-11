// change everything below to the newer Javascript!

// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person
console.log('first',firstName,lastName, age, eyeColor);

// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a,b,c};
console.log('second',okObj);

// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${age} last summer no???`;
console.log('third',message);

// default arguments
// default age to 10;
function isValidAge(yourAge=10) {
    console.log(yourAge);
}
isValidAge();
isValidAge(29);

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        console.log("I am not lost");
    } else {
        console.log("I am totally lost!");
    }
};
whereAmI("chris");