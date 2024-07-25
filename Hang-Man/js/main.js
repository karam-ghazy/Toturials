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
