export class Todo {
  constructor(title, description, duedate, priority) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.isCompleted = false;
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

export function createTodo(title, description, duedate, priority, isCompleted) {
  const newTodo = new Todo(title, description, duedate, priority, isCompleted);
  myTodos.push(newTodo);
}
