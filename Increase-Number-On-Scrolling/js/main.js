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

//get time end
let countDownDate = new Date("Oct 10, 2024 23:59:59").getTime();
// console.log(countDownDate);

//start counter
let counter = setInterval(() => {
  //get date now
  let dateNow = new Date().getTime();
  // Find the difference between now and the countdown date
  let dateDiff = countDownDate - dateNow;
  //get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  // console.log(days);
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // console.log(hours);
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  // console.log(minutes);
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  // console.log(seconds);
  document.querySelector(".events .Days").textContent =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .Hours").textContent =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .Minutes").textContent =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").textContent =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff == 0) {
    clearInterval(counter);
  }
}, 1000);
