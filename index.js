const inputBox = document.getElementById("task");
const taskContainer = document.getElementById("task-list");

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task to add it!");
    }
    else {
        let li = document.createElement("LI");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    storeTaskInfo();
}
taskContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle ("checked");
        storeTaskInfo();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeTaskInfo();
    }
})
function storeTaskInfo() {
    localStorage.setItem("data", taskContainer.innerHTML);
}
function loadTaskInfo() {
    taskContainer.innerHTML = localStorage.getItem("data");
}
loadTaskInfo();