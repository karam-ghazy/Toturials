//get start btn control
let StartBtn = document.querySelector(".control-button span");

let playerName = document.querySelector(".info-container .name span");

StartBtn.onclick = function () {
  //popup window to enter player name
  let yourName = prompt("Enter Your Name");

  //check on name if empty
  if (yourName == null || yourName == "") {
    playerName.innerHTML = "Unkown";
  } else {
    playerName.innerHTML = yourName;
  }
  // remove popup window4e after enter name or not 
  document.querySelector(".control-button").remove();
};
