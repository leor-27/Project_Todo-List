import { createTodo } from "./todo";
import { compareAsc, constructFrom, format } from "date-fns";

export function createWindow() {
  const container = document.querySelector("#app");

  // Show modal
  const openTaskDialog = document.querySelector("#openTaskDialog");
  const TaskDialog = document.querySelector("#AddTaskDialog");

  openTaskDialog.addEventListener("click", () => {
    TaskDialog.showModal();
  });

  const cancelBtn = document.querySelector(".cancel-btn");
  cancelBtn.addEventListener("click", () => {
    TaskDialog.close();
  });

  const titleValue = document.querySelector("#title");
  const descriptionValue = document.querySelector("#description");
  const dueDateValue = document.querySelector("#dueDate");
  const priorityValue = document.querySelector("#priority-dropdown");
  const projectName = document.querySelector("#project-dropdown");

  const confirmBtn = document.getElementById("confirm");
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleValue.value;
    const description = descriptionValue.value;
    const dueDate = dueDateValue.value;
    const priority = priorityValue.value;
    // const projectLabel = projectName.value;

    const formattedDate = format(new Date(dueDate), "PPp");

    const div = document.createElement("div");
    div.className = "task-container";
    const task = document.createElement("p");
    task.className = "task";

    const todo = createTodo(title, description, formattedDate, priority, false);
    // task.textContent = JSON.stringify(todo, null, 2);
    task.textContent = `${todo.title} ${todo.description} ${todo.dueDate} ${todo.priority} ${todo.completed}`;

    div.appendChild(task);
    container.appendChild(div);

    titleValue.value = "";
    descriptionValue.value = "";
    dueDateValue.value = "";
    priorityValue.value = priority;
    TaskDialog.close();
  });
}

function showProjectDialog() {}
