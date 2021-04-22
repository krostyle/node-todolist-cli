require('colors');
const { inquirerMenu, pausa, readInput } = require('./helpers/inquirer');
const Tareas = require('./classes/Todos')

const main = async() => {
    let opt = ''
    const todos = new Todos();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput('Descripción:')
                todos.createTodo(description);
                break;


        }
        await pausa();


    } while (opt !== '0');

}

main();