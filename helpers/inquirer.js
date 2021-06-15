const inquirer = require('inquirer');
const Task = require('../models/task');
const Tasks = require('../models/tasks');
require('colors');//no lo asignamos a una contante porque no necesatimos traer ningun metodo

/**
 * @array menuQuestions
 * defines the type of function(  list,input )
 * 
 */
const menuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'what you want to do?',
        choices: [
            {
                value: '1',
                name: ` ${'1.'.green} Crear tarea `
            },
            {
                value: '2',
                name: ` ${'2.'.green} Listar tarea `
            },
            {
                value: '3',
                name: ` ${`3.`.green} Listar tareas completadas `
            },
            {
                value: '4',
                name: ` ${`4.`.green} Listar tareas pedientes `
            },
            {
                value: '5',
                name: ` ${`5.`.green} Completar tarea(s) `
            },
            {
                value: '0',
                name: ` ${`0.`.green} Salir `
            },

        ]
    }
];
const taskToComplete = (choices) => {
    return [
        {
            type: 'list',
            name: 'idTask',
            message: 'Select a task to complete',
            choices 
        }
    ]
}
/*
*
*         HEADER MENU
*
*/
const inquirerMenu = async () => {

    console.clear();
    console.log(`==================================================`.green);
    console.log('            Seleccione una opción                 '.bgCyan );
    console.log(`==================================================\n`.green);

    const { option } = await inquirer.prompt(menuQuestions);

    return option;

}
/**
 * 
 * @function pause A function to avoid the end of program 
 * 
 */
const pause = () => {
    return new Promise((resolve) => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(` Presiene ${'ENTER'.green} para continuar `, (opt) => {
            //opt es la opcion seleccionada                        
            readline.close();
            resolve();
        })
    })
}

/**
 * 
 * @param {string} message message to show before to readInput
 * @returns {string} input by user
 * 
 */
const readInput = async ( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}

const getTaskToComplete = async (taskObjList) => {

  
    const { idTask } = await inquirer.prompt(taskToComplete(taskObjList));
    
    
    
    return idTask;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    getTaskToComplete
}