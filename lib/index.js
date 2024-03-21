// import inquirer from "inquirer";
// let atm = await inquirer.prompt([{
//     type : "password",
//     name : "password",
//     message : "Enter Your Password",
//     mask : '*'
// }]);
// if(atm.password ==111){
//     console.log("WellCome Sir");
// }
// else
// console.log("Your Enter Invalid Number");
// import inquirer from 'inquirer';
// async function getPassword(): Promise<string> {
//     const response = await inquirer.prompt({
//         type: 'password',
//         name: 'password',
//         message: 'Enter your password:',
//         mask: '*' // to mask the user's input
//     });
//     return response.password;
// }
// async function main() {
//     try {
//         const password = await getPassword();
//         console.log('Entered password:', password);
//     } catch (error) {
//         console.error('Error occurred:', error);
//     }
// }
// main();
function areaOfCircle(r) {
    const pi = 3.142;
    let area = pi * r * r;
    console.log(area);
}
areaOfCircle(2);
export {};
