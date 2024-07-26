//create aletters
let letters = "abcdefghijklmnopqrstuvwxyz";

//craete array from letters
let lettersArray = Array.from(letters);

//get letters container
let letterContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  //create a span box for letter
  let span = document.createElement("span");
  span.className = "letter-box";
  //create a text contain letter
  let textSpan = document.createTextNode(letter);
  // append text to span
  span.appendChild(textSpan);
  // append span to letter container
  letterContainer.appendChild(span);
});

//Objects of words + category
let words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scaia",
    "fortran",
    "c",
    "mysql",
    "python",
  ],
  movies: [
    "prestige",
    "inception",
    "parasite",
    "interstellar",
    "whiplash",
    "memento",
    "coco",
    "up",
  ],
  people: ["Albert Einshtein", "Hitchcock", "Alexandar", "Cleopatra"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

//Array of keys
let allKeys = Object.keys(words);

//random index of properties
let randomPropIndex = Math.floor(Math.random() * allKeys.length);
// Category name
let randomPropName = allKeys[randomPropIndex];
// Category value
let randomPropValue = words[randomPropName];

//random index of words
let randomWordIndex = Math.floor(Math.random() * randomPropValue.length);
// Word name
let randomWordName = randomPropValue[randomWordIndex];

//appedn category name to page
document.querySelector(".game-info .category span").innerHTML = randomPropName;

//get letters-guess container
let lettersGuessContainer = document.querySelector(".letters-guess");
//
let lettersGuess = Array.from(randomWordName);
//create span depend on word
lettersGuess.forEach((letter) => {
  let span = document.createElement("span");
  if (letter === " ") span.className = `has-space`;
  //appedn span to letters-guess container
  lettersGuessContainer.appendChild(span);
});

//get span guess letters
let spanLetters = document.querySelectorAll(".letters-guess span");

//status role
let theStatus;

//number of wrongs
let wrongNumbers = 0;
//get the-draw from page that contian the man and the hang
let theDraw = document.querySelector(".hangman-draw");
//get box-letter
let letterBox = document.querySelectorAll(".letters .letter-box");
//get message fro page
let message = document.querySelector(".message p");

document.addEventListener("click", (e) => {
  theStatus = false;
  //check if the clicked element is letter-box
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    //store letter
    let letterClicked = e.target.innerHTML.toLowerCase();
    //check if letter is contain in the letter guess
    lettersGuess.forEach((letter, index) => {
      if (letter.toLowerCase() === letterClicked) {
        theStatus = true;
        spanLetters[index].innerHTML = letterClicked.toUpperCase();
      }
    });
    if (theStatus !== true) {
      wrongNumbers++;
      if (wrongNumbers < 8) theDraw.classList.add(`wrong-${wrongNumbers}`);
      else {
        letterBox.forEach((box) => {
          theDraw.classList.add(`wrong-${wrongNumbers}`);
          box.classList.add("clicked");
          message.style.padding = "10px";
          message.innerHTML = `You Loss The Word Guess is ${randomWordName}`;
        });
      }
    }
  }
});
