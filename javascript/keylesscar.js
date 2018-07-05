// Keyless car
// This script is a simple conditional flow example

// Author: Chris Scogin

// Ask the user how old they are
const age = prompt("How old are you? ");

// Check whether the user is younger, old, or the age of 18
if (parseInt(age) < 18){
    alert("Sorry, you are too young to drive this car. Powering off")
} else if (parseInt(age) === 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else {
    alert("Powering On. Enjoy the ride!")
}