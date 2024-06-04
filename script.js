let tasks = [];
let completedTasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        displayTasks();
        taskInput.value = "";
    }
}

function completeTask(index) {
    let completedTask = tasks.splice(index, 1);
    completedTasks.push(completedTask);
    displayTasks();
    displayCompletedTasks();
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            completeTask(index);
        };
        li.appendChild(completeButton);
        taskList.appendChild(li);
    });
}

function displayCompletedTasks() {
    let completedList = document.getElementById("completedList");
    completedList.innerHTML = "";
    completedTasks.forEach(completedTask => {
        let li = document.createElement("li");
        li.textContent = completedTask;
        li.classList.add("completed");
        completedList.appendChild(li);
    });
}
