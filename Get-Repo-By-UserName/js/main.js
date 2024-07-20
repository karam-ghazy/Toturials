let input = document.querySelector("input");
let getBtn = document.querySelector(".get-button");
let divData = document.querySelector(".show-data");
let username = input.value;
getBtn.onclick = function () {
  if (input.value != "") {
    fetchlink(input.value);
    input.innerHTML = "";
  }
};

function fetchlink(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then(
      (repos) => {
        if (repos) {
          divData.innerHTML = "";
          createElemetAndAddToPage(repos);
        }
      },
      (reject) => {
        divData.innerHTML = "No Data To Show";
      }
    );
}
function createElemetAndAddToPage(repos) {
  repos.forEach((repo) => {
    //craete a main div
    let mainDiv = document.createElement("div");
    //add class to main div
    mainDiv.className = "repo-box";
    //create a text for main div the name of repo
    mainDiv.appendChild(document.createTextNode(repo.name));
    //create a url for repo
    let url = document.createElement("a");
    url.href = `https://github.com/${username}/${repo.name}`;
    //create a text for url
    url.appendChild(document.createTextNode("visit"));
    //open url in the other page
    url.setAttribute("target", "_blanck");
    //add url to main div
    mainDiv.appendChild(url);
    //create a star
    let stars = document.createElement("span");
    //star tex
    let startText = document.createTextNode(`stars ${repo.stargazers_count}`);
    stars.appendChild(startText);
    //add star to main div
    mainDiv.appendChild(stars);
    //add name to page
    divData.appendChild(mainDiv);
  });
}
