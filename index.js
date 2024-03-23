#! /usr/bin/env node 
import inquirer from "inquirer";
// Printing a wellcome meassge
console.log("\n\tWellcome To \'GuessMaster\' - CLI Number Guessing Game\n");
// 1. Computer will generate a random number 
// 2. user input for guessing number 
// 3. compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a number.");
}
else {
    console.log("Sorry..!!! you guessed wrong number.");
}
