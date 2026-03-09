// =============================================
// script.js — controls how your page behaves
// JavaScript makes things interactive!
// =============================================

// This function runs when you click the "Add" button
function addTodo() {
  // Get what the user typed in the input box
  var input = document.getElementById("todo-input");
  var text = input.value.trim(); // .trim() removes extra spaces

  // Don't add an empty task
  if (text === "") {
    return;
  }

  // Get the list element where tasks will appear
  var list = document.getElementById("todo-list");

  // Create a new list item
  var li = document.createElement("li");

  // Create the text part of the task (clicking it marks it done)
  var span = document.createElement("span");
  span.textContent = text;
  span.onclick = function () {
    li.classList.toggle("done"); // toggles the strikethrough style
  };

  // Create a delete button for each task
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    list.removeChild(li); // removes the task from the list
  };

  // Put it all together and add to the list
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // Clear the input box so the user can type a new task
  input.value = "";
  input.focus(); // move the cursor back to the input box
}

// This lets you press Enter instead of clicking "Add"
document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("todo-input");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });
});
