
import { renderTaskDialog } from "./userInputs";
import { myTodos, createTodo } from "./todo";

const taskContainer = document.querySelector(".task-content");

export function renderTasks() {
  taskContainer.innerHTML = "";

  myTodos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "task-container";

    const task = document.createElement("p");
    task.className = "task";
    task.textContent = `${todo.title} ${todo.description} ${todo.duedate} ${todo.priority} ${todo.isCompleted}`;

    const completedBtn = document.createElement("input");
    completedBtn.setAttribute("type", "checkbox");
    completedBtn.className = "toggle-completed";
    completedBtn.checked = todo.isCompleted;
    completedBtn.addEventListener('change', () => {
      todo.markAsCompleted();
      renderTasks();
    });

    changeStyle(completedBtn, todo.isCompleted, task);

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.className = "deleteTask-btn";
    deleteTaskBtn.textContent = "X";
    deleteTaskBtn.addEventListener('click', () => {
      deleteTask(todo.taskId);
    })


    div.appendChild(completedBtn);
    div.appendChild(task);
    div.appendChild(deleteTaskBtn);
    taskContainer.appendChild(div);
  });
}

function deleteTask(taskId) {
  const index = myTodos.findIndex(todo => todo.taskId === taskId);
  if (index !== -1) {
    myTodos.splice(index, 1);
    renderTasks();
  }
}
function changeStyle(completedBtn, isCompleted, task) {
  if (isCompleted) {

    task.style.textDecoration = "line-through";
  } else {
    task.style.textDecoration = "none";
  }
}

export function renderProjects() {
  const projectList = document.querySelector(".project-list");
  const projectDialog = document.getElementById("project-dialog");
  const openProjectDialog = document.getElementById("open-project-dialog");

  const confirmProjectBtn = document.getElementById("confirm-project");
  confirmProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectNameInput = document.getElementById("project-title");
    const projectName = projectNameInput.value;

    if (projectName) {
      const projectItem = document.createElement("li");
      projectItem.textContent = projectName;




      projectList.appendChild(projectItem);
      projectNameInput.value = "";
      addTodoToProject(projectName);
      projectDialog.close();
    }
  })

  openProjectDialog.addEventListener('click', () => {
    projectDialog.showModal();
  })

  const addTodoBtn = document.querySelector(".add-todo-btn");
  addTodoBtn.addEventListener('click', () => {
    renderTaskDialog(({ title, description, formattedDate, priority, isCompleted }) => {
      const todo = createTodo(
        title,
        description,
        formattedDate,
        priority,
        isCompleted
      );

      renderTasks();
    });
  })
}

function addTodoToProject(projectName) {
  const projectItem = document.querySelector(".project-list");
  if (projectItem) {
    const addTodo = document.createElement("button");
    addTodo.textContent = "+";
    addTodo.className = "add-todo-btn";
    projectItem.appendChild(addTodo);

    const addTodoBtn = document.querySelector(".add-todo-btn");
    addTodoBtn.addEventListener('click', () => {
      renderTaskDialog(({ title, description, formattedDate, priority, isCompleted }) => {
        const todo = createTodo(
          title,
          description,
          formattedDate,
          priority,
          isCompleted
        );
        renderTasks();
      });
    });
  }
}



