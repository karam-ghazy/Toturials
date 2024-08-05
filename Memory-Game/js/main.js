//get start btn control
let StartBtn = document.querySelector(".control-button span");

let playerName = document.querySelector(".info-container .name span");

StartBtn.onclick = function () {
  //popup window to enter player name
  let yourName = prompt("Enter Your Name");

  //check is name if empty
  if (yourName == null || yourName == "") {
    playerName.innerHTML = "Unkown";
  } else {
    playerName.innerHTML = yourName;
  }
  // remove popup window after enter name or not
  document.querySelector(".control-button").remove();
};

//duration of flippe
let duration = 1000;

//select memory-blocks
let blocksContianer = document.querySelector(".memory-blocks");

let blocks = Array.from(blocksContianer.children);

let order = [...Array(blocks.length).keys()];

//trigger the function shufle
shufle(order);

blocks.forEach((block, index) => {
  block.style.order = order[index];

  block.addEventListener("click", function () {
    //trigger the function
    addClassFlipped(block);
  });
});

function shufle(array) {
  //current index , temp element, random index
  let current = array.length,
    temp,
    random;

  //loop on array
  while (current > 0) {
    // random index
    random = Math.floor(Math.random() * current);

    //decrease current
    current--;
    // 1- temp element = curent element
    temp = array[current];
    // 2- current element = random element
    array[current] = array[random];
    // 3- random element = get element from temp
    array[random] = temp;
  }
  return array;
}

function addClassFlipped(block) {
  //add class flipped on block
  block.classList.add("flipped");

  //filter on flipped block
  let flippedBlocks = blocks.filter((block) =>
    block.classList.contains("flipped")
  );
  // checck if two blocks are flipped
  if (flippedBlocks.length === 2) {
    // console.log("Two bloacks are flipped");

    //stop clicking on block
    stopclicking();
    //check matching blocks
    checkMatched(flippedBlocks[0], flippedBlocks[1]);
  }
}

function stopclicking() {
  //add class no clicking on blocks container
  blocksContianer.classList.add("no-clicking");
  // remove class no clicking after the duration
  setTimeout(() => {
    blocksContianer.classList.remove("no-clicking");
  }, duration);
}

function checkMatched(firstBlock, secondBlock) {
  //wrong tries
  let tries = document.querySelector(".tries span");
  //check if the blocks have the same data
  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    //remove class flipped from two bloacks
    firstBlock.classList.remove("flipped");
    secondBlock.classList.remove("flipped");
    //add class has matched to bloacks
    firstBlock.classList.add("has-matched");
    secondBlock.classList.add("has-matched");
  } else {
    tries.innerHTML = parseInt(tries.innerHTML) + 1;
    setTimeout(() => {
      //remove class flipped from two bloacks
      firstBlock.classList.remove("flipped");
      secondBlock.classList.remove("flipped");
    }, duration);
  }
}
