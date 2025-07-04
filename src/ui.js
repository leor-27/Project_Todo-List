import { createTodo } from "./logic/todo";
import { compareAsc, constructFrom, format } from "date-fns";
import { ProjectManager } from "./logic/project";
import { Project } from "./logic/project";
import {
  findProjectByName,
  createProject,
  getAllProject,
} from "./logic/project";

const DOM = {
  taskDialog: document.querySelector("#AddTaskDialog"),
  title: document.querySelector("#title"),
  description: document.querySelector("#description"),
  dueDate: document.querySelector("#dueDate"),
  priority: document.querySelector("#priority-dropdown"),
  projectDropdown: document.querySelector("#projects-dropdown"),
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
  const container = DOM.container;

  // Show modal
  const openTaskDialog = DOM.openTaskDialog;
  const TaskDialog = DOM.taskDialog;

  openTaskDialog.addEventListener("click", () => {
    TaskDialog.showModal();
  });

  const cancelBtn = DOM.cancelTaskBtn;
  cancelBtn.addEventListener("click", () => {
    TaskDialog.close();
  });

  const titleValue = DOM.title;
  const descriptionValue = DOM.description;
  const dueDateValue = DOM.dueDate;
  const priorityValue = DOM.priority;
  const projectName = DOM.projectDropdown;

  const confirmBtn = DOM.confirmTodoBtn;
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleValue.value;
    const description = descriptionValue.value;
    const dueDate = dueDateValue.value;
    const priority = priorityValue.value;
    const projectLabel = projectName.value;

    const formattedDate = format(new Date(dueDate), "PPp");

    // const div = document.createElement("div");
    // div.className = "task-container";
    // const task = document.createElement("p");
    // task.className = "task";

    // // task.textContent = JSON.stringify(todo, null, 2);
    // task.textContent = `${todo.title} ${todo.description} ${todo.dueDate} ${todo.priority} ${todo.completed}`;

    // div.appendChild(task);
    // container.appendChild(div);
    const todo = createTodo(title, description, formattedDate, priority, false);

    const project = findProjectByName(projectLabel);
    project.addTodo(todo);

    renderTodosForProject(project.getTodos());

    titleValue.value = "";
    descriptionValue.value = "";
    dueDateValue.value = "";
    priorityValue.value = priority;
    TaskDialog.close();
  });
}

export function showProjectDialog() {
  const addProjectDialog = DOM.openProjectDialogBtn;
  const projectDialog = DOM.projectDialog;

  addProjectDialog.addEventListener("click", () => {
    projectDialog.showModal();
  });

  const projectName = DOM.projectNameInput;
  const confirmProjectBtn = DOM.confirmProjectBtn;
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
  const projectDropdown = DOM.projectDropdown;
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
  const container = DOM.container;

  project.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "task-container";

    const task = document.createElement("p");
    task.className = "task";
    task.textContent = `${todo.title} ${todo.description} ${todo.dueDate} ${todo.priority}`;
    const completedBtn = document.createElement("input");
    completedBtn.setAttribute("type", "checkbox");
    completedBtn.className = "toggle-completed";
    const deleteTask = document.createElement("button");
    deleteTask.className = "deleteTask-btn";
    deleteTask.textContent = "X";

    div.appendChild(task);
    div.appendChild(completedBtn);
    div.appendChild(deleteTask);
    container.appendChild(div);
  });
}
