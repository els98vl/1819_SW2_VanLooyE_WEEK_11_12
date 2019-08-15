let darkLink = document.querySelectorAll("nav a")[0];
let lightLink = document.querySelectorAll("nav a")[1];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);

let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}
mainGedeelte.addEventListener("click",verbergMenu);
function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}
menuKnop.addEventListener("click",toonMenu);
