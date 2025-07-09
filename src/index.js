import "./styles.css";
import { Todo, createTodo, myTodos, test } from "./todo";
import { renderTaskDialog, getUserInputValue } from "./userInputs";

function init() {
  renderTaskDialog(({ title, description, formattedDate, priority }) => {
    const todo = createTodo(title, description, formattedDate, priority);
    console.log(myTodos);
  });
}

init();
