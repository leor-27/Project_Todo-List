import { v4 as uuidv4 } from 'uuid';
export class Todo {
  constructor(title, description, duedate, priority, isCompleted, taskId) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.isCompleted = false;
    this.taskId = uuidv4();
  }

  markAsCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  getInfo() {
    return (
      this.title +
      " " +
      this.description +
      " " +
      this.duedate +
      " " +
      this.priority +
      " " +
      this.isCompleted
    );
  }
}

export const myTodos = [];

export function createTodo(title, description, duedate, priority, isCompleted, taskId) {
  const newTodo = new Todo(title, description, duedate, priority, isCompleted, taskId);
  myTodos.push(newTodo);
}
