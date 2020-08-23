let body = document.querySelector('body');
let firstColor = document.querySelector('#first');
let secondColor = document.querySelector('#second');
let result = document.querySelector('p.color-value');

changeBackground = () => {
    body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
    result.textContent = `=> ${body.style.background};`
}

firstColor.addEventListener("input", changeBackground);
secondColor.addEventListener("input", changeBackground);