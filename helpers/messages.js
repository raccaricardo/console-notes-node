//messages to print in console
require('colors');


//main function
const showStateTaskList = (arrTasks, section) => {

    console.clear();
    switch (section) {
        case 1: //show all tasks
            genericHeaderTaskList();
            printTasks(arrTasks, 1);
            break;
        case 2: //show completed tasks
            headerTaskList(true);
            printTasks(arrTasks, 2);

            break;
        case 3: //show incompleted tasks
            headerTaskList(false);
            printTasks(arrTasks, 3);
            break;

        default:
            break;
    }
}

const genericHeaderTaskList = () => {
    console.log(`==================================================`.green);
    console.log('            Listado de tareas                     '.bgCyan);
    console.log(`==================================================\n`.green);
}

const headerTaskList = ( isCompleted = false ) => {
    console.log(`==================================================`.green);
    console.log(`            Listado de tareas ${(isCompleted) ? 'completas' : 'pendientes'}           `.bgCyan);
    console.log(`==================================================\n`.green);
}

const printTasks = (arrTasks = [], typeList = 1) => {
    // typeList: 1. all tasks, 2. completed task, 3. pending tasks
    let index = 1;
    for (task in arrTasks) {
        if (typeList == 1) {
            const text = 
            ` ${index.toString().green} ${arrTasks[task].description} :: ${(arrTasks[task].is_completed) 
                                                                                        ? 'Completado'.green 
                                                                                        : 'Pendiente'.red} `;
            console.log(text);
        }
        if (typeList == 2) {
            const txt = ` ${index.toString().green} ${arrTasks[task].description} :: ${'Completado'.green} `;
            (arrTasks[task].is_completed) && console.log(txt);
        }
        if (typeList == 3) {

            const text = ` ${index.toString().green} ${arrTasks[task].description} :: ${'Pendiente'.red} `;
            (!arrTasks[task].is_completed) && console.log(text);

        }
        index++;

    }
}

module.exports = {

    showStateTaskList,

}