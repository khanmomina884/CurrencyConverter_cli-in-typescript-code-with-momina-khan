import inquirer from "inquirer";
import chalk from "chalk";
//define the list of currencies and thier echange rate 
console.log(chalk.blue.bold('\n \t Welcome CodewithMomina - Currency Conversion\n '));
//define the list of currencies and thier exchange rates
let exchange_rate = {
    "USD": 1, //best currency
    "EUR": 0.9, //european currency
    "JYP": 113, //japanease currency
    "CAD": 1.3, //canadian dollar 
    "AUD": 1.65, //australian dollar
    "PKR": 280, //pakistani rupees
    //add more currencies and thier exchange rate
};
// prpmt the user to select currencies to conver from to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ['USD', 'EUR', 'JYP', 'CAD', 'AUD', 'PKR']
    },
    {
        name: 'to_currency',
        type: 'list',
        message: "Select the currency to convert to",
        choices: ['USD', 'EUR', 'JYP', 'CAD', 'AUD', 'PKR'
        ]
    }, {
        name: 'amount',
        type: 'input',
        message: 'Enter the amount you want to convert',
    }
]);
//perform currency conversion 
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount 
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
