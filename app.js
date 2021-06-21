require("colors");

const {
  inquirerMenu,
  pause,
  readInput,
  getTaskToComplete,
  getTaskToDelete,
  getTaskToIncomplete,
} = require("./helpers/inquirer");

const { showAllTaskList, showStateTaskList } = require("./helpers/messages");
const { saveData, readData } = require("./helpers/saveFile");

const Tasks = require("./models/tasks");

const main = async () => {
  console.clear();

  let opt = "";
  const tasks = new Tasks();
  const db = readData();
  if (db) {
    tasks.data(db);
  }
  do {
    opt = await inquirerMenu();
    const arrayList = tasks.arrayList;
    switch (opt) {
      case "1": // Create task
        {
          console.clear();
          const desc = await readInput("Descripción: ");
          tasks.createTask(desc);
        }
        break;

      case "2":
        // show List tasks
        showAllTaskList(arrayList);
        break;

      case "3": //show list completed tasks
        showStateTaskList(arrayList, true);
        break;

      case "4": //show list pending tasks
        showStateTaskList(arrayList, false);
        break;

      case "5": //complete a task
        {
          const choicesTasks = tasks.choicesTasksToComplete();
          const idTask = await getTaskToComplete(choicesTasks);
          tasks.completeTask(idTask);
        }
        break;

      case "6": //delete a task
        {
          const choicesTasks = tasks.choicesTasksToDelete();
          const idTask1 = await getTaskToDelete(choicesTasks);
          tasks.deleteTask(idTask1);
        }
        break;

      case "7": //delete all tasks
        await pause();
        tasks.deleteAllTasks();
        break;

      case "8": // mark incomplete
        const idTask2 = await getTaskToIncomplete(
          tasks.choicesTasksToIncomplete()
        );
        tasks.incompleteTask(idTask2);
        break;

      default:
        break;
    }

    saveData(tasks.arrayList);

    if (opt !== "0" && opt !== "7") await pause();
  } while (opt !== "0");
};
main();
