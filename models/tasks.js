const Task = require("./task");


class Tasks {

    _list = {};

    get arrayList() {
        let taskList = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            taskList.push(task);
        });
        return taskList;
    }

    /**
     * @function choiceTaskList() To obtain array for tasks list to complete in  in inquirer.prompt
    *  
    */
    choiceTaskList() {
        let taskObjList = [];
            let i = 1;
            
            Object.keys(this._list).forEach( ( key) => {
                const task = this._list[key];
                
                if ( !task.is_completed ) {
                    taskObjList.push({
                        value: task.id,
                        name: `${ i.toString().green } ${ task.description } `
                    });
                    i++;
                }
                 return taskObjList;
            });
        
        
        return taskObjList;
    }

    data( data = [] ) {
        this._list = data;
        
    }

    constructor() {
        this._list = {};
    }

    createTask( desc = '' ) {
        const task = new Task( desc );
        this._list[task.id] = task;

    }
    completeTask( taskId ) {
        this._list = this._list.map( task => {
            if ( task.id == taskId){
                task.is_completed = true;
            }
            return task;
        } )
        console.log('this', this._list);
         // this._list = newList;
    }
}
module.exports = Tasks;