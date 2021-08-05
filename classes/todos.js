const Todo = require("./Todo");

class Todos {
    constructor() {
        this.listTodos = {};
    }

    createTodo(description = "") {
        const todo = new Todo(description);
        this.listTodos[todo.id] = todo;
    }

    loadTasks(todos) {
        todos.forEach((todo) => {
            this.listTodos[todo.id] = todo;
        });
    }

    get listTasks() {
        const listTodosTemp = [];
        Object.keys(this.listTodos).forEach((id) => {
            listTodosTemp.push(this.listTodos[id]);
        });
        return listTodosTemp;
    }


    showTasks() {
        console.log();
        this.listTasks.forEach((todo, i) => {
            const index = `${i + 1}`.green;
            const { description, completedDate } = todo;
            const status = completedDate ? "Completado".green : "Pendiente".red;
            console.log(`${index+'.'.green} ${description} :: ${status}`);
        });
    }


    listCompletedPendingTask(completed) {
        console.log();
        let index = 0;
        this.listTasks.forEach((todo, i) => {
            const { description, completedDate } = todo;
            const status = todo.completed ? "Completado".green : "Pendiente".red;
            if (completed) {
                if (completedDate) {
                    index++;
                    console.log(`${(index+'.').green}  ${description} :: ${completedDate.green}`);
                } else {
                    // console.log('No hay tareas completadas');
                }
            } else {
                if (!completedDate) {
                    index++;
                    console.log(`${(index+'.').green}  ${description} :: ${status}`);
                } else {
                    // console.log('No hay tareas incompletas');
                }
            }
        });
    }

    deleteTask(id) {
        if (this.listTodos[id]) {
            delete this.listTodos[id];
        }

    }

    toggleCompleted(ids) {
        ids.forEach((id) => {
            const tarea = this.listTodos[id];
            if (!tarea.completedDate) {
                tarea.completedDate = new Date().toISOString();
            }
        });

        this.listTasks.forEach((tarea) => {
            if (!ids.includes(tarea.id)) {
                this.listTodos[tarea.id].completedDate = null;
            }
        });
    }
}
module.exports = Todos;