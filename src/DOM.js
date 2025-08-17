import { myTodos } from "./todo";

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
