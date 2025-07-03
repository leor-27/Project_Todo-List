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

  rename(newName) {
    this.name = newName;
  }

  addTodo(todo) {
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

export class ProjectManager {
  constructor() {
    this.projects = [];
  }

  createProject(name) {
    const project = new Project(name);
    this.projects.push(project);
    return project;
  }

  getAllProject() {
    return this.projects;
  }

  findProjectByName(name) {
    return this.projects.find((p) => p.name === name);
  }
}

const PROJECT_MANAGER = new ProjectManager();

export function createProject(name) {
  return PROJECT_MANAGER.createProject(name);
}

export function getAllProject() {
  return PROJECT_MANAGER.getAllProject();
}
