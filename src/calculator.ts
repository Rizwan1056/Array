import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter 1st Number :", name: "firstNum", type: "number" },
  { message: "Enter 2nd Number :", name: "secondNum", type: "number" },

  {
    message: "Select operator :",
    name: "operator",
    type: "list",
    choices: ["+", "-", "*", "/", "%","^"],
  },]);

if (answer.operator === "+") {
  console.log("Addition of " + answer.firstNum + " and " + answer.secondNum + " is : ");
  console.log(answer.firstNum + answer.secondNum);

} else if (answer.operator == "-") {
  console.log("Subtraction of " + answer.firstNum + " and " + answer.secondNum + " is : ");
  console.log(answer.firstNum - answer.secondNum);

} else if (answer.operator === "*") {
  console.log("Multiplication of " +answer.firstNum +" and " +answer.secondNum +" is : ");
  console.log(answer.firstNum * answer.secondNum);

} else if (answer.operator === "/") {
  console.log("Division of " + answer.firstNum + " and " + answer.secondNum + " is : ");
  console.log(answer.firstNum / answer.secondNum);

} else if (answer.operator === "%") {
  console.log("Modulus of " + answer.firstNum + " and " + answer.secondNum + " is : ");
  console.log(answer.firstNum % answer.secondNum);

} else if (answer.operator === "^") {
  console.log("Power of " + answer.firstNum + " and " + answer.secondNum + " is : ");
  console.log(answer.firstNum ** answer.secondNum);

} else console.log("Invalid Operator =>");
