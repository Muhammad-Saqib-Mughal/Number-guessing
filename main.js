#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserguessedNumber",
        type: "number",
        message: "please select number b/w 1 - 10"
    }
]);
if (answer.UserguessedNumber === randomNumber) {
    console.log("you guessed it right");
}
else {
    console.log("you guessed wrong");
}
