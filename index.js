const inquirer = require('inquirer');
const fs = require('fs');
const addMember = require('./lib/addMember');
const empQuest = require('./lib/empQuest');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const team = [];

const renderHtml = require('./src/page')

inquireMember = () => {
  inquirer.prompt(addMember)
    .then((answers) => {
      if (answers.addMember === 'Yes') {
        createMember();
      } else {
        console.log();
        if (team.length > 0) {
          createTeam(team)
        } 
      }
    })
}

createMember = () => {
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
    }
    )
}

createTeam = (team) => {
  console.log(team);
  let employees = team.map(employee => {
    return `<aside>
    <table>
      <thead>
        <tr>
          <th colspan="2">${employee.name}</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            Role:
          </td>
          <td>${employee.role}            </td>
          </tr>
          <tr>
            <td>
              ID:
            </td>
            <td>${employee.id}            </td>
            </tr>
            <tr>
              <td>
                Email:
              </td>
              <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            </tr>
            <tr>
            <td>
              Office:
            </td>
            <td>${employee.officeNumber}</td>
          </tr>
          <tr>
          <td>
            github:
          </td>
          <td><a href="https://www.github.com/${employee.github}" target="_blank">${employee.github}</a></td>
        </tr>
        <tr>
        <td>
          School:
        </td>
        <td>${employee.school}</td>
      </tr>
              </tbody>
              </table></aside>`
    ;

  });
  renderTeam(employees);

}

function renderTeam(){
    fs.writeFileSync('./dist/team.html', renderHtml(team), 'utf-8')
}

inquireMember()
