import { v4 as uuidv4 } from "uuid";

export class Todo {
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

export function createTodo(title, description, dueDate, priority, completed) {
  return new Todo(title, description, dueDate, priority, completed);
}
