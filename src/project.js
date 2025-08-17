class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
    removeTodo(todoId) {
        const index = this.todos.findIndex(todo => todo.taskId === todoId);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
    getTodos() {
        return this.todos;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

}