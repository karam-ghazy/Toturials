let switcherlis = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery img");

switcherlis.forEach((li) => {
  li.addEventListener("click", removerActive);
  li.addEventListener("click", manageimg);
});
//remove class active from all li and add it on the clicked one
function removerActive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
//show only img in the spicific work place
function manageimg() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
