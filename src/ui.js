import { createTodo } from "./todo";
import { compareAsc, constructFrom, format } from "date-fns";
import { createProject } from "./project";
import { PROJECTS } from "./project";

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
  const projectName = document.querySelector("#projects-dropdown");

  const confirmBtn = document.getElementById("confirm");
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleValue.value;
    const description = descriptionValue.value;
    const dueDate = dueDateValue.value;
    const priority = priorityValue.value;
    const projectLabel = projectName.value;

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

export function showProjectDialog() {
  const addProjectDialog = document.getElementById("openProjectDialog");
  const projectDialog = document.getElementById("addProjectDialog");

  addProjectDialog.addEventListener("click", () => {
    projectDialog.showModal();
  });

  const projectName = document.getElementById("projectName");
  const confirmProjectBtn = document.getElementById("projectConfirmBtn");
  confirmProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const projectNameValue = projectName.value.trim();

    if (!projectNameValue) {
      alert("Project name cannot be empty");
      return;
    }
    createProject(projectNameValue);

    addProjectToDropdown();
    projectDialog.close();
  });
}

export function addProjectToDropdown() {
  const projectDropdown = document.getElementById("projects-dropdown");
  projectDropdown.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.value = "";
  defaultOption.textContent = "Select a Project";
  projectDropdown.appendChild(defaultOption);

  PROJECTS.forEach((element) => {
    const name = element.getName();
    if (!name) return;

    const option = document.createElement("option");

    option.textContent = name;
    option.value = name;
    option.className = "project-label";

    projectDropdown.appendChild(option);
  });
}
