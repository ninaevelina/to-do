// Variables

let taskToDoList = [];

let taskForm = document.getElementById("taskForm"); // Variable for form-element
let taskDate = document.getElementById("taskDate"); // Variable for input element type date
let taskInput = document.getElementById("taskInput"); // Variable for input-element type text
let currentTask = document.getElementById("taskListCurrent"); // Variable for my current tasks ul-element
let taskComplete = document.getElementById("completedTask"); // Variable for my completed tasks ul-element

// Class for tasks, constructor connected to the two inputs - date and text (text is taskdetails property and parameter)

class Task {
  constructor(date, taskdetails) {
    this.date = date;
    this.taskdetails = taskdetails;
    //lägg till en funktion för om task är completed true/false
  }
}

// Create objects based on the above class

let portfolio = new Task("2022-11-05", "Update portfolio");
let coffee = new Task("2022-11-06", "Buy a coffee-thermos");
let drive = new Task("2024-01-01", "Get your driver's license");

taskForm.addEventListener("submit", addTask); // add eventlistener for the form, when user input is submitted in the form, call the function (which entails to add task to "my current tasks")

function addTask(e) {
  // e is object which contains information about the event
  let newTask = new Task();
  newTask.date = taskDate.value;
  newTask.taskdetails = taskInput.value;
  taskToDoList.push(newTask);
}

// Todo - create list for the form, input, current tasks and completed

// Function

// Toggle-function
