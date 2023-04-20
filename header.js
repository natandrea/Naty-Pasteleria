const menu__button = document.getElementById("menu__button")
const nav__small = document.getElementById("nav__small")

menu__button.addEventListener("click", slideIn);
nav__small.addEventListener ("mouseleave", slideOut);

function slideIn() {
    nav__small.style.transform = "translateX(0%)"
}

function slideOut() {
    nav__small.style.transform = "translateX(100%)"
}