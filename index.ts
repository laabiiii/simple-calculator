#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  {message: "enter second number", type: "number", name: "secondnumber"},
  {message: "select one of the operator to perform action",
type:"list",
name:"operator",
choices:["addition","subtraction","multipication","division"],

 }
]);
// conditional statement
if (asnwer.operator==="addition"){
    console.log (asnwer.firstnumber + asnwer.secondnumber);
} else if (asnwer.operator==="subtraction") {    console.log (asnwer.firstnumber - asnwer.secondnumber);
} else if (asnwer.operator==="multipication") {console.log (asnwer.firstnumber * asnwer.secondnumber);}
else if (asnwer.operator==="division") {    console.log (asnwer.firstnumber / asnwer.secondnumber);
} else { console.log("please select valid operator")}
