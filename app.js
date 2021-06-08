require('colors');


const { inquirerMenu, pause, readInput, listTaskToComplete } = require('./helpers/inquirer');
const { taskList, showStateTaskList } = require('./helpers/messages');
const { saveData, readData } = require('./helpers/saveFile');
const Task = require('./models/Task');
const Tasks = require('./models/tasks');



const main = async () => {

  let opt = '';
  const tasks = new Tasks();
  const db = readData();
  if (db) {
    tasks.data(db);
  }
  do {

    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await readInput('Descripción: ');
        tasks.createTask(desc);
        break;

      case '2':
        // taskList(tasks.arrayList, 1);
        showStateTaskList(tasks.arrayList, 1);
        break;

      case '3':
        showStateTaskList(tasks.arrayList, 3);

        // const taskObjList = tasks.taskObjList;
        // const value = await listTaskToComplete(taskObjList);
        // console.log('valor ',value);
        // completeTask(task);
        break;
      case '4':
        showStateTaskList(tasks.arrayList, 4);
        break;
      default:
        break;
    }

    saveData(tasks.arrayList);

    if (opt !== '0') await pause();


  } while (opt !== '0');




}
main();