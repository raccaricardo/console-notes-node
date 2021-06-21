const inquirer = require("inquirer");
require("colors"); //no lo asignamos a una contante porque no necesatimos traer ningun metodo

/**
 * @array menuQuestions
 * defines the type of function(  list,input )
 *
 */
const menuQuestions = [
  {
    type: "list",
    name: "option",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: ` ${"1.".green} Crear tarea `,
      },
      {
        value: "2",
        name: ` ${"2.".green} Listar tarea `,
      },
      {
        value: "3",
        name: ` ${`3.`.green} Listar tareas completadas `,
      },
      {
        value: "4",
        name: ` ${`4.`.green} Listar tareas pedientes `,
      },
      {
        value: "5",
        name: ` ${`5.`.green} Completar tarea `,
      },
      {
        value: "6",
        name: ` ${`6.`.green} Eliminar tarea `,
      },
      {
        value: "7",
        name: ` ${`7.`.green} Eliminar todas las tareas `,
      },
      {
        value: "8",
        name: ` ${`8.`.green} Marcar una tarea como incompleta `,
      },
      {
        value: "0",
        name: ` ${`0.`.green} Salir `,
      },
    ],
  },
];
//choicesList for inquirer.prompt(). In this case, choices of tasks to mark incomplete, complete

const choicesTasksTo = (choices, message) => {
  return [
    {
      type: "list",
      name: "idTask",
      message,
      choices,
    },
  ];
};

/*
 *
 *         HEADER MENU
 *
 */
const inquirerMenu = async () => {
  console.clear();
  console.log(`==================================================`.green);
  console.log("            Seleccione una opción                 ".bgCyan);
  console.log(`==================================================\n`.green);

  const { option } = await inquirer.prompt(menuQuestions);

  return option;
};
/**
 *
 * @function pause A function to avoid the end of program
 *
 */
const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(` Presiene ${"ENTER".green} para continuar `, (opt) => {
      //opt es la opcion seleccionada
      readline.close();
      resolve();
    });
  });
};

/**
 *
 * @param {string} message message to show before to readInput
 * @returns {string} input by user
 *
 */
const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

const getTaskToComplete = async (taskObjList) => {
  const message = "Seleccione una tarea para completar";
  const { idTask } = await inquirer.prompt(
    choicesTasksTo(taskObjList, message)
  );
  return idTask;
};
const getTaskToDelete = async (taskObjList) => {
  const message = "Seleccione una tarea para eliminar";
  const { idTask } = await inquirer.prompt(
    choicesTasksTo(taskObjList, message)
  );
  return idTask;
};
const getTaskToIncomplete = async (taskObjList) => {
  const message = "Seleccione una tarea para marcar como incompleta";
  const { idTask } = await inquirer.prompt(
    choicesTasksTo(taskObjList, message)
  );
  return idTask;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  getTaskToComplete,
  getTaskToDelete,
  getTaskToIncomplete,
};
