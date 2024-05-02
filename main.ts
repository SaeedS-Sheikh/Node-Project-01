#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    name: "firstNumber",
    type: "number",
    message: "Enter your First Number: ",
  },
  {
    name: "secondNumber",
    type: "number",
    message: "Enter your Second Number: ",
  },
  {
    name: "Operator",
    type: "list",
    message: "Choose your operator: ",
    choices: ["Addition", "Subtract", "Multiplication", "Division"],
  },
]);

if ("Addition" == answer.Operator) {
  console.log(answer.firstNumber + answer.secondNumber);
} else if ("Subtraction" == answer.Operator) {
  console.log(answer.firstNumber - answer.secondNumber);
} else if ("Multiplication" == answer.Operator) {
  console.log(answer.firstNumber * answer.secondNumber);
} else if ("Division" == answer.Operator) {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Invalid Input");
}

console.log("The End");
