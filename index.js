"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var currencyValue = {
    PKR: 278.4,
    UAE: 3.67,
    USD: 1
};
var ans = await inquirer_1.default.prompt([{
        type: "list",
        name: "from",
        message: "Converting From",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "list",
        name: "to",
        message: "Converting ",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "number",
        name: "Amount",
        message: "Your amount to convert"
    }
]);
console.log(currencyValue[ans.to] / currencyValue[ans.from] * ans.Amount);
