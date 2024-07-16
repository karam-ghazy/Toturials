let input = document.querySelector("input");
let progress = document.querySelector(".progress");
let count = document.querySelector(".count");
let maxlength = input.getAttribute("maxlength");
count.textContent = maxlength;
input.oninput = function () {
  count.textContent = maxlength - input.value.length;
  progress.style.width = `${(input.value.length * 100) / maxlength}%`;
  count.textContent == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");
};
