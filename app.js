require('colors');


const { inquirerMenu, pause, readInput, getTaskToComplete } = require('./helpers/inquirer');

const { showStateTaskList } = require('./helpers/messages');
const { saveData, readData } = require('./helpers/saveFile');

const Tasks = require('./models/tasks');



const main = async () => {
  console.clear();

  let opt = '';
  const tasks = new Tasks();
  const db = readData();
  if (db) {
    tasks.data(db);
  }
  do {

    opt = await inquirerMenu();

    switch (opt) {
      case '1': //// Create task
        const desc = await readInput('Descripción: ');
        tasks.createTask(desc);
        break;

      case '2':
        // show List tasks
        showStateTaskList(tasks.arrayList, 1);
        break;

      case '3'://show list completed tasks
        showStateTaskList(tasks.arrayList, 2);
        break;
        
      case '4': //show list pending tasks
        showStateTaskList(tasks.arrayList, 3);
        break;

      case '5': //complete a task

        const idTask = await getTaskToComplete( tasks.choiceTaskList() );
        // const idTask = listTaskToComplete(tasks.arrayObjList());
        // tasks.completeTask('id task ' ,idTask); // ? console.log( 'terminado' ) : console.log( 'error al completar tarea' );
        tasks.completeTask( idTask ) ;
        break;
      default:
        break;
    }

    saveData(tasks.arrayList);
    await pause();

    if (opt !== '0') await pause();


  } while (opt !== '0');




}
main();