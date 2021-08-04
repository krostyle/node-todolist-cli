require('colors');
const { inquirerMenu, pausa, readInput } = require('./helpers/inquirer');
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
        }



        saveTask(todos.listTasks)
        await pausa();



    } while (opt !== '0');

}

main();