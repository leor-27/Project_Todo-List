import { format } from "date-fns";
import { createTodo, myTodos } from "./todo";

const openTaskDialog = document.getElementById("open-task-dialog");
const taskDialog = document.getElementById("task-dialog");
const cancelBtn = document.querySelector(".cancel-btn");

export function renderTaskDialog(onConfirm) {
  openTaskDialog.addEventListener("click", () => {
    taskDialog.showModal();
  });

  cancelBtn.addEventListener("click", () => {
    taskDialog.close();
  });

  // Input form
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const duedateInput = document.getElementById("dueDate");
  const priorityInput = document.getElementById("priority-dropdown");

  // Confirm Button
  const confirmBtn = document.getElementById("confirm");
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = duedateInput.value;
    const priority = priorityInput.value;
    let isCompleted = true;

    const formattedDate = format(new Date(dueDate), "PPp");

    if (onConfirm) {
      onConfirm({ title, description, formattedDate, priority, isCompleted });
    }

    titleInput.value = "";
    descriptionInput.value = "";
    duedateInput.value = "";
    priorityInput.value = "low";
    taskDialog.close();
  });
}
