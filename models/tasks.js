const Task = require("./task");


class Tasks {

    _listado = {};

    get arrayList() {
        let taskList = [];
        Object.keys(this._listado).forEach( key => {
            const task = this._listado[key];
            taskList.push(task);
        });
        return taskList;
    }

    /**
     * To obtain array for tasks list to complete in @function completeTask() in inquirer
     */
    get arrayObjList() {
        let taskObjList = [];
        Object.keys(this._listado).forEach( key => {
            const task = this._listado[key];
            taskObjList.push({
                value: task.id,
                name: task.name,
            });
        });
        return taskObjList;
    }

    data( data = [] ) {
        this._listado = data;
        
    }

    constructor() {
        this._listado = {};
    }

    createTask( desc = '' ) {
        const task = new Task( desc );
        this._listado[task.id] = task;

    }
    completeTask( task ) {
        this._listado[task.id].is_completed = true;
    }
}

module.exports = Tasks;