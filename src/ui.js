import { createTodo } from "./logic/todo";
import { compareAsc, constructFrom, format } from "date-fns";
import { createProject, getAllProject } from "./logic/project";
import { handleNewTodo } from "./controller";
import { ProjectManager } from "./logic/project";

const PROJECT_MANAGER = new ProjectManager();

const DOM = {
  taskDialog: document.querySelector("#AddTaskDialog"),
  title: document.querySelector("#title"),
  description: document.querySelector("#description"),
  dueDate: document.querySelector("#dueDate"),
  priority: document.querySelector("#priority-dropdown"),
  projectName: document.querySelector("#projects-dropdown"),
  confirmTodoBtn: document.querySelector("#confirm"),
  projectDialog: document.querySelector("#addProjectDialog"),
  openProjectDialogBtn: document.querySelector("#openProjectDialog"),
  confirmProjectBtn: document.querySelector("#projectConfirmBtn"),
  projectNameInput: document.querySelector("#projectName"),
  container: document.querySelector("#app"),
  cancelTaskBtn: document.querySelector(".cancel-btn"),
  openTaskDialog: document.querySelector("#openTaskDialog"),
};

export function createWindow() {
  // Show modal

  DOM.openTaskDialog.addEventListener("click", () => {
    DOM.taskDialog.showModal();
  });

  DOM.cancelTaskBtn.addEventListener("click", () => {
    DOM.taskDialog.close();
  });

  DOM.confirmTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = DOM.title.value;
    const description = DOM.description.value;
    const dueDate = DOM.dueDate.value;
    const priority = DOM.priority.value;
    const projectName = DOM.projectName.value; // <-- add this line

    const formattedDate = format(new Date(dueDate), "PPp");

    const div = document.createElement("div");
    div.className = "task-container";
    const task = document.createElement("p");
    task.className = "task";

    const todo = handleNewTodo({
      title,
      description,
      dueDate,
      priority,
      projectName,
    });

    div.appendChild(task);
    DOM.container.appendChild(div);

    DOM.title.value = "";
    DOM.description.value = "";
    DOM.dueDate.value = "";
    DOM.priority.value = priority;

    DOM.taskDialog.close();
  });
}

export function showProjectDialog() {
  DOM.projectDialog.addEventListener("click", () => {
    DOM.projectDialog.showModal();
  });

  DOM.confirmProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const projectNameValue = DOM.projectNameInput.value.trim();

    if (!projectNameValue) {
      alert("Project name cannot be empty");
      return;
    }
    createProject(projectNameValue);

    addProjectToDropdown();
    DOM.projectDialog.close();
  });
}

export function addProjectToDropdown() {
  const projectDropdown = DOM.projectName;
  projectDropdown.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.value = "";
  defaultOption.textContent = "Select a Project";
  projectDropdown.appendChild(defaultOption);

  getAllProject().forEach((element) => {
    const name = element.getName();
    if (!name) return;

    const option = document.createElement("option");
    option.textContent = name;
    option.value = name;
    option.className = "project-label";
    projectDropdown.appendChild(option);
  });
}

function renderTodosForProject(project) {
  const container = document.querySelector("#app");
  container.innerHTML = "";

  project.getTodos().forEach((todo) => {
    const div = document.createElement("div");
    div.className = "task-container";

    const task = document.createElement("p");
    task.className = "task";
    task.textContent = `${todo.title} ${todo.description} ${todo.dueDate} ${todo.priority} ${todo.completed}`;
    div.appendChild(task);
    container.appendChild(div);
  });
}
