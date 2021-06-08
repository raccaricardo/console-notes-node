//messages to print in console
require('colors');

const taskList = (arrTasks) => {
    console.clear();
    console.log(`==================================================`.green);
    console.log('            Listado de tareas                     '.bgCyan);
    console.log(`==================================================\n`.green);
    printTasks(arrTasks, 1);

}

const showStateTaskList = (arrTasks, section) => {

    switch (section) {

        case 1:
            taskList(arrTasks);
            break;
        case 3:
            stateTaskList(arrTasks, true);
            break;
        case 4:
            stateTaskList(arrTasks, false);
            break;
        default:
            break;
    }
}

const stateTaskList = (arrTasks = [], isCompleted = false) => {

    console.clear();

    console.log(`==================================================`.green);
    console.log(`            Listado de tareas ${(isCompleted) ? 'completas' : 'pendientes'}           `.bgCyan);
    console.log(`==================================================\n`.green);
    (isCompleted) ? printTasks(arrTasks, 2) : printTasks(arrTasks, 3);

}
//1. all tasks, 2. completed task, 3. pending tasks
const printTasks = ( arrTasks = [], typeList = 1 ) => {
    let index = 1;
    for (task in arrTasks) {
        if(typeList == 1){
            const text = ` ${index.toString().green} ${arrTasks[task].description} :: ${ ( arrTasks[task].is_completed ) ? 'Completado'.green : 'Pendiente'.red} `;
            console.log(text);
        }
        if(typeList == 2){
            ( arrTasks[task].is_completed ) && console.log(` ${index.toString().green} ${arrTasks[task].description} :: ${ 'Completado'.green } ` );
        }
        if(typeList == 3){
            const text = ` ${index.toString().green} ${arrTasks[task].description} :: ${'Pendiente'.red} `;
            ( !arrTasks[task].is_completed ) && console.log(text);
                 
            
        }
        index++;
        
    }
}

module.exports = {

    taskList,
    showStateTaskList,

}