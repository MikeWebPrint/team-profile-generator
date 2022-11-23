const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
// const employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const team = [];

const Mike = new Manager ('Mike', 45, 'mike@test.com', 46)
const Jackie = new Intern('Jackie', 123, 'jackie@test.com', 'RWU')
const Bob = new Intern('Bob', 456, 'bob@test.com', 'uconn')

const Joe = new Engineer('Joe', 36, 'joe@test.com', 'bigJoeD');
console.log(Mike);
console.log(Joe);
console.log(Jackie);
console.log(Bob);
function createTeam() {
  return inquirer.prompt(questions.teamQuest)
    .then((answers) => {
      team.push(answers)
      if (answers.addAnotherMember) {
        return createTeam()
      } else {
        console.log(team)
        console.log(answers)
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
