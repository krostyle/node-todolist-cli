import { Todo } from './Todo';

export class Todos {
    constructor() {
        listTodos = {};
    }

    createTodo(description) {
        const todo = new Todo(description);
        this.listTodos[todo.id] = tarea
    }
}