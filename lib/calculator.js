import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter 1st Number :",
        name: "firstNum",
        type: "number",
    },
    {
        message: "Enter 2nd Number :",
        name: "secondNum",
        type: "number",
    },
    {
        message: "Select operater :",
        name: "operator",
        type: "list",
        choices: ['+', "-", "*", "/", "%"],
    }
]);
if (answer.operator === "+") {
    console.log(answer.firstNum + answer.secondNum);
}
else if (answer.operator == "-") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operator === "*") {
    console.log(answer.firstNum * answer.secondNum);
}
else if (answer.operator === "/") {
    console.log(answer.firstNum / answer.secondNum);
}
else if (answer.operator === "%") {
    console.log(answer.firstNum % answer.secondNum);
}
else
    console.log("Invalid Operator =>");
