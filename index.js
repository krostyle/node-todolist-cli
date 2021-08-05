require('colors');
const { inquirerMenu, pausa, readInput, listDeleteTasks, confirm, showCheckList } = require('./helpers/inquirer');
//const Todo = require('./classes/Todo')
const Todos = require('./classes/Todos');
const { saveTask, readDB } = require('./helpers/db');
const main = async() => {
    let opt = ''
    const todos = new Todos();
    const todoDB = readDB();

    if (todoDB) {
        todos.loadTasks(todoDB)
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput('Descripción de la tarea:')
                todos.createTodo(description);
                break;
            case '2':
                todos.showTasks();
                break;
            case '3':
                todos.listCompletedPendingTask(true);
                break;
            case '4':
                todos.listCompletedPendingTask(false);
                break;
            case '5':
                const ids = await showCheckList(todos.listTasks)
                todos.toggleCompleted(ids)
                break;
            case '6':
                const id = await listDeleteTasks(todos.listTasks);
                if (id !== '0') {
                    const deleteTask = await confirm('¿Esta seguro que desea eliminar la tarea?');
                    if (deleteTask) {
                        todos.deleteTask(id)
                        console.log(`La tarea con id ${id} ha sido eliminada.`);
                    }
                }
                break;
        }



        saveTask(todos.listTasks)
        await pausa();



    } while (opt !== '0');

}

main();