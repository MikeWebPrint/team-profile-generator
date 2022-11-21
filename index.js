const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const employee = require('./lib/employee');
const Manager = employee.Manager;
const Engineer = employee.Engineer;
const Intern = employee.Intern;
const team = [];

// const Mike = new Manager ('Mike', 45, 'mike@test.com', 46)
// const Jackie = new Intern('Jackie', 123, 'jackie@test.com', 'RWU')
// const Joe = new Engineer('Joe', 36, 'joe@test.com', 'bigJoeD');
// console.log(Mike);
// console.log(Joe);
// console.log(Jackie);
function createTeam() {
  return inquirer.prompt(questions.teamQuest)
    .then((answers) => {
      team.push(answers)
      if (answers.addAnotherMember) {
        return createTeam()
      } else {
        console.log(team)
        return (team)
      }
    }
    )
    .then((team) => {
      fs.appendFile('./src/team.json', `${JSON.stringify(team, null, '\t')}\n`, (err) => err ? console.error(err) : console.log('Team member created!'))
    })
  }

createTeam()
// parseTeam = (team) => {
//   const teamList = {}
//   team.forEach(member => {
//     teamList.add(member);
//   })
//   console.log(teamList)
// }
