import { v4 as uuidv4 } from "uuid";

export class Todo {
  constructor(
    title,
    description = "",
    dueDate = null,
    priority = "low",
    completed = false,
    idGenerator = uuidv4
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    this.ID = idGenerator();
  }

  markAsCompleted() {
    this.completed = !this.completed;
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
