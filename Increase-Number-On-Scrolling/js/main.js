//start insrease persentage on scrolling in our skills
let skills_per = document.querySelectorAll(".our-skills .skill .progress span"); // get progress of span
let our_skills_section = document.querySelector(".our-skills"); // get section
//end insrease persentage on scrolling in our skills

//start increase number on scrolling in stats section
let nums = document.querySelectorAll(".stats .number"); //get numbers
let section = document.querySelector(".stats"); // get section
let started = false;

window.onscroll = function () {};

function startcount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
//end increase number on scrolling in stats section

window.onscroll = function () {
  //start our skills increase
  if (window.scrollY >= our_skills_section.offsetTop) {
    skills_per.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  //end increase
  //start stats increase
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startcount(num));
    }
    started = true;
  }
  //end increase
};
