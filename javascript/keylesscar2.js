// Exercise to improve the simplistic keylesscar.js file which
// uses conditional flow

// Author: Chris Scogin

// check the drivers age
function checkDriverAge(age){
    // let age = prompt("What is your age? ");
    if (parseInt(age) < 18 ) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (parseInt(age) === 18 ) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        console.log("Powering On. Enjoy the ride!");
    }
};
const checkDriverAge2 = (age) => {
        // let age = prompt("What is your age? ");
        if (parseInt(age) < 18 ) {
            console.log("Sorry, you are too young to drive this car. Powering off");
        } else if (parseInt(age) === 18 ) {
            console.log("Congratulations on your first year of driving. Enjoy the ride!");
        } else {
            console.log("Powering On. Enjoy the ride!");
        }
};

checkDriverAge("18");

checkDriverAge2("17");
