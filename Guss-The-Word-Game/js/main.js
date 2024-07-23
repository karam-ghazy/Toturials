//Setting Game Name
let gameName = "Guss The Word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector(
  "footer"
).innerHTML = `${gameName} Game Created By Karam Alghazy`;

//Setting game option

let triesNumber = 6;
let lettersNumber = 6;
let currentTry = 1;

//guss word and array of words chosen
let gussWord = "";
let words = [
  "create",
  "update",
  "delete",
  "master",
  "branch",
  "mainly",
  "elzero",
  "school",
];
gussWord = words[Math.floor(Math.random() * words.length)];

function generateInputs() {
  let inputContainer = document.querySelector(".inputs");
  //craete Main div input
  for (let i = 1; i <= triesNumber; i++) {
    let Maindiv = document.createElement("div");
    Maindiv.classList.add(`try-${i}`);
    Maindiv.innerHTML = `<span>Try ${i} </span>`;
    if (i != 1) Maindiv.classList.add("disabled-input");
    //create inputs fields
    for (let j = 1; j <= lettersNumber; j++) {
      let input = document.createElement("input");
      input.type = "text";
      input.setAttribute("maxlength", 1);
      input.id = `guss-${1}-letter${j}`;
      Maindiv.appendChild(input);
    }
    inputContainer.appendChild(Maindiv);
  }
  inputContainer.children[0].children[1].focus();

  disabledInput();

  let inputs = document.querySelectorAll("input");
  AutoMove(inputs);
  RightLeftMove(inputs);
}

function disabledInput() {
  //disabled all disabled input
  let disabledInputs = document.querySelectorAll(".disabled-input input");
  disabledInputs.forEach((input) => (input.disabled = true));
  //
}

function AutoMove(inputs) {
  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      input.value = input.value.toUpperCase();
      let nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    });
  });
}

function RightLeftMove(inputs) {
  inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (event) {
      // console.log(event);
      let currentIndex = Array.from(inputs).indexOf(event.target); // event.target or this
      if (event.key == "ArrowRight") {
        let nextInput = currentIndex + 1;
        if (nextInput < inputs.length) inputs[nextInput].focus();
      }
      if (event.key == "ArrowLeft") {
        let prevInput = currentIndex - 1;
        if (prevInput >= 0) inputs[prevInput].focus();
      }
    });
  });
}

let check = document.querySelector(".check");
check.addEventListener("click", handleCheck);

console.log(gussWord);

function handleCheck() {
  let success = true;
  for (let i = 1; i <= lettersNumber; i++) {
    //get the current input and the actual letter in each case
    let input = document.querySelector(`#guss-${currentTry}-letter${i}`);
    let letter = input.value.toLowerCase();
    let actuallLetter = gussWord[i - 1];

    //Game logic

    if (letter == actuallLetter) {
      //if letter correct and in the right place
      input.classList.add("yes-in-place");
    } else if (gussWord.includes(letter) && letter != "") {
      //if letter correct and not in the right place
      input.classList.add("not-in-place");
      success = false;
    } else {
      //if letter is not correct
      input.classList.add("no");
      success = false;
    }
  }
}

window.onload = function () {
  generateInputs();
};
