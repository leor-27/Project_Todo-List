import "./styles.css";

class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const TODOS = []; // Storage

function createTodo() {
  let title = "Feed the Dog";
  let description = "The dog food is in the fridge";
  let dueDate = "12:00 pm";
  let priority = "asap";

  let todo = new Todos(title, description, dueDate, priority);
  TODOS.push(todo);
}

createTodo();

createTodo();
createTodo();
createTodo();
console.log(TODOS);
