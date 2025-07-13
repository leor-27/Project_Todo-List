import "./styles.css";
import { Todo, createTodo, myTodos, test } from "./todo";
import { renderTaskDialog, getUserInputValue } from "./userInputs";
import { renderTasks } from "./DOM";

function init() {
  renderTaskDialog(
    ({ title, description, formattedDate, priority, isCompleted }) => {
      const todo = createTodo(
        title,
        description,
        formattedDate,
        priority,
        isCompleted
      );
      renderTasks();
    }
  );
}

init();
