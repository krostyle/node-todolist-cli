const Todo = require('./Todo');

class Todos {


    constructor() {
        this.listTodos = {};
    }

    createTodo(description = "") {
        const todo = new Todo(description);
        this.listTodos[todo.id] = todo
    }

    loadTasks(todos) {
        todos.forEach(todo => {
            this.listTodos[todo.id] = todo;
        })
    }

    get listTasks() {
        const listTodos = [];
        Object.keys(this.listTodos).forEach(id => {
            listTodos.push(this.listTodos[id]);
        })
        return listTodos;
    }

    showTasks() {
        console.log()
        this.listTasks.forEach((todo, i) => {
            const index = `${i+1}`.green;
            const { description, completedDate } = todo;
            const status = todo.completed ? "Completado".green : "Pendiente".red;
            console.log(`${index} ${description} :: ${status}`);
        })
    }
}


module.exports = Todos;