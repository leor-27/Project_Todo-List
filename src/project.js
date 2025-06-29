import { createTodo } from "./todo";
export class Project {
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

const PROJECTS = [];

export function createProject() {
  let projectName = "New Project";
  PROJECTS.push(new Project(projectName));
  return PROJECTS[PROJECTS.length - 1];
}
