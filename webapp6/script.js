const button = document.getElementById("enter");
let input = document.getElementById("userinput");
const ul = document.getElementById("list");
let li = document.getElementsByTagName('li');

// get the length of the user input
function inputLength() {
	return input.value.length;
}

// create the list element to place in the ul parent element
function createListElement() {
	let li = document.createElement("li");
    const delbtn = document.createElement('button');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
    delbtn.appendChild(document.createTextNode('Delete!'));
    delbtn.className = 'del-btn';
	li.appendChild(delbtn);
	input.value = "";

	liEvent();
	buttonListElement();
}

// Add li element if received from a click event
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
    }
}

// Add li element if received from a key press event
// don't use keyCode method it is deprecated
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === 'Enter') {
		createListElement();
	}
}

// get li items that have been created
function liEvent() {
    for( let i=0; i<li.length; i++){
        li[i].addEventListener('click', changeClass)
    }
}

// toggle the done class
function changeClass() {
    this.classList.toggle('done');
}

// list buttons and wait for remove action
function buttonListElement(){
    let btn = document.querySelectorAll('li button');
    for( let i=0; i<btn.length; i++){
        btn[i].addEventListener('click', clearElement)
    }

}

// clear element
function clearElement() {
    for(let i=0; i<li.length; i++){
        this.parentNode.remove()
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

liEvent();
buttonListElement();
