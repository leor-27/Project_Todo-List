import "./styles.css";
import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(title, description, dueDate, priority, completed = false, ID) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    this.ID = uuidv4();
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
  deleteTodo(ID) {
    this.todos = this.todos.filter((todo) => todo.ID !== ID);
  }
}

function createTodo(title, description, dueDate, priority, completed) {
  return new Todo(title, description, dueDate, priority, completed);
}

const newProject = function createProject() {
  let projectName = "project1";
  return new Project(projectName);
};

const myProject = newProject();
myProject.addTodo("Do laundry", "Use gentle cycle", "6/30", "medium");
myProject.addTodo("Do Hello", "Use gentle cycle", "6/30", "medium");
myProject.addTodo("Do laajajry", "Use gentle cycle", "6/30", "medium");
myProject.getTodos()[0].toggleCompleted();

const todoID = myProject.getTodos()[0].ID;
myProject.deleteTodo(todoID);

myProject.getTodos().forEach((todo) => {
  console.log(todo);
});
