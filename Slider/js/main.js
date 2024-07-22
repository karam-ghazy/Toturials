let slideImg = document.querySelectorAll(".slider-container img");
//number of img slider in page
let slidNumber = slideImg.length;

//slide number string
let slideString = document.querySelector(".slider-number");

//current slide
let currentSlide = 1;

//net and previous button
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

//handle btn
nextBtn.onclick = nextslide;
prevBtn.onclick = prevslide;

//create a indicators ul Element
let indicatorsElement = document.createElement("ul");
//add attribute to ul
indicatorsElement.setAttribute("id", "indicators-ul");
//create indicatorsItems lis
for (let i = 1; i <= slidNumber; i++) {
  let indicatorsItem = document.createElement("li");
  //add attribute to indicatorsItem
  indicatorsItem.setAttribute("data-index", i);
  //add text to indicatorsItem
  indicatorsItem.appendChild(document.createTextNode(i));
  //append indicatorsItem to indicatorsElement
  indicatorsElement.appendChild(indicatorsItem);
}

//append indicatorsElement to page
document.querySelector(".indicators").appendChild(indicatorsElement);

//get indicators ul element
let indicatorsUl = document.querySelector(".indicators ul");
//get indicators ul li elements
let indicatorsUlLis = document.querySelectorAll(".indicators ul li");

indicatorsUlLis.forEach((li) => {
  li.onclick = function () {
    currentSlide = parseInt(li.getAttribute("data-index"));
    theChecker();
  };
});

//trigger the function
theChecker();

function nextslide() {
  currentSlide++;
  currentSlide < 6 ? theChecker() : currentSlide--;
}

function prevslide() {
  currentSlide--;
  currentSlide > 0 ? theChecker() : currentSlide++;
}

function theChecker() {
  //set slide String Text
  slideString.innerHTML = `Slide #${currentSlide} of ${slidNumber}`;

  //remove all class active
  removeAllActive();

  //set active to img
  slideImg[currentSlide - 1].classList.add("active");

  //set active to li
  indicatorsUl.children[currentSlide - 1].classList.add("active");

  //check if current item is first
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  //check if current item is last
  if (currentSlide == slidNumber) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function removeAllActive() {
  slideImg.forEach((img) => img.classList.remove("active"));
  indicatorsUlLis.forEach((li) => li.classList.remove("active"));
}
