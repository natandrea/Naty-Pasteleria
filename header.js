const menu__button = document.getElementById("menu__button");
const nav__small = document.getElementById("nav__small");

menu__button.addEventListener("click", slideIn);
nav__small.addEventListener("mouseleave", slideOut);

function slideIn() {
  nav__small.style.width = "200px";
}

function slideOut() {
  nav__small.style.width = "0px";
}
