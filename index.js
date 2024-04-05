#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mypin = 1234;
let myBal = 150000;
let pinAnswer = await inquirer.prompt({
    message: "Enter your pincode",
    name: "pincode",
    type: "number"
});
console.log(`Your account balance is $`, myBal);
if (pinAnswer.pincode === mypin) {
    console.log(chalk.greenBright `Your pincode is correct.`);
    let operatorAns = await inquirer.prompt({
        message: "Select your operation",
        name: "operation",
        type: "list",
        choices: ["Withdraw", "Fast Cash", "Check Bal"]
    });
    if (operatorAns.operation === "Check Bal") {
        console.log(chalk.yellowBright `Your current balance is $`, myBal);
    }
    else if (operatorAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt({
            message: "Enter your amount",
            name: "amount",
            type: "number",
        });
        if (amountAns.amount <= myBal) {
            let balance = myBal - amountAns.amount;
            console.log(chalk.bgBlue `Your remaining balance is $`, balance);
        }
        else {
            console.log(chalk.bgCyan `You have insufficient balance`);
        }
    }
    else if (operatorAns.operation === "Fast Cash") {
        let fastcashAns = await inquirer.prompt([
            {
                message: "Please select your amount",
                name: "fastcash",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 20000, 50000],
            },
        ]);
        if (fastcashAns.fastcash <= myBal) {
            let balance2 = myBal - fastcashAns.fastcash;
            console.log(chalk.greenBright `Your remaining balance is $`, balance2);
        }
        else
            console.log("Your pincode is invalid");
    }
}
;
