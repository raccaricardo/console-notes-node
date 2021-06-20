const Task = require("./task");

class Tasks {
  _list = {};

  get arrayList() {
    let taskList = [] ;
    
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      taskList.push(task);
    });
    return taskList;
  }

  /**
   * @function ChoiceTasksToComplete() To obtain array for tasks list to complete in  in inquirer.prompt
   *
   */
  choicesTasksToComplete() {
    let taskObjList = [];
    let i = 1;

    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];

      if (!task.is_completed) {
        taskObjList.push({
          value: task.id,
          name: `${i.toString().green} ${task.description} `,
        });
        i++;
      }
      return taskObjList;
    });

    return taskObjList;
  }
  choicesTasksToDelete() {
    let taskObjList = [];
    let i = 1;

    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];

      taskObjList.push({
        value: task.id,
        name: `${i.toString().green} ${task.description} `,
      });
      i++;

      return taskObjList;
    });

    return taskObjList;
  }
  
  choicesTasksToIncomplete() {
    let i = 1;
    let taskList = [] ;
    
    Object.keys(this._list).forEach( key => {

      const task = this._list[key];
      if( task.is_completed ){
        const taskObj = {
          value: task.id,
          name: `${i.toString().green} ${task.description} `,
        };
        taskList.push(taskObj);
        i++;
      }
      
    });

    return taskList;
  }

  data(data = []) {
    this._list = data;
  }

  constructor() {
    this._list = {};
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
  completeTask(taskId) {
    this._list = this._list.map((task) => {
      if (task.id == taskId) {
        task.is_completed = true;
      }
      return task;
    });
  }
  incompleteTask(taskId) {
    this._list = this._list.map((task) => {
      if (task.id == taskId) {
        task.is_completed = false;
      }
      return task;
    });
    console.log(`Tarea marcada como incompleta`)
  }
  deleteTask(taskId) {
    this._list = this._list.filter((task) => {
      if (task.id !== taskId) {
        return task;
      }
    });
  }
  deleteAllTasks() {
    this._list = [];
  }
}
module.exports = Tasks;
