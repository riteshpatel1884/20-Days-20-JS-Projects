// const btn = document.getElementById("btn");
// let taskCount = 0;
// btn.addEventListener("click", function () {
//   const taskValue = document.getElementById("task").value;
//   const taskContainer = document.getElementById("taskContainer");

//   if (!taskValue) {
//     alert("Please enter a task");
//     return;
//   }

//   // 1: Pahle task container create kro
//   const taskParent = document.createElement("div");
//   taskParent.classList.add("task-item"); // This adds a CSS class to that div. <div class="task-item"></div>
//   taskCount++;

//   // 2: Create text
//   const taskText = document.createElement("h3");
//    taskText.innerText = taskCount + ". " + taskValue;

//   // 3: Create delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerText = "Delete";
//   deleteBtn.classList.add("delete-btn");

//   // 4: Delete logic
//   deleteBtn.addEventListener("click", function () {
//     taskParent.remove();
//   });

//   // Step 5: Append elements
//   taskContainer.appendChild(taskParent);
//   taskParent.appendChild(taskText);
//   taskParent.appendChild(deleteBtn);

//   // Step 6: Clear input
//   taskValue.value = "";

// });

// How it will look like in html code
{
  /* <div id="taskContainer">
  <div class="task-item">
    <h3>DSA</h3>
    <button class="delete-btn">Delete</button>
  </div>
</div>; */
}

// Now checking if any task already exists

const btn = document.getElementById("btn");
const taskInput = document.getElementById("task");
const taskContainer = document.getElementById("taskContainer");

let taskCount = 0;
let allTask = [];

btn.addEventListener("click", function () {
  const taskValue = taskInput.value.trim();
  const taskValueLowerCase = taskValue.toLowerCase();

  if (!taskValue) {
    alert("Please enter a task");
    return;
  }

  // Checking if task already exists
  if (allTask.includes(taskValueLowerCase)) {
    alert("Duplicate task found! Please enter a unique task");
    return;
  }

  // Increase counter only after validation to add a serial number before each task
  taskCount++;

  const taskParent = document.createElement("div");
  taskParent.classList.add("task-item");

  const taskText = document.createElement("h3");
  taskText.innerText = taskCount + ". " + taskValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    taskParent.remove();

    // Remove from array
    allTask = allTask.filter((task) => task !== taskValueLowerCase);
    // .filter() goes through the array and keeps only the items that match a condition. Because .filter() does not change the original array. It returns a new one. So we replace the old array with the new filtered array.
    // Overall: Go through all tasks. Keep only those that are not equal to the deleted task. Update the array with the remaining tasks

  });

  taskParent.appendChild(taskText);
  taskParent.appendChild(deleteBtn);
  taskContainer.appendChild(taskParent);

  allTask.push(taskValueLowerCase);

  taskInput.value = "";
});
