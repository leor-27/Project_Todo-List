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
  edit({ title, description, dueDate, priority, completed }) {
    if (title !== undefined) {
      this.title = title;
    }
    if (description !== undefined) {
      this.description = description;
    }
    if (dueDate !== undefined) {
      this.dueDate = dueDate;
    }
    if (priority !== undefined) {
      this.priority = priority;
    }
    if (completed !== undefined) {
      this.completed = completed;
    }
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
  editTodo(ID, newData) {
    const todo = this.todos.find((todo) => todo.ID === ID);
    if (todo) {
      todo.edit(newData);
    }
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

const myTodos = myProject.getTodos();
const targetID = myTodos[0].ID;

myProject.editTodo(targetID, {
  title: "Updated laundry task",
  priority: "high",
  completed: false,
});

myProject.getTodos().forEach((todo) => {
  console.log(todo);
});
