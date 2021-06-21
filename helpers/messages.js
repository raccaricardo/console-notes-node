//messages to print in console
require('colors');

//to showCompleteTaskList
const showAllTaskList = (arrTasks) => {
    console.clear();
    genericHeaderTaskList();
    printAllTasks( arrTasks );
}

//show list of show list of completed or incomplete tasks
const showStateTaskList = ( arrTasks = [], showTasksCompleted = true ) => {

    console.clear();
    //show completed tasks
    headerTaskList( showTasksCompleted ); 
    let index = 1;
    const tasks = arrTasks.filter( task => task.is_completed == showTasksCompleted);
    printTasks( tasks, showTasksCompleted );
  
}

const genericHeaderTaskList = () => {
    console.log(`==================================================`.green);
    console.log('            Listado de tareas                     '.bgCyan);
    console.log(`==================================================\n`.green);
}

const headerTaskList = ( headerOfCompleted = true ) => {
    console.log(`==================================================`.green);
    console.log(`            Listado de tareas ${( headerOfCompleted ) ? 'completas' : 'pendientes'}           `.bgCyan);
    console.log(`==================================================\n`.green);
}
const printAllTasks = (arrTasks = [], index = 1) => {

    if( arrTasks == [] ){
        const text = ` ${ '0. '.green } no se encuentran tareas registradas`;
        console.log(text);        
    }else{

    for (task in arrTasks) {
        
        const text = 
        ` ${index.toString().green} ${arrTasks[task].description} :: ${(arrTasks[task].is_completed) 
                                                                                    ? 'Completado'.green 
                                                                                    : 'Pendiente'.red} `;
        console.log(text);
        index ++;
    }
    }
}
const printTasks = ( arrTasks = [], showCompleted = true, index = 1 )=>{
    if ( showCompleted ) {
        for (task in arrTasks) {
            const txt = ` ${index.toString().green} ${ arrTasks[task].description } :: ${ 'Completado'.green } `;
            console.log(txt);
            index ++;
        }
    }else{
        for (task in arrTasks) {
            const txt = ` ${ index.toString().green } ${ arrTasks[task].description } :: ${ 'Pendiente'.red } `;
            console.log(txt);
            index ++;
        }
    }
}

 

module.exports = {

    showStateTaskList,
    showAllTaskList,

}