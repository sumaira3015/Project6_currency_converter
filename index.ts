#!/usr/bin/env node
import inquirer from "inquirer";

let currencyValue: {[key:string]:number} = {
    PKR:278.4,
    UAE:3.67,
    USD:1

}

let ans = await  inquirer.prompt([{
type:"list",
name:"from",
message:"Converting From",
choices:['PKR','UAE','USD']
},
{
    type:"list",
    name:"to",
    message:"Converting ",
    choices:['PKR','UAE','USD']
    },
    {
        type:"number",
        name:"Amount",
        message:"Your amount to convert"
    }
])
console.log(currencyValue[ans.to]/currencyValue[ans.from]*ans.Amount);