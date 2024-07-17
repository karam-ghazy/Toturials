let burger_menu = document.querySelector(".burger");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

burger_menu.onclick = function () {
  nav.classList.add("open");
};
close.onclick = function () {
  this.parentElement.classList.remove("open");
};
//open menu with o and close with escape
document.onkeyup = function (e) {
  if (e.key === "Escape") nav.classList.remove("open");
  if (e.key === "o") nav.classList.add("open");
};
