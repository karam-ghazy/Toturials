let inputField = document.querySelector("input");
let addBtn = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let DeleteAllBtn = document.querySelector(".all");

let Tasks = [];
// localStorage.clear();
//check if there is tasks in local storage
if (localStorage.getItem("tasks")) {
  Tasks = JSON.parse(localStorage.getItem("tasks"));
}
//get task
getTaskFromLocalStorage();

addBtn.onclick = function () {
  if (inputField.value != "") {
    addTaskToArray(inputField.value);
    inputField.value = ""; // Empty input field
  }
};
function addTaskToArray(fieldText) {
  //Task Data
  const task = {
    id: Date.now(),
    title: fieldText,
    completed: false,
  };
  Tasks.push(task); //Add task to Array
  ceateElementAndAddedToPage(Tasks); //Add tasks to page
  //set Taks to local storage
  setTaskToLocalStorage(Tasks);
}
function ceateElementAndAddedToPage(Tasks) {
  tasksDiv.innerHTML = ""; //Empty Tasks Div
  //Looping on array of tasks
  Tasks.forEach((task) => {
    //create main div
    let div = document.createElement("div");
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    div.classList.add("task");
    //check if task done
    if (task.completed) {
      div.classList.add("done");
    }
    //create delete button
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("Delete"));
    span.classList.add("del");
    //append button to main div
    div.appendChild(span);
    //add task to task container
    tasksDiv.appendChild(div);
  });
}
function setTaskToLocalStorage(Array_Taks) {
  window.localStorage.setItem("tasks", JSON.stringify(Array_Taks));
}
function removeAllTasksFromLocalStorage() {
  window.localStorage.clear();
}

function getTaskFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let task = JSON.parse(data);
    ceateElementAndAddedToPage(task);
  }
}
tasksDiv.onclick = function (e) {
  if (e.target.classList.contains("del")) {
    //remove tassk from local storage
    removeTask(e.target.parentElement.getAttribute("data-id"));
    //remove task from page
    e.target.parentElement.remove();
  }
  // task element
  if (e.target.classList.contains("task")) {
    // toggle status
    toggleStatus(e.target.getAttribute("data-id"));
    //toggle done
    e.target.classList.toggle("done");
  }
};

function removeTask(Taskid) {
  Tasks = Tasks.filter((task) => {
    task.id != Taskid;
  });
  setTaskToLocalStorage(Tasks);
}
function toggleStatus(taskid) {
  for (let i = 0; i < Tasks.length; i++) {
    if (Tasks[i].id == taskid) {
      Tasks[i].completed == false
        ? (Tasks[i].completed = true)
        : (Tasks[i].completed = false);
    }
  }
  setTaskToLocalStorage(Tasks);
}
DeleteAllBtn.onclick = function () {
  tasksDiv.innerHTML = "";
  removeAllTasksFromLocalStorage();
};
