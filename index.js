const employee = require('./lib/employee');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');



const Manager =  employee.Manager;
const Engineer = employee.Engineer;
const Intern = employee.Intern;

// const Mike = new Manager ('Mike', 45, 'mike@test.com', 46)
// const Jackie = new Intern('Jackie', 123, 'jackie@test.com', 'RWU')
// const Joe = new Engineer('Joe', 36, 'joe@test.com', 'bigJoeD');
// console.log(Mike);
// console.log(Joe);
// console.log(Jackie);

inquirer
  .prompt(questions.managerQuest)
  .then(questions.addMore)

  // .prompt(questions.teamQuest)
  // .prompt(questions.engineerQuest)
  // .prompt(questions.internQest)
  .then((response) =>{
    console.log(response)
  })