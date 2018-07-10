const css = document.querySelector('#h3-title');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

function setGradient() {
    body.style.background =
        `Linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `${body.style.background};`;
}
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
