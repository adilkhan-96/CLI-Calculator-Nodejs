#! /usr/bin/env node
import { calfunc } from "./calculator.js";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 3000); });
};
async function start() {
    let rainbowTitle = chalkAnimation.rainbow("Lets start a CLI Calculator");
    await sleep();
    rainbowTitle.replace("With the help of Node Js and user input");
    await sleep();
    let pulseTitle = chalkAnimation.pulse("Developed by Adil Khan");
    await sleep();
    pulseTitle.stop();
}
await start();
async function question() {
    const final = await inquirer.prompt([{
            message: chalk.greenBright("Enter your first number"),
            type: "number",
            name: "firstNum"
        },
        {
            message: chalk.red("select your operator from the list"),
            type: "list",
            choices: ["+", "-", "*", "/"],
            name: "opr"
        },
        {
            message: chalk.greenBright("Enter your second number"),
            type: "number",
            name: "secondNum"
        }]);
    console.log(chalk.yellow(final.firstNum));
    console.log(chalk.red(final.opr));
    console.log(chalk.yellow(final.secondNum));
    let result = calfunc(final.firstNum, final.opr, final.secondNum);
    console.log("=", chalk.green(result));
}
await question();
async function continueLoop() {
    const restart = await inquirer.prompt({
        message: chalk.blue("Do you want to continue the program"),
        type: "list",
        choices: ["Yes", "No"],
        name: "again"
    });
    if (restart.again === "Yes") {
        await question();
        await continueLoop();
    }
    else {
        console.log(chalk.green("Your program is ended. Thank you!"));
    }
}
await continueLoop();
