import "./styles.css";

class Todo {
  constructor(title, description, dueDate, priority, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
  toggleCompleted() {
    this.completed = true;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  getName() {
    return this.name;
  }
  getTodos() {
    return this.todos;
  }
  addTodo(title, description, dueDate, priority, completed) {
    const todo = createTodo(title, description, dueDate, priority, completed);
    this.todos.push(todo);
  }
}

const defaultProject = new Project("Default");

function createTodo(title, description, dueDate, priority, completed) {
  return new Todo(title, description, dueDate, priority, completed);
}

const newProject = function createProject() {
  let projectName = "project1";
  return new Project(projectName);
};

const myProject = newProject();
myProject.addTodo("Do laundry", "Use gentle cycle", "6/30", "medium");
myProject.getTodos()[0].toggleCompleted();

console.log(myProject.getTodos());
