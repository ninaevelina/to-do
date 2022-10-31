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

// Todo - create list for the form, input, current tasks and completed

// Function

// Toggle-function
