const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnCookie = document.querySelector('#btnCookie')
const body = document.documentElement;

function handleClick() {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
}

function btnClick() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
}