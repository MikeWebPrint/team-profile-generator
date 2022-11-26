const inquirer = require('inquirer');
const fs = require('fs');
const addMember = require('./lib/addMember');
const empQuest = require('./lib/empQuest');

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


function inquireMember(team) {
  inquirer.prompt(addMember)
    .then((answers) => {
      if (answers.addMember === 'Yes') {
        createMember();
      } else {
        if (team.length > 0) {
          team => createTeam(team)
        } 
      }
    })
}

function createMember() {
  inquirer.prompt(empQuest)
    .then((answers) => {
      let { empName, role, empId, empEmail, github, internSchool, mgrOffice, } = answers;
      switch (role) {
        case 'Manager':
          let manager = new Manager(empName, empId, empEmail, mgrOffice);
          team.push(manager);
          break;
        case 'Engineer':
          let engineer = new Engineer(empName, empId, empEmail, github);
          team.push(engineer);
          break;
        case 'Intern':
          let intern = new Intern(empName, empId, empEmail, internSchool);
          team.push(intern);
          break;
        default:
          console.log('Your employee has no role.');
      }
      inquireMember();
      // createTeam(team)
    }
    )
}
function createTeam(team) {
  console.log(team);
  let employees = team.map(employee => {
    return `<div><h2>${employee.getName()}</h2><p>${employee.getRole()}</p><p>ID: ${employee.getId()}</p><p>E-mail: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p></div>`;

  });
  // renderTeam(employees);
  fs.appendFile('./src/team.html', `${employees}`, (err) => err ? console.error(err) : console.log('Team member created!'))
  // fs.appendFile('./src/team.json', `${JSON.stringify(team, null, 2)}\n`, (err) => err ? console.error(err) : console.log('Team member created!'))
}
// renderTeam = (employees) => {
//     fs.appendFile('./src/team.html', `${employees}`, (err) => err ? console.error(err) : console.log('Team member created!'))

// }

// parseTeam = (team) => {
//   const teamList = {}
//   team.forEach(member => {
//     teamList.add(member);
//   })
//   console.log(teamList)
// }
inquireMember()