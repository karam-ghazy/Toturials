let up = document.querySelector(".up");
window.onscroll = function () {
  this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");
};
up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
