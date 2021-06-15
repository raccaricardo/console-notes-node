const { v4 : uuidv4 } = require('uuid');

class Task{
    
    id = '';
    description = '';
    created_at = null;
    is_completed = false;

    constructor( description ) {

        this.id = uuidv4();
        this.description = description; 
        this.is_completed = false;
        //this.createdAt = new Date();
        // this.completedOn = completedOn;

    }

    
}


module.exports = Task;