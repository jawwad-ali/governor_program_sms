#! /usr/bin/env node
import inquirer from "inquirer";
async function Calculator() {
    const userInput = await inquirer.prompt([
        { message: "Enter First Number", type: "number", name: "firstNumber" },
        { message: "Enter Second Number", type: "number", name: "secondNumber" },
        {
            message: "Enter Operator",
            type: "list",
            name: "operator",
            choices: ["addition", "subtraction", "division", "multiplication", "modulus"]
        }
    ]);
    if (userInput.operator === "addition") {
        console.log(userInput.firstNumber + userInput.secondNumber);
    }
    else if (userInput.operator === "subtraction") {
        console.log(userInput.firstNumber - userInput.secondNumber);
    }
    else if (userInput.operator === "division") {
        console.log(userInput.firstNumber / userInput.secondNumber);
    }
    else if (userInput.operator === "multiplication") {
        console.log(userInput.firstNumber * userInput.secondNumber);
    }
    // 2 * 2 * 2 * 2 * 2
    else if (userInput.operator === "modulus") {
        console.log(userInput.firstNumber ** userInput.secondNumber);
    }
    else {
        console.log("Enter valid values");
    }
}
Calculator();
