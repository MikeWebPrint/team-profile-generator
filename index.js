const inquirer = require('inquirer');
const fs = require('fs');
const addMember = require('./lib/addMember');
const teamQuest = require('./lib/teamQuest');

// const employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const team = [];

// const Mike = new Manager ('Mike', 45, 'mike@test.com', 46)
// const Jackie = new Intern('Jackie', 123, 'jackie@test.com', 'RWU')
// const Bob = new Intern('Bob', 456, 'bob@test.com', 'uconn')

// const Joe = new Engineer('Joe', 36, 'joe@test.com', 'bigJoeD');
// console.log(Mike);
// console.log(Joe);
// console.log(Jackie);
// console.log(Bob);


function inquireMember() {
  return inquirer.prompt(addMember)
    .then((answers) => {
      if (answers.addMember === 'Yes') {
        createMember();
      } else {
        console.log('Done!')
        return
      }
    })
}

function createMember() {
  inquirer.prompt(teamQuest)
    .then((answers) => {
      let { empName, role, empId, empEmail, github, internSchool, mgrOffice, } = answers;
      switch (role) {
        case 'Manager':
          let manager = new Manager(empName, empId, empEmail, mgrOffice);
          team.push(manager);
          console.log(`Your employee is a(n) ${role}.`);
          break;
        case 'Engineer':
          let engineer = new Engineer(empName, empId, empEmail, github);
          team.push(engineer);
          console.log(`Your employee is a ${role}.`);
          break;
        case 'Intern':
          let intern = new Intern(empName, empId, empEmail, internSchool);
          team.push(intern);
          console.log(`Your employee is a ${role}.`);
          break;
        default:
          console.log('Your employee has no role.');
      }
      return (team);
    }
    )
    .then((team) => {
      fs.appendFile('./src/team.json', `${JSON.stringify(team, null, 2)}\n`, (err) => err ? console.error(err) : console.log('Team member created!'))
    })
}


// parseTeam = (team) => {
//   const teamList = {}
//   team.forEach(member => {
//     teamList.add(member);
//   })
//   console.log(teamList)
// }
inquireMember()