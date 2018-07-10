const css = document.querySelector('#h3-title');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
const random = document.querySelector('.color-btn');

function setGradient() {
    body.style.background =
        `Linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `${body.style.background};`;
}

function randomColors(){
    let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = `#${randomColor1}`;
    color2.value = `#${randomColor2}`;
    setGradient();
}
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

body.onload = setGradient;

random.addEventListener('click', randomColors);