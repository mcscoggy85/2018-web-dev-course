// get input
let input = document.getElementById("userinput");
// get button
const button = document.getElementById("enter");
// get unordered list
ul = document.querySelector("ul");

// get length of input value
function inputLength() {
    return input.value.length;
}

// create a list element and append to ul
function createLiElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

// Add the li from the input if a click event occurs
function addLiAfterClick(){
    if (inputLength() > 0){
        createLiElement();
    }
}

// Add the li from the input if a keypress "Enter" event occurs
function addLiAfterKeypress(event){
    if (inputLength() > 0 && event.key === 'Enter'){
        createLiElement();
    }
}

// Event Listeners

// click event
button.addEventListener("click", addLiAfterClick);
// Enter keypress event
input.addEventListener("keypress", addLiAfterKeypress);
