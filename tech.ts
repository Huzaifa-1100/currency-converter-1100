#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

const currency: any = {
    PKR: 1, // This base currency is prepared as per today's date (09-04-2024)
    USD: 0.0036,
    INR: 0.30,
    UAED: 0.013,
    CNY: 0.026
}
let startGreetings:string = "welcome to currency converter app 1100"
let endGreeting:string = "thakyou for choosing currency converter app 1100"
console.log(chalk.bgWhiteBright.red(`\t`+startGreetings.toUpperCase()))

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: chalk.bgGray.white("\n\t\tPlease Enter 1st Currency"),
            type: "list",
            choices: ["PKR", "USD", "INR", "UAED", "CNY"]
        },
        {
            name: "to",
            message: chalk.bgGray.white("\n\t\tPlease Enter 2nd Currency"),
            type: "list",
            choices: ["PKR", "USD", "INR", "UAED", "CNY"]
        },
        {
            name: "amount",
            type: "number",
            message: chalk.bgGray.white("\n\t\tPlease Enter your Amount")
        }
    ]
)

let fromCurrency = currency[userAnswer.from]
let toCurrency = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromCurrency
let convertedAmount = baseAmount * toCurrency

console.log(chalk.bgWhite.red(`\nCongratulations you have successfully converted your currency\n\t\tfrom ${userAnswer.from} to ${userAnswer.to}: ` +convertedAmount.toFixed(2)))
console.log(chalk.bgRed.white(`\n\t`+endGreeting.toUpperCase()))
