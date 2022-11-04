import { Task } from "./models/task";

// Add fix for window-onload function to get local storage items, commented-out functions from line 90

// Variables

let taskToDoList = [];

let taskForm = document.querySelector("#myTaskForm"); // Variable for form-element - changed it to queryselector because console said couldn't add event listener
let submitTask = document.getElementById("addBtn");
let taskDate = document.getElementById("taskDate"); // Variable for input element type date
let taskInput = document.getElementById("taskInput"); // Variable for input-element type text
let currentTask = document.getElementById("taskListCurrent"); // Variable for my current tasks ul-element
let taskComplete = document.getElementById("completedTask"); // Variable for my completed tasks ul-element

// Class for tasks, constructor connected to the two inputs - date and text (text is taskdetails property and parameter)
//Export to models-folder - done
class Task {
  constructor(date, taskdetails) {
    this.date = date;
    this.taskdetails = taskdetails;
    this.isCompleted = false;
  }
}

// Create objects based on the above declared class

let portfolio = new Task("2022-11-05", "Update portfolio");
let coffee = new Task("2022-11-06", "Buy a coffee-thermos");
let drive = new Task("2024-01-01", "Get your driver's license");
let learn = new Task("2022-11-04", "Learn functions");

taskForm.addEventListener("submit", addTask); // add eventlistener for the form, when user input is submitted in the form, call the function (which entails to add task to "my current tasks")

function addTask(e) {
  // e is object which contains information about the event
  e.preventDefault(); // prevent from submitting the form, so the values instead are looped in li down below and not shown in the url querystring

  let newTask = new Task(); // let the user input go from the class "Task"
  newTask.date = taskDate.value; // let the new task-input get the date value
  newTask.taskdetails = taskInput.value; // let the new task-input get the taskdetails-value
  taskToDoList.push(newTask); // the newtask from the user input is pushed to the array
  localStorage.setItem("taskToDoList", JSON.stringify(taskToDoList)); // sets the new tasks to array which is set to localstorage
  console.log(taskToDoList); // check console-log to see the pushed new tasks

  taskDate.value = ""; // let user decide the date value
  taskInput.value = ""; // let the user typ in the task details

  updateMyCurrentTasks(); // nested function, function shown down below
}

function updateMyCurrentTasks() {
  currentTask.innerHTML = ""; // let the innerHTML be empty for the #taskListCurrent UL before the li are created in the loop
  taskComplete.innerHTML = ""; // let the innerHTML be empty/cleared for the #completedTask UL before the li are created in the loop, to stop them from displaying x100 times

  for (let i = 0; i < taskToDoList.length; i++) {
    let myList = taskToDoList[i]; // set position that the loop should start from
    let createdTask = document.createElement("li"); // a created task creates a li-element
    let taskSetDate = document.createElement("p"); // create a p tag for the date that user chose from input
    taskSetDate.innerHTML += myList.date + " ";
    let taskSetDetails = document.createElement("p"); // create another p tag for the details that user typed in the text input
    taskSetDetails.innerHTML += " " + myList.taskdetails + ""; // text input value will be innerhtml
    let checkBoxInput = document.createElement("input"); // creates checkbox-input (line 65-67)
    checkBoxInput.className = "theCheckbox"; // add classname to the checkbox-input
    checkBoxInput.type = "checkbox";
    checkBoxInput.checked = myList.isCompleted; // description for what the checked checkbox entails
    checkBoxInput.addEventListener("change", () => {
      moveTaskToCompletedList(myList);
    }); // the task is moved to completed ul-list when checkbox is checked, "changed"

    if (myList.isCompleted) taskComplete.appendChild(createdTask);
    else currentTask.appendChild(createdTask); // explains which ul the task is appended to, depending on whether checkbox is changed or not

    createdTask.appendChild(taskSetDate); // appends the first p tag with date details to the li
    createdTask.appendChild(taskSetDetails); // appends the second p tag with taskdetails to the li
    createdTask.appendChild(checkBoxInput); // appends checkboxinput to li
  }
}

taskToDoList.push(portfolio, coffee, drive, learn); // push objects to array

updateMyCurrentTasks();
console.log(taskToDoList);

function moveTaskToCompletedList(myTask) {
  myTask.isCompleted = !myTask.isCompleted;
  updateMyCurrentTasks();
}

// Out-commented localstorage set/get --> down below
//localStorage.setItem("taskToDoList", JSON.stringify(taskToDoList));

//updateMyCurrentTasks(() => {
//  taskToDoList.push(myTask[5]);
//localStorage.setItem("taskToDoList", JSON.stringify(taskToDoList));
//});
// låt list items stanna kvar vid refresh

//function saveNewArrayObjectsToLocalStorage(myTask) {
//  taskToDoList.push(myTask);
// localStorage.setItem("myAddedTask", JSON.stringify(myTask));
//}

//saveNewArrayObjectsToLocalStorage();
/*window.onload = function () {
  localStorage.getItem("taskToDoList", JSON.stringify(taskToDoList));
};*/
/*
window.onload = function () {
  localStorage.getItem("taskToDoList", JSON.stringify(taskToDoList));
  return new Task(taskToDoList);
};*/

//window.onload = function () {
// localStorage.getItem(taskToDoList);
//JSON.parse(localStorage.getItem(taskToDoList));
//console.log(taskToDoList);
//};
