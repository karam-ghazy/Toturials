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
let hintsNumber = 2;
// to know if we win and all letter in fields
let count;

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
let messageArea = document.querySelector(".message");

let spanHint = document.querySelector(".hint span");
spanHint.innerHTML = hintsNumber;

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
      input.id = `guss-${i}-letter${j}`;
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

let checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", handleCheck);

console.log(gussWord);

function handleCheck() {
  let success = checker();
  console.log(gussWord);
  //check if user win or not then check if next checker is avialable
  nextChecker(success);
}

function checker() {
  let success = null;
  count = 0;
  for (let i = 1; i <= lettersNumber; i++) {
    //get the current input and the actual letter in each case
    let input = document.querySelector(`#guss-${currentTry}-letter${i}`);
    let letter = input.value.toLowerCase();
    let actuallLetter = gussWord[i - 1];

    //Game logic

    if (letter == actuallLetter) {
      //if letter correct and in the right place
      count++;
      // console.log(count);
      input.classList.add("yes-in-place");
      success = true;
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
  return success;
}

function nextChecker(success) {
  //check if user is win or not
  if (success && count == lettersNumber) {
    messageArea.innerHTML = `you win the word guss is <span>${gussWord}</span>`;
    checkBtn.disabled = true;
    hintBtn.disabled = true;
    let divInputs = document.querySelectorAll(".inputs > div");
    divInputs.forEach((input) => input.classList.add("disabled-input"));
  } else {
    //add disabled to current input try
    document
      .querySelector(`.try-${currentTry}`)
      .classList.add("disabled-input");
    let currenInputs = document.querySelectorAll(`.try-${currentTry} input`);
    currenInputs.forEach((input) => (input.disabled = true));

    //remove disabled from next input try
    let el = document.querySelector(`.try-${currentTry + 1} `);
    if (el) {
      currentTry++;
      document
        .querySelector(`.try-${currentTry}`)
        .classList.remove("disabled-input");
      let nextInputs = document.querySelectorAll(`.try-${currentTry} input`);
      nextInputs.forEach((input) => (input.disabled = false));
      el.children[1].focus();
    } else {
      checkBtn.disabled = true;
      hintBtn.disabled = true;
      messageArea.innerHTML = `you loss the word guss is <span>${gussWord}</span>`;
    }
  }
}

let hintBtn = document.querySelector(".hint");
hintBtn.onclick = getHint;

function getHint() {
  if (hintsNumber > 0) {
    let currentInputFields = document.querySelectorAll(
      `.try-${currentTry} input`
    );
    let emptyInputFields = Array.from(currentInputFields).filter(
      (input) => input.value == ""
    );
    hintsNumber--;
    spanHint.innerHTML = hintsNumber;
    if (emptyInputFields.length > 0) {
      let randomInedx = Math.floor(Math.random() * emptyInputFields.length);
      let randomInput = emptyInputFields[randomInedx];
      let indexToFill = Array.from(currentInputFields).indexOf(randomInput);
      // console.log(randomInedx);
      // console.log(randomInput);
      // console.log(indexToFill);
      randomInput.value = gussWord[indexToFill].toUpperCase();
    }
  }
  if (hintsNumber === 0) {
    hintBtn.disabled = true;
  }
}
addEventListener("keydown", handleBackSpace);
function handleBackSpace(event) {
  if (event.key == "Backspace") {
    let inputs = document.querySelectorAll(`.try-${currentTry} input`);
    let currentIndex = Array.from(inputs).indexOf(document.activeElement);
    let prevIndex = currentIndex - 1;

    let currenInput = inputs[currentIndex];
    let prevInput = inputs[prevIndex];
    currenInput.value = "";
    prevInput.value = "";
    prevInput.focus();
  }
}

window.onload = function () {
  generateInputs();
};
