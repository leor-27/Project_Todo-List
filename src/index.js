import "./styles.css";

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
}

class Todos {
  constructor(title, description, dueDate, priority, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}

const TODOS = [];
const PROJECTS = [];

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

function updateTodo(
  index,
  newTitle,
  newDescription,
  newDueDate,
  newPriority,
  newCompleted = false
) {
  let todo = TODOS[index];
  todo.title = newTitle;
  todo.description = newDescription;
  todo.dueDate = newDueDate;
  todo.priority = newPriority;
}

function updateCompletedTodo() {
  Todos.completed = true;
}

updateTodo(2, "Jerico", "jerico", "hejsj", "jajsaj", true);

function deleteTodo(title) {
  const index = TODOS.findLastIndex((todos) => todos.title === title);
  TODOS.prototype.splice(index);
}

deleteTodo("Jerico");
console.log(TODOS);
