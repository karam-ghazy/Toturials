let serialEl = document.querySelector(".serial");
let BtnEL = document.querySelector(".generate");

BtnEL.addEventListener("click", create);
function create() {
  let characters =
    "1234567890abcdefghiJklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let count = 10;
  let passResult = "";
  for (let i = 0; i < count; i++) {
    passResult += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.textContent = passResult;
}
