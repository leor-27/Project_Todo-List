import { createTodo } from "./todo";
import { compareAsc, format } from "date-fns";

export function createWindow() {
  const container = document.createElement("div");
  container.className = "container";

  const inputTask = document.createElement("input");
  inputTask.setAttribute("type", "text");

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "datetime-local");

  const addTaskBtn = document.createElement("button");
  addTaskBtn.className = "addTask";
  addTaskBtn.textContent = "Add task";

  container.appendChild(inputTask);
  container.appendChild(inputDate);
  container.appendChild(addTaskBtn);

  addTaskBtn.addEventListener("click", () => {
    const inputValue = inputTask.value;
    const rawDate = inputDate.value;
    const formattedDate = format(new Date(rawDate), "PPp");

    const div = document.createElement("div");
    div.className = "task-container";
    const task = document.createElement("p");
    task.className = "task";

    const todo = createTodo(inputValue, "Jerico", formattedDate, "any", false);
    // task.textContent = JSON.stringify(todo, null, 2);
    task.textContent = `${todo.title} ${todo.description} ${todo.dueDate} ${todo.priority} ${todo.completed}`;

    div.appendChild(task);
    container.appendChild(div);

    inputTask.value = "";
    inputDate.value = "";
  });

  document.body.appendChild(container);
}
