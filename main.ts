#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.yellow.bold("\n \t WellCome to CodeIrfan - Todo-List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
                name: "Task",
                type: "input",
                message: chalk.green("Enter your New Task :"),
    }
]);
todoList.push(addTask.Task);
console.log(`${addTask.Task} Task Added in Todo-List succcesfully`);

let addMoreTask = await inquirer.prompt([
    {
        name: "addmore",
        type: "confirm",
        message: chalk.green("Do you want to add more task ?"),
        default: "False",
    }
]);
conditions = addMoreTask.addmore
}
console.log("Your updated Todo-List:" , todoList);