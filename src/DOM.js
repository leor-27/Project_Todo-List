import { myTodos } from "./todo";

const taskContainer = document.querySelector(".task-content");

export function renderTasks() {
  taskContainer.innerHTML = "";

  myTodos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "task-container";

    const task = document.createElement("p");
    task.className = "task";
    task.textContent = `${todo.title} ${todo.description} ${todo.duedate} ${todo.priority}`;

    const completedBtn = document.createElement("input");
    completedBtn.setAttribute("type", "checkbox");
    completedBtn.className = "toggle-completed";

    const deleteTask = document.createElement("button");
    deleteTask.className = "deleteTask-btn";
    deleteTask.textContent = "X";

    div.appendChild(task);
    div.appendChild(completedBtn);
    div.appendChild(deleteTask);
    taskContainer.appendChild(div);
  });
}
